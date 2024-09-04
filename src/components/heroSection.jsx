import React, { useState } from 'react';

function HeroSection({ setSearchedVendor }) { // Accept setSearchedVendor as a prop
  const [searchedVendorInput, setSearchedVendorInput] = useState(''); // Renamed state variable

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchedVendorInput(value); // Update local state
    setSearchedVendor(value); // Update searched vendor each time new letter is changed
  };

  return (
    <div style={{ backgroundColor: '#017F40', padding: '22px 20px', color: 'white', borderRadius: '8px' }}>
      <h1 style={{ fontFamily: 'Rethink Sans', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, lineHeight: '120%' }} className="mb-4">Are you looking to buy software without speaking to anyone?</h1>
      <p style={{ color: '#FFF', fontFamily: 'Rethink Sans', fontSize: '14px', fontStyle: 'normal', fontWeight: 400, lineHeight: '120%' }} className="mb-8">Informed is a directory of over 250+ SaaS products to review.</p>
      <div className="flex items-center">
        <input type="text" placeholder="Search for a vendor..." className="mr-4 p-2 rounded-md border-2 border-#017F40 w-3/4 bg-white bg-opacity-100 text-sm" style={{ color: '#017F40' }} onChange={handleSearch} />
        <button style={{ borderRadius: '6px', background: '#FFF', color: '#017F40', fontSize: '14px' }} className="py-2 px-4">Search Vendor</button>
      </div>
    </div>
  );
}

export default HeroSection;
