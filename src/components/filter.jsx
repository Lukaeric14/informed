'use client';

import React, { useState, useEffect } from 'react';

function Filter({ setSelectedFilters }) { // Accept setSelectedFilters as a prop
  const [selectedCategories, setSelectedCategories] = useState({
    CRM: false,
    B2BDatabase: false,
    SalesEngagementPlatform: false,
    SalesIntelligence: false,
    DocumentManagement: false,
    CommunicationTools: false,
    AccountBasedMarketing: false,
    Dialer: false,
    SalesAnalyticsAndReporting: false,
    SalesAutomation: false,
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
          <label htmlFor="SalesEngagementPlatform" className="inline-flex items-center cursor-pointer">
            <input
              id="SalesEngagementPlatform"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
              checked={selectedCategories.SalesEngagementPlatform}
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
          <label htmlFor="SalesIntelligence" className="inline-flex items-center cursor-pointer">
            <input
              id="SalesIntelligence"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
              checked={selectedCategories.SalesIntelligence}
              onChange={handleCheckboxChange}
            />
            <span className="ml-3 block text-gray-700 text-sm">Sales Intelligence</span>
          </label>
          <label htmlFor="DocumentManagement" className="inline-flex items-center cursor-pointer">
            <input
              id="DocumentManagement"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
              checked={selectedCategories.DocumentManagement}
              onChange={handleCheckboxChange}
            />
            <span className="ml-3 block text-gray-700 text-sm">Document Management</span>
          </label>
          <label htmlFor="CommunicationTools" className="inline-flex items-center cursor-pointer">
            <input
              id="CommunicationTools"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
              checked={selectedCategories.CommunicationTools}
              onChange={handleCheckboxChange}
            />
            <span className="ml-3 block text-gray-700 text-sm">Communication Tools</span>
          </label>
          <label htmlFor="AccountBasedMarketing" className="inline-flex items-center cursor-pointer">
            <input
              id="AccountBasedMarketing"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
              checked={selectedCategories.AccountBasedMarketing}
              onChange={handleCheckboxChange}
            />
            <span className="ml-3 block text-gray-700 text-sm">Account Based Marketing</span>
          </label>
          <label htmlFor="Dialer" className="inline-flex items-center cursor-pointer">
            <input
              id="Dialer"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
              checked={selectedCategories.Dialer}
              onChange={handleCheckboxChange}
            />
            <span className="ml-3 block text-gray-700 text-sm">Dialer</span>
          </label>
          <label htmlFor="SalesAnalyticsAndReporting" className="inline-flex items-center cursor-pointer">
            <input
              id="SalesAnalyticsAndReporting"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
              checked={selectedCategories.SalesAnalyticsAndReporting}
              onChange={handleCheckboxChange}
            />
            <span className="ml-3 block text-gray-700 text-sm">Sales Analytics and Reporting</span>
          </label>
          <label htmlFor="SalesAutomation" className="inline-flex items-center cursor-pointer">
            <input
              id="SalesAutomation"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
              checked={selectedCategories.SalesAutomation}
              onChange={handleCheckboxChange}
            />
            <span className="ml-3 block text-gray-700 text-sm">Sales Automation</span>
          </label>
        </div>
      </div>
    </div>
  );
}
export default Filter;
