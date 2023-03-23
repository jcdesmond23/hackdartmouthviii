export default function TracksSection() {
    return (
      <>
        <div id="tracks" className="h-[982px]">
            <h1 className="pl-24 pt-10 font-black text-6xl text-[#EEE9D7] tracking-widest">
                TRACKS
            </h1>
            <div className="grid grid-rows-3 mt-10">
                <div className="flex gap-20 items-center justify-center">
                    <div className="group w-[368px] h-[300px] [perspective:1000px]">
                        <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <div className="flex items-center flex-col justify-center bg-cover bg-[url('/EDUCATION.png')] w-full h-full">
                                    <span className="text-[35px] text-[#EEE9D7] tracking-widest font-extrabold">EDUCATION</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-[#EEE9D7] h-full w-full rounded-2xl flex items-center flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <span className="text-lg text-black font-medium">EdTECH</span>
                                <span className="text-lg text-black font-medium">RESEARCH</span>
                                <span className="text-lg text-black font-medium">K-12 EDUCATION</span>
                                <span className="text-lg text-black font-medium">SOCIAL IMPACT</span>
                                <span className="text-lg text-black font-medium">CONTINUING EDUCATION</span>
                                <span className="text-lg text-black font-medium">GAMIFICATION</span>
                            </div>
                        </div>
                    </div>
                    <div className="group w-[368px] h-[300px] [perspective:1000px]">
                        <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <div className="flex items-center flex-col justify-center bg-cover bg-[url('/BLOCKCHAIN.png')] w-full h-full">
                                    <span className="text-[35px] text-[#EEE9D7] tracking-widest font-extrabold">BLOCKCHAIN</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-[#EEE9D7] h-full w-full rounded-2xl flex items-center flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <span className="text-lg text-black font-medium">GOVERNANCE</span>
                                <span className="text-lg text-black font-medium">SOCIAL IMPACT INTEROPERABILITY</span>
                                <span className="text-lg text-black font-medium">SECURITY</span>
                                <span className="text-lg text-black font-medium">NON-FUNGIBLE TOKENS</span>
                                <span className="text-lg text-black font-medium">GAMING</span>
                            </div>
                        </div>
                    </div>
                    <div className="group w-[368px] h-[300px] [perspective:1000px]">
                        <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <div className="flex items-center flex-col justify-center bg-cover bg-[url('/GAMING.png')] w-full h-full">
                                    <span className="text-[35px] text-[#EEE9D7] tracking-widest font-extrabold">GAMING</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-[#EEE9D7] h-full w-full rounded-2xl flex items-center flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <span className="text-lg text-black font-medium">GAME DESIGN</span>
                                <span className="text-lg text-black font-medium">ESPORTS</span>
                                <span className="text-lg text-black font-medium">ENTERTAINMENT</span>
                                <span className="text-lg text-black font-medium">EDUCATION</span>
                                <span className="text-lg text-black font-medium">SKILLS TRAINING</span>
                                <span className="text-lg text-black font-medium">AR/VR</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-20 items-center justify-center">
                    <div className="group w-[368px] h-[300px] [perspective:1000px]">
                        <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <div className="flex items-center flex-col justify-center bg-cover bg-[url('/CLEANTECH.png')] w-full h-full">
                                    <span className="text-[35px] text-[#EEE9D7] tracking-widest font-extrabold">CLEAN TECH</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-[#EEE9D7] h-full w-full rounded-2xl flex items-center flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <span className="text-lg text-black font-medium">RENEWABLE ENERGY</span>
                                <span className="text-lg text-black font-medium">TRANSPORTATION</span>
                                <span className="text-lg text-black font-medium">RECYCLING</span>
                                <span className="text-lg text-black font-medium">ACCOUNTABILITY</span>
                                <span className="text-lg text-black font-medium">CLIMATE CHANGE</span>
                                <span className="text-lg text-black font-medium">AGRICULTURE</span>
                            </div>
                        </div>
                    </div>
                    <div className="group w-[368px] h-[300px] [perspective:1000px]">
                        <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <div className="flex items-center flex-col justify-center bg-cover bg-[url('/HEALTHCARE.png')] w-full h-full">
                                    <span className="text-[35px] text-[#EEE9D7] tracking-widest font-extrabold">HEALTHCARE</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-[#EEE9D7] h-full w-full rounded-2xl flex items-center flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <span className="text-lg text-black font-medium">MENTAL HEALTH</span>
                                <span className="text-lg text-black font-medium">REPRODUCTIVE HEALTH</span>
                                <span className="text-lg text-black font-medium">HOLISTIC CARE</span>
                                <span className="text-lg text-black font-medium">NUTRITION</span>
                                <span className="text-lg text-black font-medium">COVID-19</span>
                                <span className="text-lg text-black font-medium">GENERAL HEALTHCARE</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <a href="https://hackdartmouth-virtual.devpost.com" target="_blank">
                        <button className="bg-[#D9D9D9] border-2 border-[#D9D9D9] text-[#CC5264] text-[17px] font-bold tracking-widest rounded-xl py-[18px] px-16 hover:text-[#EEE9D7] hover:border-[#EEE9D7] hover:bg-gradient-to-r from-[#D6AB36] to-[#D138BE]">
                                {"SEE PAST PROJECTS"}
                        </button>
                    </a>
                </div>
            </div>
        </div>
      </>
    )
  }