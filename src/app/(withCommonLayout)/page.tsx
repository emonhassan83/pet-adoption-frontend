import Meta from "@/components/Meta/MetaData";
import DonateSection from "@/components/UI/HomePage/DonateSection/DonateSection";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import LearnAboutUs from "@/components/UI/HomePage/LearnAboutUs/LearnAboutUs";
import OurApproachSection from "@/components/UI/HomePage/OurApproach/OurApproach";
import OurSolutionSection from "@/components/UI/HomePage/OurSolutionSection/OurSolutionSection";
import PetAdoptSection from "@/components/UI/HomePage/PetAdoptSection/PetAdoptSection";
import PlanningAdopt from "@/components/UI/HomePage/PlanningAdopt/PlanningAdopt";


const HomePage = () => {
  return (
    <>
    <Meta
        title="Home | Petfinder - Pet Adoption Platform & Management System"
        description="This is the Pet Adoption Platform & Management System Home Page where all users can show adopt related all info and blogs and more."
      />
      <HeroSection/>
      <PetAdoptSection/>
      <PlanningAdopt/>
      <OurApproachSection/>
      <OurSolutionSection/>
      <LearnAboutUs/>
      <DonateSection/>
    </>
  );
};

export default HomePage;