/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import { ScrollXContainer } from '../RevenueCard/style';
const AlbumsCard = () => {
    const [streamsDropdownOpen, setStreamsDropdownOpen] = useState(false);
    const [dropdownContent, setDropdownContent] = useState('Streams');

    const toggleStreamsDropdown = () => {
        setStreamsDropdownOpen(!streamsDropdownOpen);
    };

    const handleDropdownSelect = (content: React.SetStateAction<string>) => {
        setDropdownContent(content);
        setStreamsDropdownOpen(false); // Close dropdown after selection (optional)
    };

    return (
        <div className="w-[60vw] h-[19vw] overflow-x-hidden py-[1vw] backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col items-start rounded-[24px]" style={{padding:`16px 0`}}>
            {/* Header */}
            <div className="flex flex-row justify-between ml-6 w-full items-start">
                <div className="text-xl font-['Aileron'] font-light leading-[28px] text-white mt-2">
                    Top Albums
                </div>
                <div className="flex flex-row gap-2 items-start">
                    {/* Streams Dropdown */}
                    <div
                        onClick={toggleStreamsDropdown}
                        className="px-[1vw] border-white/6 backdrop-blur-[24px] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-3 gap-10 w-3/4 h-12 items-start hover:border rounded-[24px] relative"
                    >
                        <div
                            className="text-sm font-['Aileron'] font-light leading-[20px] text-white cursor-pointer"
                        >
                            {dropdownContent}
                        </div>
                        <img
                            src="https://file.rendit.io/n/ipig7LxwhV3OqG5PjtAJ.svg"
                            alt="Vector1"
                            className="mt-1 ml-[2vw] w-4"
                        />
                        {/* Streams Dropdown Content */}
                        {streamsDropdownOpen && (
                            <div className="cursor-pointer absolute flex flex-col items-center top-full left-0 mt-1 py-2 w-full bg-white shadow-lg rounded bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)]">
                                <div onClick={() => handleDropdownSelect('Dropdown Item 1')}>Dropdown Item 1</div>
                                <div onClick={() => handleDropdownSelect('Dropdown Item 2')}>Dropdown Item 2</div>
                                <div onClick={() => handleDropdownSelect('Dropdown Item 3')}>Dropdown Item 3</div>
                            </div>
                        )}
                    </div>
                    {/* Replace with Ellipse div */}
                    <div className='mr-[2vw]'>
                        <div
                            id="Ellipse"
                            className="bg-[url(https://file.rendit.io/n/hFDw82HrRzW9e8IomtV9.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-4 w-12 h-12 items-start"
                        >
                            <img
                                src="https://file.rendit.io/n/2MsiJ95iJMNwJITgevH6.svg"
                                alt="Vector"
                                className="w-3"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Scrollable Albums */}
            <ScrollXContainer >
                {Array.from(Array(10).keys()).map((index) => (
                    <div style={{display:`flex`, flexDirection:`column`, width:`20vw`,height:`fit-content`,backgroundColor:`#1F2228`,borderRadius:`16px`,padding:`12px`}}>
                        <div style={{display:`flex`,flexDirection:`row`,justifyContent:`space-between`}}>
                            <div style={{height:`144px`,width:`144px`,borderRadius:`16px`,border:`1px solid white`}}>
                                <img src={"https://file.rendit.io/n/9g1xOjeJcwAKem8e97VG.png" }style={{height:`144px`,width:`144px`}}/>
                            </div>
                            <div style={{display:`flex`, flexDirection:`column`,justifyContent:`space-between`,padding:`16px`}}>
                                <p className="text-xl font-['Aileron'] font-light leading-[24px] text-white w-full">
                                    1. Lucifer On The Sofa
                                </p>
                                <div>
                                    <p className="text-sm font-['Aileron'] leading-[22px] text-white">1,492,520 streams</p>
                                    <p className="opacity-60 text-sm font-['Aileron'] leading-[22px] text-white">+48,595 last week</p>
                                </div>
                            </div>
                        </div>
                </div>
                    ))}
            </ScrollXContainer>
        </div>
    );
};

export default AlbumsCard;
