import Footer from "@/components/Shared/Footer/Footer";
import NavbarWrapper from "@/components/Shared/Navbar/NavbarWrapper";
import ScrollNavbar from "@/components/Shared/Navbar/ScrollNavbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Petfinder - Pet Adoption Platform & Management System",
  description:
    "This is the Pet Adoption Platform & Management System About Us Page where all users can show all About Us all information and more.",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ScrollNavbar>
        <NavbarWrapper />
      </ScrollNavbar>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
