import FaqSection from "./faqSection";
import FooterSection from "./footerSection";
import HomeSection from "./homeSection";
import RegistrationSection from "./registrationSection";
import SponsorsSection from "./sponsorsSection";
import TracksSection from "./tracksSection";

export default function Home() {
  return (
    <>
      <div>
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
