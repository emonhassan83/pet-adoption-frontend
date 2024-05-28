import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
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
    </>
  );
};

export default HomePage;