import React from 'react';

function HeroSection() {
  return (
    <div style={{ backgroundColor: '#017F40', padding: '22px 20px', color: 'white', borderRadius: '8px' }}>
      <h1 style={{ fontFamily: 'Rethink Sans', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, lineHeight: '120%' }} className="mb-4">Are you looking to buy software without speaking to anyone?</h1>
      <p style={{ color: '#FFF', fontFamily: 'Rethink Sans', fontSize: '14px', fontStyle: 'normal', fontWeight: 400, lineHeight: '120%' }} className="mb-8">Informed is a directory of over 250+ SaaS products to review.</p>
      <div className="flex items-center">
        <input type="text" placeholder="Search for a product..." className="mr-4 p-2 rounded-md border-white border-2 w-3/4 bg-white bg-opacity-30 text-sm" />
        <button style={{ borderRadius: '6px', background: '#FFF', color: '#017F40', fontSize: '12px' }} className="py-2 px-4">Search</button>
      </div>
    </div>
  );
}

export default HeroSection;
