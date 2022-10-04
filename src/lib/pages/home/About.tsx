import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { FcSalesPerformance } from "react-icons/fc";
import { GrDocumentPerformance } from "react-icons/gr";
import { IoTimerSharp } from "react-icons/io5";
import { SiWeblate } from "react-icons/si";
import Lottie from "react-lottie";

import about from "../../../lotties/about.json";
import launch from "../../../lotties/launch.json";
import ServiceCard from "lib/components/bits/ServiceCard";

export default function About() {
  const { colorMode } = useColorMode();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: about,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsB = {
    loop: true,
    autoplay: true,
    animationData: launch,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box id="about" bgImage="/assets/bg3.png" py="5rem" h="100vh">
      <VStack>
        <Heading
          fontSize={["2xl", "3xl"]}
          borderBottom="4px solid"
          borderColor="brand.100"
          w="fit-content"
        >
          About Me
        </Heading>
        <Text w={["70%", "full"]} textAlign="center">
          First of all introduction, knowing me is actually fun
        </Text>
      </VStack>
      <Stack
        w="90%"
        mx="auto"
        gap={["3rem", "5rem"]}
        mt={["2rem", "4rem"]}
        alignItems="center"
        h={["auto", "70vh"]}
        direction={["column", "row"]}
      >
        <Box
          w={["full", "50%"]}
          py="3rem"
          bgColor={colorMode === "light" ? "white" : "inherit"}
          //   borderRadius="0 50px 50px"
          p="2rem"
        >
          <Heading fontSize="1.2rem" textAlign="center" mb="1rem">
            Short Overview
          </Heading>
          <VStack>
            <Text fontSize=".9rem" noOfLines={[3, 30]}>
              Have you ever imagined working with a developer that is
              goal-driven, smart, effective and communicative? Well that is me!
              <br />
              <br />
              Hi once again. I am by virture of nomenclature addressed as
              <strong> Bukunmi Akinyemi Mustapha (BAM)</strong>, A young Yoruba
              man who hails from osun state, a practising muslim and lives in
              the outskirt of Lagos.
              <br />
              <br />I am a frontend software engineer who's so particular about
              actualizing web related dream leading to the production of web
              applications that are blazing fast in speed, responsive, problem
              solving, efficient, and in vogue with the use of modern
              technologies/library and most supported stack around the globe
              <br />
              <br />I have an experience of 3 years with consistent code
              writing, web app building and problem solving approaches
              <br />
              <br />
              As a matter of fact, this is a mere snippet of who I really am.
              Want to know more about me? then <strong>Hire me!</strong>
            </Text>
            <Text
              textAlign="center"
              textDecor="underline"
              fontSize=".9rem"
              display={["block", "none"]}
            >
              Read full about me on my social network
            </Text>
          </VStack>
        </Box>
        <Box w={["full", "60%"]} pos="relative">
          <VStack gap={5}>
            <ServiceCard
              title="Efficacy"
              mr="7rem"
              icon={<GrDocumentPerformance />}
              subtitle="I have the ability to perform a task to a satisfactory or expected degree."
            />
            <HStack gap={[2, 4]}>
              <ServiceCard
                title="Intuitive Performance"
                icon={<FcSalesPerformance />}
                subtitle="Provides quick action solutions to both clients and high-end users that are smart while interacted with"
              />
              <ServiceCard
                title="Scalable web app"
                icon={<SiWeblate />}
                subtitle="Converting designs to interactive elements that solve problems
                  on the worldwide web"
              />
            </HStack>
            <ServiceCard
              title="Time consciousness"
              mr="-7rem !important"
              icon={<IoTimerSharp />}
              subtitle="Quality without speed and deliverables at proposed time frame is not a flex. I'm time conscious"
            />
            <Box
              pos="absolute"
              right="0"
              h={["70px", "100px"]}
              w={["140px", "200px"]}
            >
              <Lottie options={defaultOptions} height="100%" width="100%" />
            </Box>
            <Box
              pos="absolute"
              left="0"
              bottom="0"
              h={["100px", "120px"]}
              w={["120px", "150px"]}
            >
              <Lottie options={defaultOptionsB} height="100%" width="100%" />
            </Box>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
}
