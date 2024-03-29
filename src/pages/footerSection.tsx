export default function FooterSection() {
    return (
      <>
        <div className="h[52px] sm:h-[125px]">
            <div className="flex flex-col h-full items-center justify-center">
                <span className="text-[#D9D9D9] font-normal text-[14px] sm:text-[23px] ">
                    {"Are you interested in sponsoring HackDartmouth?"}
                </span>
                <div>
                    <span className="text-[#D9D9D9] font-semibold text-[14px] sm:text-[23px] ">
                        {"Contact us at "}
                    </span>
                    <span className="text-[#D9D9D9] font-semibold underline underline-offset-4 text-[14px] sm:text-[23px] ">
                        {"team@hackdartmouth.org"}
                    </span>
                </div>
            </div>
        </div>
      </>
    )
  }