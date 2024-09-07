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
    Prospecting: false,
    ESignatureTools: false,
    EnablementPlatforms: false,
    SalesTrainingAndCoaching: false,
    VoiceAndVideoTools: false,
    Forecasting: false,
    ProposalManagement: false,
    SocialSelling: false,
    ConfigurePriceQuote: false,
    VirtualSalesRooms: false,
    SalesPerformanceManagement: false,
    CompensationManagement: false,
    TerritoryAndQuotaManagement: false,
    VoiceAnalyticsAndCallRecording: false,
    GamificationTools: false,
    PricingOptimization: false,
    SalesAttribution: false,
  });

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    console.log(`Checkbox ${id} changed: ${checked}`); // Console log when checkbox changes
    setSelectedCategories((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleClearFilter = () => {
    setSelectedCategories((prev) => {
      const updatedCategories = {};
      Object.keys(prev).forEach((key) => {
        updatedCategories[key] = false;
      });
      return updatedCategories;
    });
  };

  useEffect(() => {
    // Update selected filters whenever selectedCategories changes
    setSelectedFilters(Object.keys(selectedCategories).filter(key => selectedCategories[key]));
  }, [selectedCategories, setSelectedFilters]);

  return (
    <div className="flex flex-col space-y-4" style={{ fontFamily: 'Open Sans, sans-serif', maxHeight: '100%', overflowY: 'auto', margin: '48px' }}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-700">Filter</h2>
        <button style={{ color: 'red', fontSize: 'smaller' }} onClick={handleClearFilter}>Clear filter</button>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="category" className="text-base font-medium text-gray-700">Categories</label>
        <label htmlFor="category" className="text-base text-gray-700" style={{ fontSize: '14px' }}>Sales Tech</label>
        <div className="flex flex-col space-y-2 ml-4">
          <details open>
            <summary className="text-base font-medium text-gray-700 cursor-pointer pb-4">Essentials</summary>
            <div className="flex flex-col space-y-2 ml-4">
              <label htmlFor="CRM" className="inline-flex items-center cursor-pointer">
                <input
                  id="CRM"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.CRM}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">CRM</span>
              </label>
              <label htmlFor="Dialer" className="inline-flex items-center cursor-pointer">
                <input
                  id="Dialer"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.Dialer}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Dialer</span>
              </label>
              <label htmlFor="CommunicationTools" className="inline-flex items-center cursor-pointer">
                <input
                  id="CommunicationTools"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.CommunicationTools}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Communication Tools</span>
              </label>
              <label htmlFor="ContactDatabase" className="inline-flex items-center cursor-pointer">
                <input
                  id="ContactDatabase"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.ContactDatabase}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Contact Database</span>
              </label>
              <label htmlFor="EngagementPlatform" className="inline-flex items-center cursor-pointer">
                <input
                  id="EngagementPlatform"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.EngagementPlatform}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Engagement Platform</span>
              </label>
              <label htmlFor="Prospecting" className="inline-flex items-center cursor-pointer">
                <input
                  id="Prospecting"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.Prospecting}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Prospecting</span>
              </label>
            </div>
          </details>
          <details open>
            <summary className="text-base font-medium text-gray-700 cursor-pointer pb-4">Advanced Tools</summary>
            <div className="flex flex-col space-y-2 ml-4">
              <label htmlFor="EnablementPlatforms" className="inline-flex items-center cursor-pointer">
                <input
                  id="EnablementPlatforms"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.EnablementPlatforms}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Sales Enablement Platforms</span>
              </label>
              <label htmlFor="SalesPerformanceManagement" className="inline-flex items-center cursor-pointer">
                <input
                  id="SalesPerformanceManagement"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.SalesPerformanceManagement}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Sales Performance Management</span>
              </label>
              <label htmlFor="SalesTrainingAndCoaching" className="inline-flex items-center cursor-pointer">
                <input
                  id="SalesTrainingAndCoaching"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.SalesTrainingAndCoaching}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Sales Training and Coaching</span>
              </label>
              <label htmlFor="AccountBasedMarketing" className="inline-flex items-center cursor-pointer">
                <input
                  id="AccountBasedMarketing"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.AccountBasedMarketing}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Account-Based Marketing</span>
              </label>
              <label htmlFor="Forecasting" className="inline-flex items-center cursor-pointer">
                <input
                  id="Forecasting"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.Forecasting}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Forecasting</span>
              </label>
              <label htmlFor="SalesAutomation" className="inline-flex items-center cursor-pointer">
                <input
                  id="SalesAutomation"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.SalesAutomation}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Sales Automation</span>
              </label>
              <label htmlFor="SalesAnalyticsAndReporting" className="inline-flex items-center cursor-pointer">
                <input
                  id="SalesAnalyticsAndReporting"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.SalesAnalyticsAndReporting}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Sales Analytics and Reporting</span>
              </label>
              <label htmlFor="VoiceandVideoTools" className="inline-flex items-center cursor-pointer">
                <input
                  id="VoiceandVideoTools"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.VoiceandVideoTools}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Video and Voice Tools</span>
              </label>
              <label htmlFor="ESignatureTools" className="inline-flex items-center cursor-pointer">
                <input
                  id="ESignatureTools"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.ESignatureTools}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">E-Signature Tools</span>
              </label>
            </div>
          </details>
          {/* <details>
            <summary className="text-base font-medium text-gray-700 cursor-pointer">Specialized Tools</summary>
            <div className="flex flex-col space-y-2 ml-4">
              <label htmlFor="ConfigurePriceQuote" className="inline-flex items-center cursor-pointer">
                <input
                  id="ConfigurePriceQuote"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.ConfigurePriceQuote}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Configure, Price, Quote (CPQ)</span>
              </label>
              <label htmlFor="VirtualSalesRooms" className="inline-flex items-center cursor-pointer">
                <input
                  id="VirtualSalesRooms"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.VirtualSalesRooms}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Virtual Sales Rooms (VSR)</span>
              </label>
              <label htmlFor="SalesPerformanceManagement" className="inline-flex items-center cursor-pointer">
                <input
                  id="SalesPerformanceManagement"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.SalesPerformanceManagement}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Sales Performance Management (SPM)</span>
              </label>
              <label htmlFor="CompensationManagement" className="inline-flex items-center cursor-pointer">
                <input
                  id="CompensationManagement"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.CompensationManagement}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Compensation Management</span>
              </label>
              <label htmlFor="TerritoryAndQuotaManagement" className="inline-flex items-center cursor-pointer">
                <input
                  id="TerritoryAndQuotaManagement"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.TerritoryAndQuotaManagement}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Territory and Quota Management</span>
              </label>
              <label htmlFor="VoiceAnalyticsAndCallRecording" className="inline-flex items-center cursor-pointer">
                <input
                  id="VoiceAnalyticsAndCallRecording"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.VoiceAnalyticsAndCallRecording}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Voice Analytics and Call Recording</span>
              </label>
              <label htmlFor="GamificationTools" className="inline-flex items-center cursor-pointer">
                <input
                  id="GamificationTools"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.GamificationTools}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Gamification Tools</span>
              </label>
              <label htmlFor="PricingOptimization" className="inline-flex items-center cursor-pointer">
                <input
                  id="PricingOptimization"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.PricingOptimization}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Pricing Optimization</span>
              </label>
              <label htmlFor="SalesAttribution" className="inline-flex items-center cursor-pointer">
                <input
                  id="SalesAttribution"
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px] text-gray-600 transition duration-150 ease-in-out"
                  style={{ borderRadius: '3.5px', borderColor: '#9CA3AF'}}
                  checked={selectedCategories.SalesAttribution}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 block text-gray-700 text-sm">Sales Attribution</span>
              </label>
            </div>
          </details> */}
        </div>
        <label htmlFor="category" className="text-base font-medium text-gray-700" style={{ marginTop: '30px', fontSize: '14px' }}>Marketing Tech - Coming soon</label>
      </div>
    </div>
  );
}
export default Filter;
