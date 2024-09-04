'use client';

import HeroSection from '@/components/heroSection';
import Filter from '@/components/filter'; // Added import for Filter component
import VendorCard from '@/components/vendorCard'; // Added import for VendorCard component

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from 'react'; // Added import for useEffect and useState

export default function Home() {
  const [vendors, setVendors] = useState([]); // Added state to store vendors
  const [selectedFilters, setSelectedFilters] = useState({}); // Added state for selected filters

  const setNewView = async () => {
    const { data, error } = await supabase.from("vendors").select('*');
    if (data) {
      console.log("Retrieved vendors data:", data);
      console.log(data);
      setVendors(data); // Set the fetched data to state
    }
    if (error) console.log(error.message); // Log the error message
  };

  useEffect(() => {
    setNewView(); // Call the function on component mount
  }, []); // Empty dependency array to run once on mount

  // Filter vendors based on selected filters
  const filteredVendors = vendors.filter(vendor => {
    // Normalize vendor category to match selected filters
    const normalizedCategory = vendor.primary_category.replace(/\s+/g, ''); // Remove spaces
    return Object.keys(selectedFilters).length === 0 || selectedFilters.includes(normalizedCategory);
  });

  return (
    <main className="h-screen w-full bg-[#F3F3F3] overflow-y-auto"> {/* Added overflow-y-auto to enable vertical scrolling */}
      <div className="flex flex-col h-full">
        <div className="flex-grow flex justify-center">
          <div className="flex w-full max-w-10xl mx-20 my-10" > 
            <div className="w-1/4 h-screen rounded-lg p-4 shadow-md mx-15" style={{ backgroundColor: 'white', position: 'sticky', top: 40 }}> {/* Left Column with 30px margins */}
              <Filter setSelectedFilters={setSelectedFilters} /> {/* Pass function to update filters */}
            </div>
            <div className="w-1/2 mx-15" style={{ marginLeft: '30px', marginRight: '30px' }}> {/* Center Column with 30px margins */}
              <HeroSection /> {/* HeroSection component inserted */}
              <div className="container mx-auto grid grid-cols-1 gap-y-5" style={{ overflowY: 'hidden' }}> {/* Added overflowY hidden to prevent vertical scrolling */}
                {filteredVendors.map(vendor => ( // Map over filtered vendors
                  <VendorCard 
                    key={vendor.id} 
                    name={vendor.name} 
                    primary_category={vendor.primary_category}
                    description={vendor.description} 
                    logo_url={vendor.logo_url} 
                    created_at={vendor.created_at} 
                  />
                ))}
              </div>
            </div>
            <div className="w-1/4 h-screen rounded-lg p-4 shadow-md mx-15" style={{ backgroundColor: 'white', position: 'sticky', top: 40 }}> {/* Right Column with 30px margins */}
              {/* Content goes here */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
