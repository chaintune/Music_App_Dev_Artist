'use client'
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const StatisticsCard = () => {

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
        <div className="w-[80vw] overflow-x-scroll border-solid border-white/6 backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col gap-8 items-start pt-2 pb-6 px-2 border rounded-[24px]">
            <div className="flex flex-row gap-[1vw] justify-between w-full items-start">
                <div className="flex flex-col mt-3 gap-4 w-1/3 items-start">
                    <div className="text-xl font-['Aileron'] font-light leading-[28px] text-white ml-4">
                        At a Glance
                    </div>
                    <div className="border-solid border-white/8 hover:backdrop-blur-[24px] bg-[rgba(28,_30,_34,_0.8)] flex flex-row gap-4 w-full h-24 items-start pt-4 px-4 border rounded-2xl">
                        <div className="border-solid border-white/6 shadow-[0px_4px_32px_0px_rgba(76,_45,_216,_0.5),_-4px_-2px_16px_0px_rgba(75,_80,_182,_0.2)] bg-[linear-gradient(138deg,_#4a6a9b_6%,#4b27dd_98%,#5e14bc_130%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-5 w-16 h-16 items-start border rounded-[24px]">
                            <img
                                src="https://file.rendit.io/n/ykgkPgJRuaFuLbbLa7Lk.svg"
                                alt="Headphones"
                                id="Headphones"
                                className="w-6"
                            />
                        </div>
                        <div className="flex flex-col mt-1 gap-1 w-2/5 items-start">
                            <div className="opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                                Listeners
                            </div>
                            <div className="flex flex-row gap-1 w-full items-start">
                                <div className="text-2xl font-['Aileron'] leading-[32px] text-white">
                                    24,053
                                </div>
                                <div className="text-xs font-['Aileron'] leading-[18px] text-[#76d86e] mt-3">
                                    +2,453
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-3 gap-4 w-1/3 pt-[3vw] items-start">
                    <div className="border-solid border-white/8 hover:backdrop-blur-[24px] bg-[rgba(28,_30,_34,_0.8)] flex flex-row gap-4 w-full h-24 items-start pt-4 px-4 border rounded-2xl">
                        <div className="border-solid border-white/6 shadow-[0px_4px_32px_0px_rgba(76,_45,_216,_0.5),_-4px_-2px_16px_0px_rgba(75,_80,_182,_0.2)] bg-[linear-gradient(138deg,_#4a6a9b_6%,#4b27dd_98%,#5e14bc_130%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-5 w-16 h-16 items-start border rounded-[24px]">
                        <img
                            src="https://file.rendit.io/n/Ihjm0dSCIJd7ww6WKHvv.svg"
                            alt="Play"
                            id="Play"
                            className="w-6"
                        />
                        </div>
                        <div className="flex flex-col mt-1 gap-1 w-2/5 items-start">
                            <div className="opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                                Listeners
                            </div>
                            <div className="flex flex-row gap-1 w-full items-start">
                                <div className="text-2xl font-['Aileron'] leading-[32px] text-white">
                                    24,053
                                </div>
                                <div className="text-xs font-['Aileron'] leading-[18px] text-[#76d86e] mt-3">
                                    +2,453
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex pt-[3vw]  flex-col mt-3 gap-4 w-1/3 items-start">
                    <div className="border-solid border-white/8 hover:backdrop-blur-[24px] bg-[rgba(28,_30,_34,_0.8)] flex flex-row gap-4 w-full h-24 items-start pt-4 px-4 border rounded-2xl">
                        <div className="border-solid border-white/6 shadow-[0px_4px_32px_0px_rgba(76,_45,_216,_0.5),_-4px_-2px_16px_0px_rgba(75,_80,_182,_0.2)] bg-[linear-gradient(138deg,_#4a6a9b_6%,#4b27dd_98%,#5e14bc_130%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-5 w-16 h-16 items-start border rounded-[24px]">
                        <img
                                src="https://file.rendit.io/n/4KApO5WNyF4lqr9LPiyL.svg"
                                alt="Users"
                                id="Users"
                                className="w-6"
                            />
                        </div>
                        <div className="flex flex-col mt-1 gap-1 w-2/5 items-start">
                            <div className="opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                                Listeners
                            </div>
                            <div className="flex flex-row gap-1 w-full items-start">
                                <div className="text-2xl font-['Aileron'] leading-[32px] text-white">
                                    24,053
                                </div>
                                <div className="text-xs font-['Aileron'] leading-[18px] text-[#76d86e] mt-3">
                                    +2,453
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col ml-6 gap-px w-full items-start">
                <div className="flex flex-row gap-4 w-full items-start">
                    <div className="flex flex-col justify-between mt-2 w-10 h-56 items-start">
                        <div className="text-right opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                            25,000
                        </div>
                        <div className="text-right opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                            20,000
                        </div>
                        <div className="text-right opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                            15,000
                        </div>
                        <div className="text-right opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                            10,000
                        </div>
                        <div className="text-right opacity-60 text-sm font-['Aileron'] leading-[20px] text-white ml-2">
                            5,000
                        </div>
                    </div>
                    <div className="relative flex flex-row justify-end w-full items-start pt-1 px-24">
                        <div
                            id="Line"
                            className="border-solid border-r border-white w-px h-56 opacity-20 absolute top-0 left-0"
                        />
                        <div
                            id="Line1"
                            className="border-solid border-t border-white w-full h-px opacity-20 absolute top-56 left-0"
                        />
                        <img
                            src="https://file.rendit.io/n/OxLfTVWalx1mIUlci0xW.svg"
                            alt="Vector1"
                            className="w-[838px] h-[140px] absolute top-16 left-0"
                        />
                        <div className="w-full h-40 bg-[url(https://file.rendit.io/n/0pyTge1bkNhafyzqhfZY.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-16 left-0 flex flex-row justify-end items-start pt-px px-[108px]">
                            <img
                                src="https://file.rendit.io/n/ER53w7yR2oqWO4UcoMSo.svg"
                                alt="Ellipse1"
                                id="Ellipse1"
                                className="w-1 h-1 absolute top-4 left-[727px]"
                            />
                            <img
                                src="https://file.rendit.io/n/XtdKgpmQZMFyrbRAg7MP.png"
                                alt="Line2"
                                id="Line2"
                                className="relative w-0 mt-5 mb-px"
                            />
                        </div>
                        <div className="border-solid border-white/8 backdrop-blur-[24px] bg-[rgba(28,_30,_34,_0.8)] relative flex flex-col mb-40 gap-px w-1/5 h-16 items-start pl-5 py-2 border rounded-lg">
                            <div className="text-center text-sm font-['Aileron'] leading-[20px] text-white">
                                16,450 Listeners
                            </div>
                            <div className="text-center opacity-40 text-sm font-['Aileron'] leading-[20px] text-white ml-6">
                                Oct 17th
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row ml-16 gap-16 w-5/6 items-start">
                    <div className="text-center opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                        Feb
                    </div>
                    <div className="flex flex-row mr-px gap-12 w-1/3 items-start">
                        <div className="text-center opacity-60 text-sm font-['Aileron'] leading-[20px] text-white mr-px">
                            Mar
                        </div>
                        <div className="text-center opacity-60 text-sm font-['Aileron'] leading-[20px] text-white mr-1">
                            Apr
                        </div>
                        <div className="text-center opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                            May
                        </div>
                        <div className="text-center opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                            Jun
                        </div>
                    </div>
                    <div className="text-center opacity-60 text-sm font-['Aileron'] leading-[20px] text-white mr-1">
                        Jul
                    </div>
                    <div className="flex flex-row gap-12 w-1/6 items-start">
                        <div className="text-center opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                            Aug
                        </div>
                        <div className="text-center opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                            Sep
                        </div>
                    </div>
                    <div className="text-center opacity-60 text-sm font-['Aileron'] leading-[20px] text-white mr-px">
                        Oct
                    </div>
                    <div className="flex flex-row gap-12 w-1/6 items-start">
                        <div className="text-center opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                            Nov
                        </div>
                        <div className="text-center opacity-60 text-sm font-['Aileron'] leading-[20px] text-white">
                            Dec
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatisticsCard;