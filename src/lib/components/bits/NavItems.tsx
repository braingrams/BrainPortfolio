import { Circle, Flex, Text } from "@chakra-ui/react";
import ScrollTo from "react-scroll-into-view";

interface NavItemsProps {
  navlink: string;
  isActive: string;
}
function NavItems({ navlink, isActive }: NavItemsProps) {
  return (
    <ScrollTo selector={`#${navlink}`} alignToTop>
      <Flex pos="relative">
        <Text
          fontSize=".9rem"
          textTransform="capitalize"
          cursor="pointer"
          fontWeight={isActive === navlink ? "bold" : "400"}
        >
          {navlink}
        </Text>
        <Circle
          bgColor="brand.100"
          bottom="-.4rem"
          pos="absolute"
          left="50%"
          transform="translateX(-50%)"
          size=".5rem"
          display={isActive === navlink ? "block" : "none"}
        />
      </Flex>
    </ScrollTo>
  );
}

export default NavItems;
