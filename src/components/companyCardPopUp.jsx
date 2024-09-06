import React, { useEffect } from 'react';

const Popup = ({ isOpen, onClose, websiteUrl, vendorData }) => { // Added vendorData prop
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

    return (
        <div className="fixed inset-0 z-50" style={{width: '100%', height: '100%', padding: 40, background: 'rgba(0, 0, 0, 0.15)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 10, display: 'inline-flex'}} onClick={handleBackgroundClick}>
            <div style={{width: 470, flex: '1 1 0', paddingTop: 12, paddingBottom: 30, paddingLeft: 30, paddingRight: 30, background: 'white', borderRadius: 22.53, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <img style={{width: 18.33, height: 18.33}} src="/icon8-website-100.png" alt="Placeholder Image" />
                    <div style={{width: 151, height: 35, textAlign: 'center', color: '#ACACAC', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '500', lineHeight: '35px', wordWrap: 'break-word'}}>Company View</div>
                    <img onClick={handleBackgroundClick} style={{width: 17, height: 17}} src="/icon8-close2.png"/>
                </div>
                <div style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 358, height: 91, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{color: '#3D4043', fontSize: 32, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word', paddingBottom: '10px'}}>{vendorData.name}</div>
                            <div style={{justifyContent: 'start', alignItems: 'center', gap: 10, display: 'inline-flex', paddingBottom: '10px'}}>
                                <div style={{width: 135, color: '#6A6A6A', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>Primary Category:</div>
                                <div style={{color: '#6A6A6A', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>{vendorData.primary_category}</div>
                            </div>
                        </div>
                        <img style={{width: 51, height: 51, borderRadius: 10, marginTop: 10}} src={vendorData.logo_url} />
                    </div>
                    <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{color: '#6A6A6A', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>Secondary Categories:</div>
                        <div style={{color: '#6A6A6A', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>{vendorData.secondary_categories}</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', height: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
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
                    <div style={{width:'100%', paddingLeft: 25, paddingRight: 25, paddingTop: 15, paddingBottom: 15, background: 'green', borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{color: 'white', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '500', lineHeight: '14.40px', wordWrap: 'break-word'}}>Contact Anonymously</div>
                    </div>
                </div>
            </div>
    );
};

export default Popup;
