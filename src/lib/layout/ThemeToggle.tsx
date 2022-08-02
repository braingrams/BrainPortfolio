import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {/* <IconButton
      aria-label="theme toggle"
      // icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
      onClick={toggleColorMode}
    /> */}
      <HStack
        onClick={toggleColorMode}
        borderRadius="50px"
        p=".4rem .6rem"
        backgroundColor={colorMode === "light" ? "brand.100" : "#423a02"}
        align="center"
      >
        {colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
        <Text cursor="pointer" fontSize=".8rem">
          {colorMode === "light" ? "Dark mode" : "Light Mode"}
        </Text>
      </HStack>
    </>
  );
};

export default ThemeToggle;
