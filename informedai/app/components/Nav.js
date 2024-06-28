"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => { 
    const isUserLoggedIn = true;

    const [providers , setProdivers ] = useState(null);

    useEffect (() => {
        const setProdivers = async () => {
            const response = await getProviders();

            setProdivers(response);
        }

        setProdivers();
    }, [])

    return (
        <div class="w-[247px] h-full relative bg-green-50">
            <div>
                {isUserLoggedIn ? (
                    <div className='flex gap-3'>
                        <Link href="/create-promt"
                        className='black_btn'>
                            Create Post
                        </Link>

                        <button type='button' onClick={signOut} className='outline_btn'>
                            Sign Out
                        </button>
                    </div>
                ): (
                    <>
                    {providers &&
                    Object.values(providers).map((provider) => (
                        <button
                        type='button'
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className='black_btn'
                        >
                            Sign In
                        </button>


                    ))}
                    </>
                )
                }
            </div>
    <img class="w-[132px] h-[26.55px] left-[34px] top-[37px] absolute" src="https://via.placeholder.com/132x27" />
    <div class="left-[23px] top-[100px] absolute flex-col justify-start items-start gap-[15px] inline-flex">
        <div class="pl-[13px] pr-[30px] py-[3px] bg-green-700 rounded-[5px] justify-start items-center gap-2 inline-flex">
            <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
            <div class="w-[120px] h-[29px] text-white text-lg font-bold font-['Quicksand']">Inbox Activity</div>
        </div>
        <div class="pl-[13px] pr-[22px] py-[3px] rounded-[5px] justify-start items-center gap-2 inline-flex">
            <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
            <div class="w-32 h-[29px] text-green-950 text-lg font-bold font-['Quicksand']">Find a solution</div>
        </div>
        <div class="pl-[13px] pr-[30px] py-[3px] rounded-[5px] justify-start items-center gap-2 inline-flex">
            <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
            <div class="w-[120px] h-[29px] text-green-950 text-lg font-bold font-['Quicksand']">Settings</div>
        </div>
    </div>
    <div class="w-[247px] h-[91px] left-0 top-[794px] absolute">
        <div class="w-10 h-10 px-[5px] py-[11px] left-[23px] top-[23px] absolute bg-green-700 rounded-[50px] justify-center items-center inline-flex">
            <div class="w-[30px] h-[18px] text-center text-white text-lg font-bold font-['Quicksand']">LE</div>
        </div>
        <div class="w-[109px] h-[18px] left-[78px] top-[25px] absolute text-green-950 text-lg font-bold font-['Quicksand']">Luka Eric</div>
        <div class="w-[157px] h-[18px] left-[78px] top-[43px] absolute text-green-950 text-xs font-medium font-['Quicksand']">Luka@informedai.com</div>
    </div>
    <div class="w-[199px] h-[83px] left-[23px] top-[711px] absolute rounded-[10px]">
    <div className="w-[171px] h-[29px] left-[16px] top-[27px] absolute">
    <span className="text-green-950 text-lg font-medium">1,250</span>
    <span className="text-green-950 text-base font-medium">Credits left</span>
</div>

        <div class="w-[171px] h-[29px] left-[16px] top-[53px] absolute text-green-950 text-xs font-medium font-['Quicksand']">5,000 credits renews July 11th</div>
        <div class="w-[170px] h-2.5 left-[16px] top-[12px] absolute">
            <div class="w-[170px] h-2.5 left-0 top-0 absolute bg-white rounded-[30px]"></div>
            <div class="w-[131px] h-2.5 left-0 top-0 absolute bg-green-700 rounded-[30px]"></div>
        </div>
    </div>
</div>
    )

}

export default Nav