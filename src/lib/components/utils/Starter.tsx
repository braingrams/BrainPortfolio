import {
  Box,
  Heading,
  HStack,
  Icon,
  Progress,
  ProgressLabel,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import Lottie from "react-lottie";

import about from "../../../lotties/starter.json";
import SkillsCard from "../bits/SkillsCard";

export default function Starter() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: about,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <VStack w="full" justify="center" h="full">
      <Box w={["90%", "50%"]} textAlign="center" mx="auto">
        <Heading color="white" fontSize="1.7rem" mb=".5rem">
          The Building Block of every webpage
        </Heading>
        <Text color="white" fontSize=".9rem" w={["80%", "70%"]} mx="auto">
          The 3 most important programming language that serves as the building
          block of every webpage or application
        </Text>
      </Box>
      <Stack
        align="center"
        h="auto"
        justify="center"
        w="90%"
        mx="auto"
        direction={["column", "row"]}
        gap={8}
      >
        <Box w="50%" display={["none", "block"]}>
          <Lottie options={defaultOptions} height="auto" width="80%" />
        </Box>
        <Box w={["full", "50%"]} textAlign="center" mt="2rem !important">
          <Box mb="1rem">
            <Text
              color="white"
              textTransform="uppercase"
              textDecor="underline"
              mb=".5rem"
            >
              Html (Hypertext markup language)
            </Text>
            <HStack>
              <Box>
                <SkillsCard
                  br="50%"
                  bg="white"
                  color="brand.100"
                  icon={<Icon as={AiFillHtml5} />}
                />
              </Box>
              <Progress height="32px" w="full" value={99}>
                <ProgressLabel fontSize="1rem">99%</ProgressLabel>
              </Progress>
            </HStack>
          </Box>
          <Box>
            <Text
              color="white"
              textTransform="uppercase"
              textDecor="underline"
              mb=".5rem"
            >
              css (Cascading stylesheets)
            </Text>
            <HStack>
              <Box>
                <SkillsCard
                  br="50%"
                  bg="white"
                  color="brand.100"
                  icon={<Icon as={DiCss3} />}
                />
              </Box>
              <Progress height="32px" w="full" value={97}>
                <ProgressLabel fontSize="1rem">97%</ProgressLabel>
              </Progress>
            </HStack>
          </Box>
          <Box>
            <Text
              color="white"
              textTransform="uppercase"
              textDecor="underline"
              mb=".5rem"
            >
              JS (Javascript)
            </Text>
            <HStack>
              <Box>
                <SkillsCard
                  br="50%"
                  bg="white"
                  color="brand.100"
                  icon={<Icon as={DiJavascript1} />}
                />
              </Box>
              <Progress height="32px" w="full" value={90}>
                <ProgressLabel fontSize="1rem">90%</ProgressLabel>
              </Progress>
            </HStack>
          </Box>
        </Box>
      </Stack>
    </VStack>
  );
}
