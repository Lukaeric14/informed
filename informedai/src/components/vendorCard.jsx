import React from 'react';

const VendorCard = () => {
  return (
    <div className="h-[238px] px-[22px] py-[23px] bg-white rounded-[15px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="justify-start items-center gap-[9px] inline-flex">
            <div className="w-[51px] h-[51px] bg-white rounded-[10px] justify-center items-center flex">
                <img className="w-[51px] h-[51px]" src="https://via.placeholder.com/51x51" />
            </div>
            <div className="w-[162px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-[#333333] text-[22px] font-semibold font-['Rethink Sans'] leading-relaxed">Hubspot</div>
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-gray-400 text-sm font-semibold font-['Rethink Sans'] leading-[16.80px]">CRM</div>
                    <div className="text-gray-400 text-sm font-semibold font-['Rethink Sans'] leading-[16.80px]">Best for Startups</div>
                </div>
            </div>
        </div>
        <div className="w-[575px] text-gray-400 text-sm font-semibold font-['Rethink Sans'] leading-[16.80px]">HubSpot is an AI-powered customer platform with all the software, integrations, and resources you need to connect your marketing, sales, and customer service. HubSpot's connected platform enables you to grow your business faster by focusing on what matters most: your customers.</div>
        <div className="w-[574px] justify-center items-center gap-[354px] inline-flex">
            <div className="px-[19px] pt-1.5 pb-[5px] bg-[#effaf2] rounded-md justify-center items-center flex">
                <div className="text-[#7fdb96] text-xs font-semibold font-['Rethink Sans'] leading-[14.40px]">CRM</div>
            </div>
            <div className="text-gray-400 text-sm font-semibold font-['Rethink Sans'] leading-[16.80px]">Last updated 2 days ago</div>
        </div>
    </div>
  );
}

export default VendorCard;