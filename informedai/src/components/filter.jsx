'use client';

import React, { useState, useEffect } from 'react';

function Filter({ setSelectedFilters }) { // Accept setSelectedFilters as a prop
  const [selectedCategories, setSelectedCategories] = useState({
    CRM: false,
    EngagementPlatform: false,
    B2BDatabase: false,
  });

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    console.log(`Checkbox ${id} changed: ${checked}`); // Console log when checkbox changes
    setSelectedCategories((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  useEffect(() => {
    // Update selected filters whenever selectedCategories changes
    setSelectedFilters(Object.keys(selectedCategories).filter(key => selectedCategories[key]));
  }, [selectedCategories, setSelectedFilters]);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-700">Filter</h2>
        <button style={{ color: 'red', fontSize: 'smaller' }}>Clear filter</button>
      </div>
      <div className="flex flex-col space-y-2 ml-4">
        <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
        <div className="flex flex-col space-y-2">
          <label htmlFor="CRM" className="inline-flex items-center cursor-pointer">
            <input
              id="CRM"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
              checked={selectedCategories.CRM}
              onChange={handleCheckboxChange}
            />
            <span className="ml-3 block text-gray-700 text-sm">CRM</span>
          </label>
          <label htmlFor="EngagementPlatform" className="inline-flex items-center cursor-pointer">
            <input
              id="EngagementPlatform"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
              checked={selectedCategories.EngagementPlatform}
              onChange={handleCheckboxChange}
            />
            <span className="ml-3 block text-gray-700 text-sm">Engagement Platform</span>
          </label>
          <label htmlFor="B2BDatabase" className="inline-flex items-center cursor-pointer">
            <input
              id="B2BDatabase"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
              checked={selectedCategories.B2BDatabase}
              onChange={handleCheckboxChange}
            />
            <span className="ml-3 block text-gray-700 text-sm">B2B Database</span>
          </label>
        </div>
      </div>
      {/* <div className="flex flex-col space-y-2 border-b border-gray-300 pb-4">
        <label htmlFor="budget" className="text-sm font-medium text-gray-700">Budget ($)</label>
        <div className="flex items-center">
          <span id="budget-value" className="text-sm text-gray-700">{budget === "0" ? "Free" : budget}</span>
          <input
            id="budget"
            name="budget"
            type="range"
            min="0"
            max="1000"
            step="100"
            className="ml-2 w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            onInput={handleBudgetChange}
          />
        </div>
      </div> */}
      <div className="flex flex-col space-y-2 border-b border-gray-300 pb-4">
        <label htmlFor="best-for" className="text-sm font-medium text-gray-700">Best for</label>
        <div className="flex flex-col space-y-2 ml-4">
          <label htmlFor="small-business" className="inline-flex items-center cursor-pointer">
            <input id="small-business" type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out" onChange={handleCheckboxChange} />
            <span className="ml-3 block text-gray-700 text-sm">Small Business</span>
          </label>
          <label htmlFor="enterprise" className="inline-flex items-center cursor-pointer">
            <input id="enterprise" type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out" onChange={handleCheckboxChange} />
            <span className="ml-3 block text-gray-700 text-sm">Enterprise</span>
          </label>
          <label htmlFor="individual" className="inline-flex items-center cursor-pointer">
            <input id="individual" type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out" onChange={handleCheckboxChange} />
            <span className="ml-3 block text-gray-700 text-sm">Individual</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
