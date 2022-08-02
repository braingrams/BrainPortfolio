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
import { SiBootstrap, SiChakraui, SiMaterialui } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import Lottie from "react-lottie";

import about from "../../../lotties/csslib.json";
import SkillsCard from "../bits/SkillsCard";

export default function CssLib() {
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
          The CSS Libraries
        </Heading>
        <Text color="white" fontSize=".9rem" w="70%" mx="auto">
          Particular Css Libraries are used to enhance speed and efficiency in a
          web application used based on project requirements, maintenance and
          bogousity
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
          <Lottie options={defaultOptions} height="auto" width="80%" />/
        </Box>
        <Box w="50%" textAlign="center" mt="2rem !important">
          <Box mb="1rem">
            <Text
              color="white"
              textTransform="uppercase"
              textDecor="underline"
              mb=".5rem"
            >
              Bootstrap
            </Text>
            <HStack>
              <Box>
                <SkillsCard
                  br="50%"
                  bg="white"
                  color="brand.100"
                  icon={<Icon as={SiBootstrap} />}
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
              MUI (Material UI)
            </Text>
            <HStack>
              <Box>
                <SkillsCard
                  br="50%"
                  bg="white"
                  color="brand.100"
                  icon={<Icon as={SiMaterialui} />}
                />
              </Box>
              <Progress height="32px" w="full" value={70}>
                <ProgressLabel fontSize="1rem">70%</ProgressLabel>
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
              Tailwind
            </Text>
            <HStack>
              <Box>
                <SkillsCard
                  br="50%"
                  bg="white"
                  color="brand.100"
                  icon={<Icon as={TbBrandTailwind} />}
                />
              </Box>
              <Progress height="32px" w="full" value={75}>
                <ProgressLabel fontSize="1rem">75%</ProgressLabel>
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
              Chakra Ui
            </Text>
            <HStack>
              <Box>
                <SkillsCard
                  br="50%"
                  bg="white"
                  color="brand.100"
                  icon={<Icon as={SiChakraui} />}
                />
              </Box>
              <Progress height="32px" w="full" value={99}>
                <ProgressLabel fontSize="1rem">99%</ProgressLabel>
              </Progress>
            </HStack>
          </Box>
        </Box>
      </Stack>
    </VStack>
  );
}
