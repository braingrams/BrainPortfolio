/* eslint-disable no-nested-ternary */
import {
  Box,
  Circle,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TableCaption,
  useColorMode,
  Text,
  HStack,
  Button,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { FaTiktok } from "react-icons/fa";
import {
  RiSnapchatFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiWhatsappFill,
  RiFacebookFill,
  RiGithubFill,
} from "react-icons/ri";

import socials from "./socials.json";

function Connect() {
  const { colorMode } = useColorMode();
  return (
    <Box w="full" minH="80vh">
      <Box w="80%" mx="auto" py="2rem" h="full">
        {/* <Circle
          size="12rem"
          overflow="hidden"
          border="6px solid"
          borderColor="brand.100"
          mx="auto"
        >
          <Image
            src="/assets/myface.jpeg"
            w="full"
            h="full"
            objectFit="cover"
            //   transform="rotateY(180deg)"
          />
        </Circle> */}
        <Stack
          align="start"
          minH="80vh"
          gap={["0", "3rem"]}
          direction={["column", "row"]}
        >
          {/* <Circle
            size="12rem"
            overflow="hidden"
            border="6px solid"
            borderColor="brand.100"
          >
            <Image
              src="/assets/myface.jpeg"
              w="full"
              h="full"
              objectFit="cover"
              //   transform="rotateY(180deg)"
            />
          </Circle> */}
          <Stack
            w={["full", "80%"]}
            h={["auto", "100vh"]}
            gap={[".5rem", "2rem"]}
            mt="2rem"
            direction={["row", "column"]}
          >
            <Box
              h="30vh"
              w="full"
              bgColor="gray.300"
              borderRadius="20px"
              overflow="hidden"
            >
              <Image
                src="/assets/myfaceb.jpeg"
                w="full"
                h="full"
                objectFit="cover"
                //   transform="rotateY(180deg)"
              />
            </Box>
            <Box
              h="30vh"
              w="full"
              bgColor="gray.300"
              borderRadius="20px"
              overflow="hidden"
            >
              <Image
                src="/assets/myfacec.jpeg"
                w="full"
                h="full"
                objectFit="cover"
                //   transform="rotateY(180deg)"
              />
            </Box>
            <Box
              h="30vh"
              w="full"
              bgColor="gray.300"
              borderRadius="20px"
              overflow="hidden"
            >
              <Image
                src="/assets/myface.jpeg"
                w="full"
                h="full"
                objectFit="cover"
                //   transform="rotateY(180deg)"
              />
            </Box>
          </Stack>
          <Box w={["full", "80%"]}>
            <Heading
              textAlign="center"
              mb="3rem"
              mt="2rem"
              fontSize={["1.3rem", "3xl"]}
            >
              Connect with me on any of your Favorite Channel
            </Heading>
            <TableContainer w="full" py="1rem">
              <Table>
                <Thead>
                  <Tr borderBottom="2px solid">
                    <Th borderRight="2px solid">Platform</Th>
                    <Th>Address/Url to connect with me</Th>
                    <Th />
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    // eslint-disable-next-line sonarjs/cognitive-complexity
                    socials.map((social, index) => (
                      <Tr borderBottom="2px solid" key={social.id}>
                        <Td borderRight="2px solid">
                          <HStack>
                            <Circle
                              size="32px"
                              bg={colorMode === "light" ? "brand.100" : "white"}
                              color="black"
                            >
                              {social.name === "SnapChat" ? (
                                <RiSnapchatFill />
                              ) : social.name === "Instagram" ? (
                                <RiInstagramFill />
                              ) : social.name === "Twitter" ? (
                                <RiTwitterFill />
                              ) : social.name === "LinkedIn" ? (
                                <RiLinkedinFill />
                              ) : social.name === "Github" ? (
                                <RiGithubFill />
                              ) : social.name === "WhatsApp" ? (
                                <RiWhatsappFill />
                              ) : social.name === "Tiktok" ? (
                                <FaTiktok />
                              ) : social.name === "Facebook" ? (
                                <RiFacebookFill />
                              ) : null}
                            </Circle>
                            <Text>{social.name}</Text>
                          </HStack>
                        </Td>
                        <Td>
                          <a href={social.url}>{social.url}</a>
                        </Td>
                        <Td>
                          <Button
                            borderRadius="35px"
                            bgColor={
                              colorMode === "light" ? "brand.100" : "gray.700"
                            }
                            px="2rem"
                          >
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Connect
                            </a>
                          </Button>
                        </Td>
                      </Tr>
                    ))
                  }
                </Tbody>
                <TableCaption>
                  Thank you for your time, I hope to hear from you soon
                </TableCaption>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Connect;
