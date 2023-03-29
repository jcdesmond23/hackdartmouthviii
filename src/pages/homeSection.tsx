import Link from "next/link";

export default function HomeSection() {
    return (
      <>
        <div className="h-[407px] sm:h-[982px]">
            <div className="flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center">
                    <h3 className="text-xs sm:text-2xl text-white font-semibold tracking-widest mt-6 sm:mt-[86px]">
                        {"HACKDARTMOUTH 2023 PRESENTS"}
                    </h3>
                    <h1 className="text-2xl sm:text-5xl lg:text-7xl  text-white font-black tracking-widest [text-shadow:_0_4px_0_#A74435] sm:[text-shadow:_0_6px_0_#A74435] lg:[text-shadow:_0_9px_0_#A74435] sm:mt-[11px]">
                        {"INTO THE MULTIVERSE"}
                    </h1>
                </div>
                <div className="flex flex-row gap-6 md:gap-14 mb-4">
                    <Link href="#about">
                        <button className="text-[#D9D9D9] text-[7px] sm:text-lg lg:text-2xl font-bold tracking-widest rounded-xl sm:rounded-2xl  border-[2px] sm:border-[3px] border-[#D9D9D9] w-16 sm:w-32 lg:w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                            {"ABOUT"}
                        </button>
                    </Link>
                    <Link href="#tracks">
                        <button className="text-[#D9D9D9] text-[7px] sm:text-lg lg:text-2xl font-bold tracking-widest rounded-xl sm:rounded-2xl border-[2px] sm:border-[3px] border-[#D9D9D9] w-16 sm:w-32 lg:w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                            {"TRACKS"}
                        </button>
                    </Link>
                    <Link href="#faq">
                        <button className="text-[#D9D9D9] text-[7px] sm:text-lg lg:text-2xl font-bold tracking-widest rounded-xl sm:rounded-2xl border-[2px] sm:border-[3px] border-[#D9D9D9] w-16 sm:w-32 lg:w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                        {"FAQ"}
                        </button>
                    </Link>
                    <Link href="#sponsors">
                        <button className="text-[#D9D9D9] text-[7px] sm:text-lg lg:text-2xl font-bold tracking-widest rounded-xl sm:rounded-2xl border-[2px] sm:border-[3px] border-[#D9D9D9] w-16 sm:w-32 lg:w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                            {"SPONSORS"}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </>
    )
  }