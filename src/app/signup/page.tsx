/* eslint-disable @next/next/no-img-element */
const Signup = () => {
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
                    Experience music like it should be.
                </div>
                <div className="opacity-60 font-['Aileron'] font-light leading-[22px] text-white">
                    Already have an account? <a href="/login" className="cursor-pointer underline">Login here</a>
                </div>
                <div className="w-[35vw] pt-[0.7vw] border-solid border-white/6 backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-between h-16 items-start pl-6 pr-2 rounded-[24px]">
                    <div className="text-xl font-['Aileron'] font-light leading-[28px] text-white mt-2">
                        Wallet
                    </div>
                    <div className="text-sm font-['Aileron'] font-light leading-[20px] text-white border-solid border-white/6 backdrop-blur-[24px] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-3 w-1/4 h-10 items-start border rounded-[24px]">
                        Connect Wallet
                    </div>
                </div>
                <div className="w-[35vw] backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center gap-2 items-start p-4 rounded-[24px]">
                    <div className="flex flex-col gap-1 w-full items-start">
                        <div className="opacity-60 text-xs font-['Aileron'] leading-[20px] text-white ml-1">
                            Artist Name
                        </div>
                        <input className="outline-none text-sm font-['Aileron'] leading-[20px] text-white bg-[rgba(38,_40,_44,_0.4)] flex flex-row w-full h-12 items-start px-4 rounded-lg" placeholder="Nothing Happens #1" />
                    </div>
                    <div className="flex flex-col gap-1 w-full items-start">
                        <div className="opacity-60 text-xs font-['Aileron'] leading-[20px] text-white ml-1">
                            Description
                        </div>
                        <textarea className="outline-none text-sm font-['Aileron'] leading-[20px] text-white bg-[rgba(38,_40,_44,_0.4)] flex flex-row w-full h-24 items-start pt-3 px-4 rounded-lg" placeholder="Enter description here..." />
                    </div>
                </div>
                <div className="w-[35vw] border-solid border-white/6 backdrop-blur-[24px] bg-[linear-gradient(#ffffff,_#ffffff),_linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover,_cover bg-50%_50%,_50%_50% bg-blend-normal,_normal bg-repeat-no-repeat,_no-repeat flex flex-row justify-center pt-3 h-12 items-start border rounded-[24px]">
                    <div className="text-sm font-['Aileron'] leading-[20px]">Create Account</div>
                </div>
            </div>

        </div>

    );
}

export default Signup;