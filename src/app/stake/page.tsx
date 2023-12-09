const Staking_page = () => {
    return (
        <div className="h-screen w-screen bg-zinc-950 flex flex-row">
            <div id="NewRootRoot" className="flex flex-row w-[50vw] bg-white items-start">
                <div className="bg-[url(https://file.rendit.io/n/XTQ0PJCJyvpg97UWDQaO.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row gap-3 w-full h-screen items-start pt-6 px-8">
                    <img
                        src="https://file.rendit.io/n/0D7VVQAz909zwFE5ngdy.svg"
                        alt="Group"
                        className="w-12"
                    />
                    <div className="text-xl font-['Aileron'] leading-[24px] text-white mt-3">
                        ChainTune
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[1vw] py-[10vw] px-[10vw]">
                <div className="text-4xl font-['Aileron'] font-light leading-[48px] text-white w-full">
                    ChainTune is currently in limited mode.
                </div>
                <div className="w-[35vw] py-[1vw] pt-[0.7vw] backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-end gap-12 h-16 items-start px-2 rounded-[24px]">
                    <div className="text-xl font-['Aileron'] font-light leading-[28px] text-white mt-2">
                        0x786sdvsdg8453hg5...453
                    </div>
                    <div className="text-sm font-['Aileron'] font-light leading-[20px] text-white backdrop-blur-[24px] bg-[rgba(38,_40,_44,_0.4)] flex flex-row justify-center pt-3 w-2/5 h-10 items-start rounded-[24px]">
                        Connected through Phantom
                    </div>
                </div>
                <div className="backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col gap-16 w-full h-56 items-start pl-4 py-4 rounded-[24px]">
                    <div className="flex flex-row gap-3 w-2/3 items-start">
                        <div className="flex flex-col gap-3 w-12 items-start">
                            <div className="text-center font-['Aileron'] font-light leading-[22px] text-white bg-white/6 flex flex-row justify-center pt-3 w-12 h-12 items-start rounded-[100px]">
                                01
                            </div>
                            <div className="text-center font-['Aileron'] font-light leading-[22px] text-white bg-white/6 flex flex-row justify-center pt-3 w-12 h-12 items-start rounded-[100px]">
                                02
                            </div>
                        </div>
                        <div className="flex flex-col mt-px gap-4 w-5/6 items-start">
                            <div className="font-['Aileron'] font-light leading-[22px] text-white w-full">
                                Staking of CHT 1,000 is required to become an artist.{" "}
                            </div>
                            <div className="font-['Aileron'] font-light leading-[22px] text-white w-full">
                                CHT 1,000 will be returned to you after reaching 10,000 listeners.
                            </div>
                        </div>
                    </div>
                    <div className="opacity-60 font-['Aileron'] underline font-light leading-[22px] text-white ml-2">
                        Read our Blog Post here
                    </div>
                </div>

                <div className="w-[35vw] border-solid border-white/6 backdrop-blur-[24px] bg-[linear-gradient(#ffffff,_#ffffff),_linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover,_cover bg-50%_50%,_50%_50% bg-blend-normal,_normal bg-repeat-no-repeat,_no-repeat flex flex-row justify-center pt-3 h-12 items-start border rounded-[24px]">
                    <div className="text-lg font-['Aileron'] leading-[20px]">Stake and Continue</div>
                </div>
            </div>

        </div>
    );
}

export default Staking_page;