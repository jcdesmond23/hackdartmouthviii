import FaqSection from "./faqSection";
import FooterSection from "./footerSection";
import HomeSection from "./homeSection";
import RegistrationSection from "./registrationSection";
import SponsorsSection from "./sponsorsSection";
import TracksSection from "./tracksSection";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.cover}>
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
