import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  VStack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import HireModal from "lib/components/utils/HireModal";
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
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w={["90%", "60%"]}
      borderRadius="20px"
      bgColor={colorMode === "light" ? "brand.100" : "gray.500"}
      m={["10rem auto 0rem", "10rem auto 5rem"]}
      py={["3rem", "0"]}
    >
      <HStack
        h={["auto", "40vh"]}
        px="2rem"
        flexDirection={["column-reverse", "row"]}
      >
        <Box w="full">
          <VStack w="full" align={["center", "flex-start"]} gap={["0", "2"]}>
            <Heading fontSize={["1.3rem", "1.5rem"]}>
              You have a new project?
            </Heading>
            <Text textAlign={["center", "left"]}>
              Contact me now and get a 30% discount on your new project
            </Text>
            <Button
              variant="outline"
              borderColor="white"
              border="2px solid"
              bgColor="white"
              w="50%"
              px="2rem"
              color={colorMode === "light" ? "black" : "gray.500"}
              onClick={onOpen}
            >
              Hire Me
            </Button>
          </VStack>
        </Box>
        <Box w="full">
          <Lottie options={defaultOptions} height="auto" width="100%" />
        </Box>
      </HStack>
      <HireModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default HireBanner;
