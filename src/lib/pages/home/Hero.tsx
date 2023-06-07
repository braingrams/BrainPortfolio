import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import fileDownload from "js-file-download";
import Lottie from "react-lottie";
import Typewriter from "typewriter-effect";

import * as animationData from "../../../lotties/music.json";
import HireModal from "lib/components/utils/HireModal";

export default function Hero() {
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

  const handleDownload = (url: string, filename: string) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res: any) => {
        fileDownload(res.data, filename);
      });
  };
  return (
    <Box w="90%" mx="auto">
      <Flex
        w="full"
        h={["auto", "80vh"]}
        id="home"
        align="center"
        flexDir={["column", "row"]}
        py={["3rem", "0"]}
      >
        <VStack w={["full", "40%"]} align="flex-start" zIndex="3">
          <Box h={["5rem", "8rem"]}>
            <Heading fontSize={["2xl", "5xl"]} fontWeight="bold" noOfLines={2}>
              <Typewriter
                options={{
                  strings: [
                    "Hi! I'm Bukunmi Akinyemi Mustapha",
                    "I Make Responsive & Interactive Web Apps",
                    "I'm a React/Next JS Front End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  // deleteSpeed: 10,
                }}
              />
            </Heading>
          </Box>
          {/* <Heading fontSize="5xl">Hi! I'm Bukunmi</Heading>
          <Heading fontSize="5xl">
            <Box as="span" color="brand.100" pr=".5rem">
              Akinyemi
            </Box>
            Mustapha
          </Heading> */}
          <Text fontSize=".9rem" textAlign="justify">
            A proficient frontend developer geared at actualizing web related
            dreams with modern softwares and tools. My three (3) core values are
            "Speed", "Efficency" and "Reliability"
          </Text>
          <HStack mt="2rem !important" gap=".5rem">
            <Button
              variant="outline"
              borderColor={colorMode === "dark" ? "white" : "black"}
              border="2px solid"
              px="2rem"
              borderRadius="35px"
              onClick={onOpen}
            >
              Hire me
            </Button>
            <Button
              background="brand.100"
              color={colorMode === "dark" ? "black" : "white"}
              px="2rem"
              bgColor={colorMode === "light" ? "black" : "white"}
              borderRadius="35px"
              onClick={() => {
                handleDownload(
                  "https://ucarecdn.com/2eff1201-8271-4b43-a9cd-0eafbf829187/",
                  "bamfolio-cv.pdf"
                );
              }}
            >
              Download Résumé
            </Button>
          </HStack>
        </VStack>
        <Box
          w={["full", "60%"]}
          pos={["absolute", "relative"]}
          zIndex="1"
          opacity={["0.1", "1"]}
          filter={["blur(2px)", "none"]}
        >
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
      <HireModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
