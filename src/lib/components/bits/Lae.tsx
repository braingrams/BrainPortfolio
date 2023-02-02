import {
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { SiGmail } from "react-icons/si";

import { SingleSocial } from "./SingleSocial";

function Lae() {
  return (
    <Box w="full" minH="100vh" bgColor="black">
      <Flex
        w="75%"
        mx="auto"
        py="1.5rem"
        bgColor="white"
        px="8rem"
        minH="100vh"
      >
        <Box w="full">
          <Flex
            align="center"
            w="full"
            h="15rem"
            bgColor="black"
            borderRadius="30px"
            p="2rem"
            justify="center"
          >
            <Box h="8rem">
              <Image src="/assets/lae.png" w="auto" h="full" />
            </Box>
          </Flex>
          <Box my="2rem">
            <Heading>Store Description</Heading>
            <Text>
              Love and everything is an e-commerce therapy business that
              facilitates healing process by providing all the tools necessary
              and needed with its integration of therapy, e-commerce and events
              planning .
            </Text>
          </Box>
          <Box>
            <Text fontSize="1.1rem" mb=".5rem">
              Social Media Address
            </Text>
            <HStack gap="1rem">
              <SingleSocial
                site="Facebook"
                url="http://facebook.com/loveandeverything"
                icon={RiFacebookFill}
                color="#3b5999"
              />
              <SingleSocial
                site="Instagram"
                url="http://instagram.com/lovendeverything"
                icon={RiInstagramFill}
                color="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
              />
              <SingleSocial
                site="Youtube"
                url="http://youtube.com/@loveandeverything427"
                icon={RiYoutubeFill}
                color="red"
              />
            </HStack>
          </Box>
          <Box>
            <Text fontSize="1.1rem" m="1.5rem 0 .5rem">
              For More Information
            </Text>
            <HStack gap="1rem">
              <SingleSocial
                site="Whatsapp"
                url="https://wa.me/+2347086072193"
                icon={RiWhatsappFill}
                color="#009b35"
                nop
              />
              <SingleSocial
                site="Phone"
                url="tel:07054585881"
                icon={RiPhoneFill}
                color="gray.400"
                nop
              />
              <SingleSocial
                site="Gmail"
                url="mailto:Loveandevery10@gmail.com"
                icon={SiGmail}
                color="#4086f4"
                nop
              />
            </HStack>
          </Box>

          <Text textAlign="center" fontSize=".8rem" mt="1.5rem">
            Thank you for choosing love and everything{" "}
            <span style={{ color: "gray" }}>&copy; Blushly limited</span>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Lae;
