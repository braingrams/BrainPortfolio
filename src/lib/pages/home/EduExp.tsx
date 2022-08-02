import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

function EduExp() {
  return (
    <Flex align="center" justify="center" h="50vh">
      <VStack w="40%" textAlign="center" gap="2">
        <Heading fontSize="1.5rem">Education & Experience</Heading>
        <Text>
          All informations concerning my educational background and
          work/technical experience are embeded in my resume/CV. Please click
          below to download my Resume
        </Text>
        <Button background="brand.100" w="50%">
          Download CV
        </Button>
      </VStack>
    </Flex>
  );
}

export default EduExp;
