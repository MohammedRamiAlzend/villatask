import ResponsiveCarousel from "./components/ResponsiveCarousel/ResponsiveCarousel";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourthSection from "./components/FourthSection/FourthSection";
import FifthSection from "./components/FifthSection/FifthSection";
import FooterSection from "./components/FooterSection/FooterSection";
const Home = () => {
  return (
    <div>
      <ResponsiveCarousel />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <FooterSection />
    </div>
  );
};

export default Home;
