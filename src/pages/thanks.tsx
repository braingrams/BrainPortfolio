import { Flex, Text, Button, VStack, Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

function Thanks() {
  const router = useRouter();
  return (
    <Flex
      bgColor="gray.800"
      color="white"
      h="100vh"
      w="100%"
      justify="center"
      align="center"
    >
      <VStack w={["80%", "30%"]} spacing="1rem">
        <Link href="/" passHref>
          <Box w="7rem">
            <Image src="/assets/bamfav.png" w="full" />
          </Box>
        </Link>
        <Text fontSize={["1.2rem", "1.5rem"]} textAlign="center">
          Thanks for reaching out, I'll get back to you the quickiest that I can
        </Text>
        <Button
          color="black"
          bgColor="white"
          onClick={() => router.push("/")}
          borderRadius="35px"
          h="3.5rem"
          px="3rem"
        >
          Go Back to home
        </Button>
      </VStack>
    </Flex>
  );
}

export default Thanks;
