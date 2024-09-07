'use client';

import React, { useEffect, useState, Suspense } from 'react'; // Ensure React is imported
import Link from 'next/link'; // Ensure Link is imported correctly

// Import Mixpanel SDK
import mixpanel from "mixpanel-browser";

// Near entry of your product, init Mixpanel
mixpanel.init("28a50f0a8bc083d352ef5c1146c3414f", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

import { supabase } from "@/lib/supabase";

// Lazy load components
const HeroSection = React.lazy(() => import('@/components/heroSection'));
const Filter = React.lazy(() => import('@/components/filter'));
const VendorCard = React.lazy(() => import('@/components/vendorCard'));
const Profile = React.lazy(() => import('@/components/profile'));

export default function Home() {
  const [userName, setUserName] = useState(''); // State for user name
  const [userEmail, setUserEmail] = useState(''); // State for user email
  const [vendors, setVendors] = useState([]); // Added state to store vendors
  const [selectedFilters, setSelectedFilters] = useState({}); // Added state for selected filters
  const [searchedVendor, setSearchedVendor] = useState(''); // Added state for searched vendor
  const [isProfileVisible, setIsProfileVisible] = useState(true); // State to manage profile visibility
  const [isStacked, setIsStacked] = useState(false); // State to manage stacking of components
  const [isFilterSticky, setIsFilterSticky] = useState(true); // State to manage filter sticky constraint
  const [isFilterVisible, setIsFilterVisible] = useState(false); // Set filter visibility to false by default

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError) {
        console.error('Error fetching user:', authError);
        return; // Exit if there's an authentication error
      }
      if (!user) {
        console.error('No user found');
        return; // Exit if no user is authenticated
      }
      
      const { data, error: userError } = await supabase
        .from('users')
        .select('full_name, email')
        .eq('id', user.id)
        .single();
      if (userError) {
        console.error('Error fetching user details:', userError);
      } else {
        setUserName(data.full_name);
        setUserEmail(data.email);
        mixpanel.identify(data.email);
        // console.log(`Mixpanel identify called with userEmail: ${data.email}`);

        mixpanel.people.set({
          '$name': data.full_name,
          '$email': data.email,
        });
        // console.log(`Mixpanel people.set called with userName: ${data.full_name} and userEmail: ${data.email}`);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    const setNewView = async () => {
      const { data, error } = await supabase.from("vendors").select('*');
      if (data) {
        setVendors(data); // Set the fetched data to state
      }
      if (error) console.log(error.message); // Log the error message
    };
    setNewView(); // Call the function on component mount
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1150) {
        setIsProfileVisible(false);
      } else {
        setIsProfileVisible(true);
      }
      if (window.innerWidth <= 950) {
        setIsStacked(true);
        setIsFilterSticky(false); // Remove sticky constraint for filter component
      } else {
        setIsStacked(false);
        setIsFilterSticky(true); // Add sticky constraint for filter component
        setIsFilterVisible(true); // Expand filters when not stacked
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter vendors based on selected filters and searched vendor
  const filteredVendors = vendors.filter(vendor => {
    // Normalize vendor category to match selected filters
    const normalizedCategory = vendor.primary_category.replace(/\s+/g, ''); // Remove spaces
    const matchesFilters = Object.keys(selectedFilters).length === 0 || selectedFilters.includes(normalizedCategory);
    const matchesSearch = searchedVendor === '' || vendor.name.toLowerCase().includes(searchedVendor.toLowerCase());
    return matchesFilters && matchesSearch;
  });

  return (
    <main className="h-screen w-full bg-[#F3F3F3] overflow-y-auto"> 
      <div className="flex flex-col h-full">
        <div className="flex-grow flex justify-center">
          <div className={`flex w-full max-w-10xl ${isStacked ? 'mx-5' : 'mx-20'} my-10 ${isStacked ? 'flex-col' : ''}`} style={{ flexGrow: 1 }}> 
            <div className={`w-1/4 ${isFilterVisible ? 'h-auto' : 'h-16'} rounded-lg pt-4 pb-8 shadow-md mx-15 ${isStacked ? 'w-full' : ''}`} style={{ backgroundColor: 'white', position: isFilterSticky ? 'sticky' : 'static', top: 40, flexGrow: 1, transition: 'height 0.3s ease' }}> {/* Left Column with increased padding and adjustable height */}
              <button 
                onClick={() => setIsFilterVisible(prev => !prev)} 
                className="mb-2 text-gray-700 text-sm flex items-center justify-center h-10 w-full"
                style={{ display: isStacked ? 'block' : 'none' }} // Hide button when not stacked
              >
                {isFilterVisible ? 'Collapse Filters' : 'Expand Filters'}
              </button>
              {isFilterVisible && (
                <Suspense>
                  <Filter setSelectedFilters={setSelectedFilters} /> {/* Pass function to update filters */}
                </Suspense>
              )}
            </div>
            <div className={`w-1/2 ${isStacked ? 'w-full mt-10' : 'mx-15'}`} style={{ marginLeft: isStacked ? '0' : '30px', marginRight: isStacked ? '0' : '30px', flexGrow: 2 }}> {/* Center Column with adjustable margins */}
              <Suspense>
                <HeroSection setSearchedVendor={setSearchedVendor} /> {/* Pass setSearchedVendor to HeroSection */}
              </Suspense>
              <div className="container mx-auto grid grid-cols-1 gap-y-5" style={{ overflowY: 'hidden', marginTop: '20px' }}> {/* Added overflowY hidden to prevent vertical scrolling and top margin of 20px */}
                {filteredVendors.map(vendor => ( // Map over filtered vendors
                  <Suspense key={vendor.id}>
                    <VendorCard 
                      name={vendor.name} 
                      primary_category={vendor.primary_category}
                      secondary_categories={vendor.secondary_categories}
                      description={vendor.description} 
                      logo_url={vendor.logo_url} 
                      created_at={vendor.created_at}
                      website_url={vendor.website_url} 
                      founded={vendor.founded}
                      country={vendor.country}
                      best_for_personas={vendor.best_for_personas}
                      best_for_industries={vendor.best_for_industries}
                      best_for_company_size={vendor.best_for_company_size}
                    />
                  </Suspense>
                ))}
              </div>
            </div>
            {isProfileVisible && (
              <div className="w-1/4 h-[288px] rounded-lg p-4 shadow-md mx-15 flex justify-center items-center" style={{ backgroundColor: 'white', position: 'sticky', top: 40, flexGrow: 1 }}> {/* Right Column with 30px margins */}
                <Suspense>
                  <Profile />
                </Suspense>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
