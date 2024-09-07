import React, { useState } from 'react';
import CompanyPopup from './companyCardPopUp'; // Import the CompanyPopup component
import ContactPopup from './contactAnonymously'; // Import the ContactPopup component
import mixpanel from 'mixpanel-browser'; // Import mixpanel

const VendorCard = ({ name, primary_category, description, logo_url, created_at, website_url, secondary_categories, founded, country, best_for_personas, best_for_industries, best_for_company_size, userName }) => { 
    const [isCompanyPopupOpen, setIsCompanyPopupOpen] = useState(false); // State to manage company popup visibility
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false); // State to manage contact popup visibility

    const handleOpenCompanyPopup = () => {
        setIsCompanyPopupOpen(true); // Open the company popup
        console.log('Company popup opened successfully'); // Log success message
        mixpanel.track("companyPage Opened");
    };

    const handleCloseCompanyPopup = () => {
        setIsCompanyPopupOpen(false); // Close the company popup
        console.log('Company popup closed successfully'); // Log success message
    };

    const handleOpenContactPopup = () => {
        setIsContactPopupOpen(true); // Open the contact popup
        console.log('Contact popup opened successfully'); // Log success message
        console.log('User Name:', userName); // Log userName
        console.log('Vendor Name:', name); // Log vendorName
        mixpanel.track("contactPage Opened");
            const insertInquiry = async (userName, vendorName) => {
                try {
                    const { data, error } = await supabase
                        .from('inquiries')
                        .insert([{ user_name: userName, vendor_name: vendorName }]);
                    if (error) {
                        console.error('Error inserting inquiry:', error);
                    } else {
                        console.log('Inquiry inserted successfully:', data);
                    }
                } catch (error) {
                    console.error('Error inserting inquiry:', error);
                }
            };

            // Assuming you have access to userName and vendorName
            insertInquiry(userName, name);
            };

    const handleCloseContactPopup = () => {
        setIsContactPopupOpen(false); // Close the contact popup
        console.log('Contact popup closed successfully'); // Log success message
    };

    const separatedSecondaryCategories = secondary_categories.split(',').map(category => category.trim());

  return (
    <div style={{ backgroundColor: 'white', width: '100%' }} className="px-[32px] py-[23px] rounded-[15px] flex-col justify-start items-start gap-10 inline-flex">
        <div className="w-full justify-start items-center gap-[9px] inline-flex" style={{ marginTop: 10 }}>
            <div className="w-[51px] h-[51px] bg-white rounded-[10px] justify-center items-center flex">
                <img className="w-[51px] h-[51px] rounded-[4px]" src={logo_url} />
            </div>
            <div className="w-full flex justify-between">
                <div className="flex-col justify-center items-start inline-flex">
                    <div className="flex flex-row">
                        <div className="self-stretch text-[#333333] text-[22px] font-semibold font-['Open Sans'] leading-relaxed">{name}</div>
                        <button onClick={() => window.open(`${website_url}`, '_blank')} style={{ backgroundColor: 'white', border: 'none', cursor: 'pointer', marginLeft: '5px' }}>
                            <img src="/mdi_web.svg" alt="Globe Icon" style={{ width: '20px', height: '20px' }} />
                        </button>
                        <button onClick={handleOpenCompanyPopup} style={{ backgroundColor: 'white', border: 'none', cursor: 'pointer', marginLeft: '5px' }}>
                            <img src="/majesticons_open.svg" alt="open Icon" style={{ width: '20px', height: '20px' }} />
                        </button>
                    </div>
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div style={{ color: '#9CA3AF', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '500', lineHeight: '16.80px', wordWrap: 'break-word' }}>{primary_category}</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <button onClick={handleOpenContactPopup} style={{ backgroundColor: '#017F40', color: 'white', padding: '7px 30px', borderRadius: '5px', marginBottom: '4px', fontSize: '12px' }}>Contact Anonymously</button>
                    <button onClick={handleOpenCompanyPopup} style={{ backgroundColor: 'white', color: '#017F40', border: '1px solid #017F40', padding: '7px 30px', borderRadius: '5px', fontSize: '12px' }}>Open Company Page</button>
                </div>
            </div>
        </div>
        <div style={{ color: '#9CA3AF', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: '16.80px', wordWrap: 'break-word', width: '85%' }}>{description}</div>
        <div className="flex justify-between items-center w-full">
            <div className="flex flex-wrap justify-start items-center">
                {separatedSecondaryCategories.map((category, index) => {
                    const colors = ['#008000', '#FF0000', '#FFA500', '#0000FF', '#800080', '#A52A2A']; // Green, Red, Orange, Blue, Purple, Brown
                    const color = colors[index % colors.length];
                    const bgColor = `${color}22`; // Adding 22 to the hex color to make it lighter
                    return (
                        <span key={index} className="px-[19px] pt-1.5 pb-[5px] rounded-md justify-center items-center flex" style={{ backgroundColor: bgColor, color: color, fontSize: '12px', fontFamily: 'Open Sans', fontWeight: '400', lineHeight: '16.40px', whiteSpace: 'nowrap', marginRight: '5px', marginBottom: '5px' }}>
                            {category}
                        </span>
                    );
                })}
            </div>
            <div style={{ color: '#9CA3AF', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: '16.80px', whiteSpace: 'nowrap' }}>Last updated {new Date(created_at).toDateString()}</div>
        </div>
        <CompanyPopup 
            isOpen={isCompanyPopupOpen} 
            onClose={handleCloseCompanyPopup} 
            websiteUrl={website_url} 
            vendorData={{ name, primary_category, description, logo_url, created_at, secondary_categories, founded, country, best_for_personas, best_for_industries, best_for_company_size }} // Pass vendor data
        /> {/* Render CompanyPopup */}
        <ContactPopup 
            isOpen={isContactPopupOpen} 
            onClose={handleCloseContactPopup} 
            websiteUrl={website_url} 
            vendorData={{ name, primary_category, description, logo_url, created_at, secondary_categories, founded, country, best_for_personas, best_for_industries, best_for_company_size }} // Pass vendor data
        /> {/* Render ContactPopup */}
    </div>
  );
}

export default VendorCard;