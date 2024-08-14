import DonateSection from "@/components/UI/HomePage/DonateSection/DonateSection";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import LearnAboutUs from "@/components/UI/HomePage/LearnAboutUs/LearnAboutUs";
import OurSolutionSection from "@/components/UI/HomePage/OurSolutionSection/OurSolutionSection";
import PetAdoptSection from "@/components/UI/HomePage/PetAdoptSection/PetAdoptSection";
import PlanningAdopt from "@/components/UI/HomePage/PlanningAdopt/PlanningAdopt";


const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <PetAdoptSection/>
      <PlanningAdopt/>
      <OurSolutionSection/>
      
      <LearnAboutUs/>
      <DonateSection/>
    </>
  );
};

export default HomePage;