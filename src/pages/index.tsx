import FaqSection from "./faqSection";
import FooterSection from "./footerSection";
import HomeSection from "./homeSection";
import RegistrationSection from "./registrationSection";
import SponsorsSection from "./sponsorsSection";
import TracksSection from "./tracksSection";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/BackgroundSM.png')] h-[2756px] sm:bg-[url('/Background.png')] sm:h-[4625px]">
        <HomeSection/>
        <RegistrationSection/>
        <TracksSection/>
        <FaqSection/>
        <SponsorsSection/>
        <FooterSection/>
      </div>
    </>
  )
}
