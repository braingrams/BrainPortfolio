import {
  Box,
  Heading,
  HStack,
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
    <Box id="about" bgImage="/assets/bg3.png" py="5rem">
      <VStack>
        <Heading
          fontSize="3xl"
          borderBottom="4px solid"
          borderColor="brand.100"
          w="fit-content"
        >
          About Me
        </Heading>
        <Text>First of all introduction, knowing me is actually fun</Text>
      </VStack>
      <HStack
        w="90%"
        mx="auto"
        gap="5rem"
        mt="4rem"
        alignItems="center"
        h="70vh"
      >
        <Box
          w="50%"
          py="3rem"
          bgColor={colorMode === "light" ? "white" : "inherit"}
          //   borderRadius="0 50px 50px"
          p="2rem"
        >
          <Heading fontSize="1.2rem" textAlign="center" mb="1rem">
            Short Overview
          </Heading>
          <VStack>
            <Text fontSize=".9rem">
              Have you ever imagined working with a developer that is
              goal-driven, smart, effective and communicative? Well that is me!
            </Text>
            <Text fontSize=".9rem">
              Hi once again. I am by virture of nomenclature addressed as
              <strong> Bukunmi Akinyemi Mustapha (BAM)</strong>, A young Yoruba
              man who hails from osun state, a practising muslim and lives in
              the outskirt of Lagos.
            </Text>
            <Text fontSize=".9rem">
              I am a frontend software engineer who's so particular about
              actualizing web related dream leading to the production of web
              applications that are blazing fast in speed, responsive, problem
              solving, efficient, and in vogue with the use of modern
              technologies/library and most supported stack around the globe
            </Text>
            <Text fontSize=".9rem">
              I have an experience of 3 years with consistent code writing, web
              app building and problem solving approaches
            </Text>
            <Text fontSize=".9rem">
              As a matter of fact, this is a mere snippet of who I really am.
              Want to know more about me? then <strong>Hire me!</strong>
            </Text>
          </VStack>
        </Box>
        <Box w="60%" pos="relative">
          <VStack gap={5}>
            <ServiceCard
              title="Efficacy"
              mr="7rem"
              icon={<GrDocumentPerformance />}
              subtitle="I have the ability to perform a task to a satisfactory or expected degree."
            />
            <HStack gap={4}>
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
            <Box pos="absolute" right="0">
              <Lottie options={defaultOptions} height={100} width={200} />
            </Box>
            <Box pos="absolute" left="0" bottom="0">
              <Lottie options={defaultOptionsB} height={120} width={150} />
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
}
