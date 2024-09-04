import React from 'react';

const VendorCard = ({ name, primary_category, description, logo_url, created_at }) => {
  return (
    <div style={{ backgroundColor: 'white', width: '100%' }} className="px-[32px] py-[23px] rounded-[15px] flex-col justify-start items-start gap-10 inline-flex">
        <div className="w-full justify-start items-center gap-[9px] inline-flex" style={{ marginTop: 10 }}>
            <div className="w-[51px] h-[51px] bg-white rounded-[10px] justify-center items-center flex">
                <img className="w-[51px] h-[51px]" src={logo_url} />
            </div>
            <div className="w-full flex justify-between">
                <div className="flex-col justify-center items-center inline-flex">
                    <div className="self-stretch text-[#333333] text-[22px] font-semibold font-['Rethink Sans'] leading-relaxed">{name}</div>
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div style={{ color: '#9CA3AF', fontSize: 14, fontFamily: 'Rethink Sans', fontWeight: '500', lineHeight: '16.80px', wordWrap: 'break-word' }}>{primary_category}</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <button style={{ backgroundColor: '#017F40', color: 'white', padding: '7px 30px', borderRadius: '5px', marginBottom: '4px', fontSize: '12px' }}>Contact Anonymously</button>
                    <button style={{ backgroundColor: 'white', color: '#017F40', border: '1px solid #017F40', padding: '7px 30px', borderRadius: '5px', fontSize: '12px' }}>Open Company Page</button>
                </div>
            </div>
        </div>
        <div style={{ color: '#9CA3AF', fontSize: 14, fontFamily: 'Rethink Sans', fontWeight: '400', lineHeight: '16.80px', wordWrap: 'break-word', width: '85%' }}>{description}</div>
        <div className="flex justify-between items-center w-full">
            <div className="px-[19px] pt-1.5 pb-[5px] bg-[#effaf2] rounded-md justify-center items-center flex">
                <div style={{ color: '#7fdb96', fontSize: '12px', fontFamily: 'Rethink Sans', fontWeight: '400', lineHeight: '16.40px', whiteSpace: 'nowrap' }}>{primary_category}</div>
            </div>
            <div style={{ color: '#9CA3AF', fontSize: 12, fontFamily: 'Rethink Sans', fontWeight: '400', lineHeight: '16.80px', whiteSpace: 'nowrap' }}>Last updated {new Date(created_at).toDateString()}</div>
        </div>
    </div>
  );
}

export default VendorCard;