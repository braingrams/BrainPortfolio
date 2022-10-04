import { Box, Circle, HStack, Text, useColorMode } from "@chakra-ui/react";

interface ServiceCardProps {
  icon: any;
  title: string;
  subtitle: string;
  mr?: string;
}
function ServiceCard({ icon, title, subtitle, mr }: ServiceCardProps) {
  const { colorMode } = useColorMode();
  return (
    <HStack
      bgColor={colorMode === "light" ? "white" : "inherit"}
      w={["60%", "50%"]}
      px="1rem"
      borderRadius="10px"
      h="6.5rem"
      gap={["0", "1rem"]}
      shadow="md"
      mr={mr}
      _hover={{
        outline: "10px solid",
        outlineColor: "rgba(6,153,214, .4)",
      }}
    >
      <Circle bgColor="#fbf3be" size="2.6rem">
        {icon}
      </Circle>
      <Box>
        <Text fontSize="1rem" fontWeight="bold" noOfLines={[1, 3]}>
          {title}
        </Text>
        <Text fontSize=".7rem" noOfLines={[3, 5]}>
          {subtitle}
        </Text>
      </Box>
    </HStack>
  );
}

export default ServiceCard;
