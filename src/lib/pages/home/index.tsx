import { Box, useColorMode } from "@chakra-ui/react";
import { BiArrowToTop } from "react-icons/bi";
import ScrollToTop from "react-scroll-to-top";

import About from "./About";
import ContactUs from "./ContactUs";
import Gallery from "./Gallery";
import Greetings from "./Greetings";
// import EduExp from "./EduExp";
import Hero from "./Hero";
import HireBanner from "./HireBanner";
import Skills from "./Skills";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <Box w="full">
      <ScrollToTop
        smooth
        component={<BiArrowToTop />}
        className={colorMode === "light" ? "scroll" : "scroll dark"}
      />
      <Hero />
      <About />
      <Skills />
      {/* <EduExp /> */}
      <HireBanner />
      <Gallery />
      <ContactUs />
      <Greetings />
    </Box>
  );
};

export default Home;
