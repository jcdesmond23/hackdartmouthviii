export default function RegistrationSection() {
    return (
      <>
        <div id="about" className="h-[482px] sm:h-[982px]">
            <div className="flex flex-col h-full items-center justify-center">
                <h2 className="text-white text-[20px] sm:text-[40px] font-black tracking-wider">{"WELCOME TO"}</h2>
                <h1 className="text-[25px] sm:text-[50px] font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#D6AB36] to-[#D138BE]">{"HACKDARTMOUTH VIII"}</h1>
                <h3 className="mt-1.5 text-white text-sm sm:text-2xl font-light tracking-[.333em]">{"Hack to Infinity & Beyond"}</h3>
                <h3 className="mt-4 text-white tracking-wider font-bold text-sm sm:text-2xl">{"24 Hours  |  $8,000 in Prizes"}</h3>
                <a href={"https://docs.google.com/forms/d/e/1FAIpQLSerRsM53yojl4hc0CSHNcHAVHL_agxM4D0d7Gk7s_hTl45g9Q/viewform"} target="_blank">
                    <button className="mt-6 sm:mt-12 bg-[#D9D9D9] border-2 border-[#D9D9D9] text-[#CC5264] text-[14px] sm:text-[28px] font-bold tracking-widest rounded-xl py-[9px] sm:py-[18px] px-8 sm:px-16 hover:text-[#EEE9D7] hover:border-[#EEE9D7] hover:bg-gradient-to-r from-[#D6AB36] to-[#D138BE]">
                            {"REGISTER"}
                    </button>
                </a>
            </div>
        </div>
      </>
    )
  }