import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

import type { CardProps } from "lib/types/appTypes";

function ProjectCard({ link, title, image, contributor, theme }: CardProps) {
  return (
    <Box
      w="full"
      h="25rem"
      overflow="hidden"
      // borderRadius="20px"
      transition="150ms"
      boxShadow="0 0 15px rgba(0,0,0,.2)"
      borderBottom="4px solid"
      borderColor={theme}
    >
      <Box pos="relative" h="15rem" role="group" overflow="hidden">
        <Box
          w="full"
          h="100%"
          overflow="hidden"
          transition=".5s"
          _groupHover={{
            transform: "scale(1.4)",
          }}
        >
          <Image src={image} h="full" w="full" objectFit="cover" />
        </Box>
        <Box
          bgColor="rgba(0,0,0,0.8)"
          w="full"
          h="full"
          top="0"
          position="absolute"
          opacity="0"
          _groupHover={{
            opacity: "1",
          }}
        >
          <Button
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%,-50%)"
            variant="outline"
            fontSize=".9rem"
            color="white"
            _hover={{
              color: "black",
              bgColor: "white",
            }}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Click her for live preview
            </a>
          </Button>
        </Box>
      </Box>
      <Box
        w="full"
        h="10rem"
        p="2rem 1rem 1rem"
        mt=".2rem"
        // boxShadow="0 0 15px rgba(0,0,0,.2)"
      >
        <Text fontSize=".6rem" textDecor="underline">
          Project Title:
        </Text>
        <Heading fontSize="1.6rem" fontWeight="700">
          {title}
        </Heading>
        <Box mt="1rem">
          <Text fontSize=".6rem" textDecor="underline">
            Contributors:
          </Text>
          <Text fontSize=".7rem" fontWeight="500">
            {contributor}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;
