import React from 'react';

const VendorCard = ({ name, primary_category, description, logo_url, created_at }) => {
  return (
    <div style={{ backgroundColor: 'white', width: '100%' }} className="px-[22px] py-[23px] rounded-[15px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="justify-start items-center gap-[9px] inline-flex">
            <div className="w-[51px] h-[51px] bg-white rounded-[10px] justify-center items-center flex">
                <img className="w-[51px] h-[51px]" src={logo_url} />
            </div>
            <div className="w-[162px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-[#333333] text-[22px] font-semibold font-['Rethink Sans'] leading-relaxed">{name}</div>
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-gray-400 text-sm font-semibold font-['Rethink Sans'] leading-[16.80px]">{primary_category}</div>
                </div>
            </div>
        </div>
        <div className="w-[575px] text-gray-400 text-sm font-semibold font-['Rethink Sans'] leading-[16.80px]">{description}</div>
        <div className="w-[574px] justify-center items-center gap-[354px] inline-flex">
            <div className="px-[19px] pt-1.5 pb-[5px] bg-[#effaf2] rounded-md justify-center items-center flex">
                <div className="text-[#7fdb96] text-xs font-semibold font-['Rethink Sans'] leading-[14.40px]">{primary_category}</div>
            </div>
            <div className="text-gray-400 text-sm font-semibold font-['Rethink Sans'] leading-[16.80px]">Last updated {new Date(created_at).toDateString()}</div>
        </div>
    </div>
  );
}

export default VendorCard;