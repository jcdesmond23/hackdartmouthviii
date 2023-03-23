export default function FooterSection() {
    return (
      <>
        <div className="bg-cover bg-[url('/footer.png')] h-[125px]">
            <div className="flex flex-col h-full items-center justify-center">
                <span className="text-[#D9D9D9] font-normal text-[23px] ">
                    {"Are you interested in sponsoring HackDartmouth?"}
                </span>
                <div>
                    <span className="text-[#D9D9D9] font-semibold text-[23px] ">
                        {"Contact us at "}
                    </span>
                    <span className="text-[#D9D9D9] font-semibold underline underline-offset-4 text-[23px] ">
                        {"team@hackdartmouth.org"}
                    </span>
                </div>
            </div>
        </div>
      </>
    )
  }