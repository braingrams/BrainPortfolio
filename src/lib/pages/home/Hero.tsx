import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Lottie from "react-lottie";

import * as animationData from "../../../lotties/music.json";

export default function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box w="90%" mx="auto">
      <Flex w="full" h="80vh" id="home" align="center">
        <VStack w="40%" align="flex-start">
          <Heading fontSize="5xl">Hi! I'm Bukunmi</Heading>
          <Heading fontSize="5xl">
            <Box as="span" color="brand.100" pr=".5rem">
              Akinyemi
            </Box>
            Mustapha
          </Heading>
          <Text fontSize=".9rem">
            A proficient frontend developer geared at actualizing web related
            dreams with modern softwares and tools. My three (3) core values are
            "Speed", "Efficency" and "Reliability"
          </Text>
          <HStack mt="2rem !important" gap=".5rem">
            <Button
              variant="outline"
              borderColor="brand.100"
              border="2px solid"
              px="2rem"
            >
              Hire Me
            </Button>
            <Button background="brand.100">Download Resume</Button>
          </HStack>
        </VStack>
        <Box w="60%" pos="relative">
          <Image src="/assets/bb.png" w="90%" ml="auto" />
          <Box pos="absolute" bottom="1rem" shadow="lg">
            <Image src="/assets/Group 1.png" w="9rem" />
          </Box>
          <Box pos="absolute" right="8rem" shadow="lg" bottom="0rem">
            <Image src="/assets/Group 5.png" w="5rem" />
          </Box>
          <Box pos="absolute" right="15rem" shadow="lg" top="0rem">
            <Image src="/assets/Group 6.png" w="8rem" />
          </Box>
          <Box pos="absolute" left="15rem" top="8rem">
            <Image src="/assets/Ellipse 4.png" w="1rem" />
          </Box>
          <Box pos="absolute" right="0rem" top="-2rem">
            <Image src="/assets/Ellipse 4 copy.png" w="1rem" />
          </Box>
          <Box pos="absolute" right="50%" bottom="-2rem">
            <Image src="/assets/star.png" w="1.5rem" />
          </Box>
          <Box pos="absolute" left="4rem" top="-2rem">
            {/* <Image src="/assets/emoji.png" w="4rem" filter="blur(1px)" /> */}
            <Lottie options={defaultOptions} height={100} width={150} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
