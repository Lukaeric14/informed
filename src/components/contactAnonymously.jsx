import React, { useEffect } from 'react';
import Script from 'next/script';

const Popup = ({ isOpen, onClose, websiteUrl, vendorData }) => { // Added vendorData prop
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
            if (window.Tally) {
                window.Tally.loadEmbeds(); // Ensure the script runs every time the popup is opened
            }
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
        <div className="fixed inset-0 z-50" style={{width: '100%', height: '100%', padding: 40, background: 'rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={handleBackgroundClick}>
            <div style={{width: 600, height: 'auto', padding: 30, background: 'white', borderRadius: 22.53, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                    <div style={{width: 18.33, height: 18.33, backgroundColor: 'white'}}></div>
                    <div style={{height: 35, textAlign: 'center', color: '#ACACAC', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '500', lineHeight: '35px', wordWrap: 'break-word'}}>Don't want to talk to <span>{vendorData.name}?</span></div>
                    <img onClick={handleBackgroundClick} style={{width: 17, height: 17, cursor: 'pointer'}} src="/closeicon.png"/>
                </div>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <div style={{color: '#3D4043', fontSize: 32, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word', paddingBottom: '10px'}}>{vendorData.name}</div>
                            <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 10, paddingBottom: '10px'}}>
                                <div style={{width: 135, color: '#6A6A6A', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>Primary Category:</div>
                                <div style={{color: '#6A6A6A', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>{vendorData.primary_category}</div>
                            </div>
                        </div>
                        <img style={{width: 51, height: 51, borderRadius: 10, marginTop: 10}} src={vendorData.logo_url} />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                        <div style={{color: '#6A6A6A', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>Secondary Categories:</div>
                        <div style={{color: '#6A6A6A', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '500', wordWrap: 'break-word'}}>{vendorData.secondary_categories}</div>
                    </div>
                </div>
                {/* Add the embed in your HTML */}
                <iframe data-tally-src="https://tally.so/embed/mOYllk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" height="462" frameBorder="0" marginHeight="0" marginWidth="0" title="We'll contact the vendor for you."></iframe>
                <Script
                    id="tally-js"
                    src="https://tally.so/widgets/embed.js"
                    onLoad={() => {
                        if (window.Tally) {
                            window.Tally.loadEmbeds();
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Popup;
