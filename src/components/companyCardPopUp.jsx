import React, { useState, useEffect } from 'react';
import ContactPopup from './contactAnonymously'; // Import the ContactPopup component
import mixpanel from 'mixpanel-browser'; // Import mixpanel

const Popup = ({ isOpen, onClose, websiteUrl, vendorData }) => { // Added vendorData prop
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false); // State to manage contact popup visibility

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }

        return () => {
            document.body.style.overflow = 'auto'; // Cleanup on unmount
        };
    }, [isOpen]);

    if (!isOpen) return null; // Don't render if not open

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); // Close the popup if the background is clicked
        }
    };

    const handleOpenContactPopup = () => {
        setIsContactPopupOpen(true); // Open the contact popup
        console.log('Contact popup opened successfully'); // Log success message
        console.log('Vendor Name:', vendorData.name); // Log vendorName
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
        insertInquiry(userName, vendorData.name);
    };

    const handleCloseContactPopup = () => {
        setIsContactPopupOpen(false); // Close the contact popup
        console.log('Contact popup closed successfully'); // Log success message
    };

    return (
        <div className="fixed inset-0 z-50" style={{width: '100%', height: '100%', padding: 40, background: 'rgba(0, 0, 0, 0.15)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 10, display: 'inline-flex'}} onClick={handleBackgroundClick}>
            <div style={{width: 470, flex: '1 1 0', paddingTop: 12, paddingBottom: 30, paddingLeft: 30, paddingRight: 30, background: 'white', borderRadius: 22.53, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <img style={{width: 18.33, height: 18.33}} src="/mdi_web.svg" alt="Placeholder Image" />
                    <div style={{width: 151, height: 35, textAlign: 'center', color: '#ACACAC', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '500', lineHeight: '35px', wordWrap: 'break-word'}}>Company View</div>
                    <img onClick={handleBackgroundClick} style={{width: 17, height: 17}} src="/closeicon.png"/>
                </div>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap'}}>
                        <div style={{width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <div style={{color: '#3D4043', fontSize: 32, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word', paddingBottom: '10px'}}>{vendorData.name}</div>
                            <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 10, paddingBottom: '10px'}}>
                                <div style={{minWidth: 135, color: '#6A6A6A', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>Primary Category:</div>
                                <div style={{color: '#6A6A6A', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>{vendorData.primary_category}</div>
                            </div>
                        </div>
                        <img style={{width: 51, height: 51, borderRadius: 10, marginTop: 10}} src={vendorData.logo_url} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 10}}>
                        <div style={{width: 175, color: '#6A6A6A', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>Secondary Categories:</div>
                        <div style={{color: '#6A6A6A', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>{vendorData.secondary_categories}</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', height: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10}}>
                    <div style={{alignSelf: 'stretch', height: 0, border: '1px #E5E5E5 solid'}}></div>
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    <div style={{height: 28, color: '#3D4043', fontSize: 17, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Description</div>
                    <div style={{width: '100%', color: '#9CA3AF', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>{vendorData.description}</div>
                    <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{color: '#6A6A6A', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '500', lineHeight: '35px', wordWrap: 'break-word'}}>Founded in <span>{vendorData.founded}</span></div>
                        <div style={{color: '#6A6A6A', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '500', lineHeight: '35px', wordWrap: 'break-word'}}>{vendorData.country}</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', height: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', height: 0, border: '1px #E5E5E5 solid'}}></div>
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
                    <div style={{color: '#3D4043', fontSize: 17, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Best for companies:</div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                            <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{minWidth:'75px', color: '#6A6A6A', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>Company Size:</div>
                                <div style={{color: '#6A6A6A', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>{vendorData.best_for_company_size}</div>
                            </div>
                            <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{minWidth:'75px', color: '#6A6A6A', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>Industries:</div>
                                <div style={{color: '#6A6A6A', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>{vendorData.best_for_industries}</div>
                            </div>
                            <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{minWidth:'75px', color: '#6A6A6A', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>Personas:</div>
                                <div style={{color: '#6A6A6A', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>{vendorData.best_for_personas}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:'100%', paddingLeft: 25, paddingRight: 25, paddingTop: 15, paddingBottom: 15, background: 'green', borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', cursor: 'pointer'}} onClick={handleOpenContactPopup}>
                    <div style={{color: 'white', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '500', lineHeight: '14.40px', wordWrap: 'break-word'}}>Contact Anonymously</div>
                </div>
            </div>
            <ContactPopup 
                isOpen={isContactPopupOpen} 
                onClose={handleCloseContactPopup} 
                websiteUrl={websiteUrl} 
                vendorData={vendorData} // Pass vendor data
            /> {/* Render ContactPopup */}
        </div>
    );
};

export default Popup;
