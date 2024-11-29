// Components
import UploadSection from "../components/landing-page/UploadSection.jsx";
import SecondSection from "../components/landing-page/SecondSection.jsx";
import FourthSection from "../components/landing-page/FourthSection.jsx";
import ThirdSection from "../components/landing-page/ThirdSection.jsx";
import FifthSection from "../components/landing-page/FifthSection.jsx";
import Footer from "../components/footer/Footer.jsx";

export default function LandingPage() {
  return (
    <>
      <UploadSection id="home" />
      <SecondSection id="about" />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer id="contact" />
    </>
  );
}
