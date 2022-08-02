import { Box } from "@chakra-ui/react";
import { BiArrowToTop } from "react-icons/bi";
import ScrollToTop from "react-scroll-to-top";

import About from "./About";
import Gallery from "./Gallery";
// import EduExp from "./EduExp";
import Hero from "./Hero";
import HireBanner from "./HireBanner";
import Skills from "./Skills";

const Home = () => {
  return (
    <Box w="full">
      <ScrollToTop smooth component={<BiArrowToTop />} className="scroll" />
      <Hero />
      <About />
      <Skills />
      {/* <EduExp /> */}
      <HireBanner />
      <Gallery />
    </Box>
  );
};

export default Home;
