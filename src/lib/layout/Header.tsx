/* eslint-disable no-nested-ternary */
import {
  Box,
  Circle,
  Flex,
  Image,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";

import NavItems from "lib/components/bits/NavItems";

import ThemeToggle from "./ThemeToggle";

// eslint-disable-next-line sonarjs/cognitive-complexity
const Header = () => {
  const { colorMode } = useColorMode();
  const [isActive, setIsActive] = useState("home");
  const getNavLinks = (link: string) => {
    setIsActive(link);
  };

  const [navbar, setNavbar] = useState(false);
  const [openNav, setOpenNav] = useState(true);
  const ChangeHeaderPosition = () => {
    const scrollHeight = 80;
    const pos = window.scrollY;

    if (pos >= scrollHeight) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", ChangeHeaderPosition);
  }, []);
  return (
    <Flex
      w={navbar && openNav ? "10%" : navbar && !openNav ? "0%" : "full"}
      pos={navbar ? "fixed" : "unset"}
      top="50%"
      left={0}
      transform={navbar ? "translateY(-50%)" : "unset"}
      justify="center"
      zIndex="900"
      bgColor={colorMode === "light" ? "white" : "#1a202c"}
      shadow="sm"
      borderRadius={navbar ? "0 25px 25px 0 " : "0"}
      // transition="all ease .2s"
    >
      {navbar ? (
        <Circle
          bgColor="brand.100"
          color="white"
          size="2rem"
          border="4px solid white"
          onClick={() => setOpenNav(!openNav)}
          cursor="pointer"
          pos="absolute"
          right={openNav ? "0" : "-40px"}
        >
          {openNav ? <AiOutlineClose /> : <AiOutlineMenuFold />}
        </Circle>
      ) : null}
      <Stack
        as="header"
        direction={navbar ? "column" : "row"}
        w={navbar && openNav ? "100%" : navbar && !openNav ? "0%" : "90%"}
        align="center"
        h={navbar ? "70vh" : "5rem"}
        gap={navbar ? "2rem" : "unset"}
        justify={navbar ? "center" : "space-between"}
        overflow="hidden"
      >
        <Link href="/" passHref>
          <Box w={navbar ? "4rem" : "10rem"}>
            <Image
              src={
                // eslint-disable-next-line no-nested-ternary
                navbar
                  ? "/assets/bamfav.png"
                  : colorMode === "light"
                  ? "/assets/bamfoliologo.png"
                  : "/assets/bamfoliologob.png"
              }
              w="full"
            />
          </Box>
        </Link>
        <Stack
          gap={navbar ? "1.5rem" : "4rem"}
          direction={navbar ? "column" : "row"}
          align="center"
        >
          <Box onClick={() => getNavLinks("home")}>
            <NavItems navlink="home" isActive={isActive} />
          </Box>
          <Box onClick={() => getNavLinks("about")}>
            <NavItems navlink="about" isActive={isActive} />
          </Box>
          <Box onClick={() => getNavLinks("skills")}>
            <NavItems navlink="skills" isActive={isActive} />
          </Box>
          <Box onClick={() => getNavLinks("gallery")}>
            <NavItems navlink="gallery" isActive={isActive} />
          </Box>
          <Box onClick={() => getNavLinks("contact")}>
            <NavItems navlink="contact" isActive={isActive} />
          </Box>
        </Stack>

        <Box>
          <ThemeToggle />
        </Box>
      </Stack>
    </Flex>
  );
};

export default Header;
