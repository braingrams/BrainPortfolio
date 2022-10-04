import {
  Box,
  Circle,
  Flex,
  HStack,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiSnapchatFill,
  RiTwitterFill,
} from "react-icons/ri";

const Footer = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const isThankYou = router.asPath === "/thanks";
  const isConnect = router.asPath === "/connect";
  return (
    <Box
      w="full"
      mt="2rem"
      bgColor={colorMode === "light" ? "white" : "inherit"}
      display={isThankYou ? "none" : "block"}
    >
      <Flex
        borderTop="1px solid #e5e5e5"
        as="footer"
        width="90%"
        mx="auto"
        align="center"
        h="4rem"
        justify="space-between"
      >
        <Text>
          {new Date().getFullYear()} -{" "}
          <Link
            href="https://bamfolio.herokuapp.com"
            isExternal
            rel="noopener noreferrer"
          >
            Bamfolio
          </Link>
        </Text>
        <HStack
          spacing={[2, 3]}
          // display={["grid", "flex"]}
          gridTemplateColumns="repeat(2, 1fr)"
          // position={["absolute", "unset"]}
          // top="170px"
          // left="50%"
          // gap={[5, 0]}
        >
          <Circle
            as="a"
            href="https://instagram.com/el__seso/"
            size="32px"
            bg={colorMode === "light" ? "brand.100" : "black"}
          >
            <RiInstagramFill />
          </Circle>
          <Circle
            as="a"
            href="https://t.snapchat.com/6T0OWZCz"
            size="32px"
            bg={colorMode === "light" ? "brand.100" : "black"}
          >
            <RiSnapchatFill />
          </Circle>
          <Circle
            as="a"
            href="https://twitter.com/brain_tweets"
            size="32px"
            bg={colorMode === "light" ? "brand.100" : "black"}
          >
            <RiTwitterFill />
          </Circle>
          <Circle
            as="a"
            href="https://www.linkedin.com/in/akinyemi-oluwabukunmi-4806281b2"
            size="32px"
            bg={colorMode === "light" ? "brand.100" : "black"}
          >
            <RiLinkedinFill />
          </Circle>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
