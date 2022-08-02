import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Lottie from "react-lottie";

import animationData from "../../../lotties/hired.json";

function HireBanner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box w="60%" borderRadius="20px" bgColor="brand.100" mx="auto" my="10rem">
      <HStack h="40vh" px="2rem">
        <Box w="full">
          <VStack w="full" align="flex-start" gap="2">
            <Heading fontSize="1.5rem">You have a new project?</Heading>
            <Text>
              Contact me now and get a 30% discount on your new project
            </Text>
            <Button
              variant="outline"
              borderColor="white"
              border="2px solid"
              bgColor="white"
              w="50%"
              px="2rem"
            >
              Hire Me
            </Button>
          </VStack>
        </Box>
        <Box w="full">
          <Lottie options={defaultOptions} height="auto" width="100%" />
        </Box>
      </HStack>
    </Box>
  );
}

export default HireBanner;
