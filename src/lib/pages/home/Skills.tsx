import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import { useEffect } from "react";

import CssLib from "lib/components/utils/CssLib";
import Javascript from "lib/components/utils/Javascript";
import Skillset from "lib/components/utils/Skillset";
import Starter from "lib/components/utils/Starter";

const Skills: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const components = document.querySelectorAll("#component");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const container: HTMLElement = document.querySelector("#skills")!;

    gsap.to(components, {
      xPercent: -100 * (components.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (components.length - 1),
        end: () => `+=${container.offsetWidth}`,
      },
    });
  }, []);

  return (
    <Box
      as="div"
      id="skills"
      w="400%"
      h="100vh"
      display="flex"
      flexWrap="nowrap"
    >
      <Box as="div" id="component">
        <Skillset />
      </Box>
      <Box as="div" id="component" bgColor="gray.800">
        <Starter />
      </Box>
      <Box as="div" id="component" bgColor="green.500">
        <Javascript />
      </Box>
      <Box as="div" id="component" bgColor="blue.800">
        <CssLib />
      </Box>
    </Box>
  );
};

export default Skills;
