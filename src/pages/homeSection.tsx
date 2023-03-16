import Link from "next/link";

export default function HomeSection() {
    return (
      <>
        <div className="bg-cover bg-[url('/Landing1.png')] h-[982px]">
            <div className="flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl text-white font-semibold tracking-widest mt-[86px]">
                        HACKDARTMOUTH 2023 PRESENTS
                    </h3>
                    <h1 className="text-7xl text-white font-black tracking-widest [text-shadow:_0_9px_0_#A74435] mt-[11px]">
                            INTO THE MULTIVERSE
                    </h1>
                </div>
                <div className="flex flex-row gap-14 mb-20">
                    <Link href="#about">
                        <button className="text-[#D9D9D9] text-2xl font-bold tracking-widest rounded-2xl border-[3px] border-[#D9D9D9] w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                            ABOUT
                        </button>
                    </Link>
                    <button className="text-[#D9D9D9] text-2xl font-bold tracking-widest rounded-2xl border-[3px] border-[#D9D9D9] w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                        TRACKS
                    </button>
                    <button className="text-[#D9D9D9] text-2xl font-bold tracking-widest rounded-2xl border-[3px] border-[#D9D9D9] w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                        FAQ
                    </button>
                    <button className="text-[#D9D9D9] text-2xl font-bold tracking-widest rounded-2xl border-[3px] border-[#D9D9D9] w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                        SPONSORS
                    </button>
                </div>
            </div>
        </div>
      </>
    )
  }