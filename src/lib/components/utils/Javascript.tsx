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
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import Lottie from "react-lottie";

import about from "../../../lotties/nuxt.json";
import SkillsCard from "../bits/SkillsCard";

export default function Javascript() {
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
      <Box w="50%" textAlign="center" mx="auto">
        <Heading color="white" fontSize="1.7rem" mb=".5rem">
          Javascript Stacks
        </Heading>
        <Text color="white" fontSize=".9rem" w="70%" mx="auto">
          Upon build with HTML, Css and Javascript, a better interaction can be
          achieved with certain stacks for a better user interaction and
          experience
        </Text>
      </Box>
      <Stack
        align="center"
        h="auto"
        justify="center"
        w="90%"
        mx="auto"
        flexDirection="row"
        gap={8}
      >
        <Box w="50%">
          <Lottie options={defaultOptions} height="auto" width="80%" />
        </Box>
        <Box w="50%" textAlign="center" mt="2rem !important">
          <Box mb="1rem">
            <Text
              color="white"
              textTransform="uppercase"
              textDecor="underline"
              mb=".5rem"
            >
              React JS
            </Text>
            <HStack>
              <Box>
                <SkillsCard
                  br="50%"
                  bg="white"
                  color="brand.100"
                  icon={<Icon as={DiReact} />}
                />
              </Box>
              <Progress height="32px" w="full" value={81}>
                <ProgressLabel fontSize="1rem">81%</ProgressLabel>
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
              Next JS
            </Text>
            <HStack>
              <Box>
                <SkillsCard
                  br="50%"
                  bg="white"
                  color="brand.100"
                  icon={<Icon as={TbBrandNextjs} />}
                />
              </Box>
              <Progress height="32px" w="full" value={92}>
                <ProgressLabel fontSize="1rem">92%</ProgressLabel>
              </Progress>
            </HStack>
          </Box>
        </Box>
      </Stack>
    </VStack>
  );
}
