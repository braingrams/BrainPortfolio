import { Box, Square } from "@chakra-ui/react";

interface SkillProps {
  icon: any;
  bg?: string;
  br?: string;
  color?: string;
}
export default function SkillsCard({
  icon,
  bg = "gray.800",
  br = "5px",
  color = "white",
}: SkillProps) {
  return (
    <Box w="full">
      <Square
        size="5rem"
        borderRadius={br}
        bgColor={bg}
        color={color}
        fontSize="3rem"
      >
        {icon}
      </Square>
    </Box>
  );
}
