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
                    <div style={{height: 35, textAlign: 'center', color: '#ACACAC', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '500', lineHeight: '35px', wordWrap: 'break-word'}}>Looking at a problem space?</div>
                    <img onClick={handleBackgroundClick} style={{width: 17, height: 17, cursor: 'pointer'}} src="/closeicon.png"/>
                </div>
                {/* Add the embed in your HTML */}
                <iframe data-tally-src="https://tally.so/embed/31v9Qp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="484" frameborder="0" marginheight="0" marginwidth="0" title="Vendor Research List"></iframe>
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
