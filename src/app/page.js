'use client';

import HeroSection from '@/components/heroSection';
import Filter from '@/components/filter'; // Ensure Filter component is imported correctly
import VendorCard from '@/components/vendorCard'; // Ensure VendorCard component is imported correctly
import Profile from '@/components/profile'; // Ensure Profile component is imported correctly
import Link from 'next/link'; // Ensure Link is imported correctly

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from 'react'; // Ensure useEffect and useState are imported correctly

export default function Home() {
  const [vendors, setVendors] = useState([]); // Added state to store vendors
  const [selectedFilters, setSelectedFilters] = useState({}); // Added state for selected filters
  const [searchedVendor, setSearchedVendor] = useState(''); // Added state for searched vendor

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

  // Filter vendors based on selected filters and searched vendor
  const filteredVendors = vendors.filter(vendor => {
    // Normalize vendor category to match selected filters
    const normalizedCategory = vendor.primary_category.replace(/\s+/g, ''); // Remove spaces
    const matchesFilters = Object.keys(selectedFilters).length === 0 || selectedFilters.includes(normalizedCategory);
    const matchesSearch = searchedVendor === '' || vendor.name.toLowerCase().includes(searchedVendor.toLowerCase());
    return matchesFilters && matchesSearch;
  });

  // Ensure that the button is rendered consistently
  const isButtonVisible = vendors.length > 0; // Example condition

  return (
    <main className="h-screen w-full bg-[#F3F3F3] overflow-y-auto"> 
      <div className="flex flex-col h-full">
        <div className="flex-grow flex justify-center">
          <div className="flex w-full max-w-10xl mx-20 my-10" > 
            <div className="w-1/4 h-screen rounded-lg p-8 shadow-md mx-15" style={{ backgroundColor: 'white', position: 'sticky', top: 40 }}> {/* Left Column with increased padding */}
              <Filter setSelectedFilters={setSelectedFilters} /> {/* Pass function to update filters */}
            </div>
            <div className="w-1/2 mx-15" style={{ marginLeft: '30px', marginRight: '30px' }}> {/* Center Column with 30px margins */}
              <HeroSection setSearchedVendor={setSearchedVendor} /> {/* Pass setSearchedVendor to HeroSection */}
              <div className="container mx-auto grid grid-cols-1 gap-y-5" style={{ overflowY: 'hidden', marginTop: '20px' }}> {/* Added overflowY hidden to prevent vertical scrolling and top margin of 20px */}
                {filteredVendors.map(vendor => ( // Map over filtered vendors
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
                      best_for_persona={vendor.best_for_persona}
                      best_for_industries={vendor.best_for_industries}
                      best_for_company_size={vendor.best_for_company_size}
                    />
                ))}
              </div>
            </div>
            <div className="w-1/4 h-[288px] rounded-lg p-4 shadow-md mx-15 flex justify-center items-center" style={{ backgroundColor: 'white', position: 'sticky', top: 40 }}> {/* Right Column with 30px margins */}
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
