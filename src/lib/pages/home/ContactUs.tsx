import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Image,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

import {
  ContactInput,
  ContactTextArea,
} from "lib/components/bits/ContactInput";

function ContactUs() {
  const [loading, setLoading] = useState<boolean>(false);
  const [successMesages, setSuccessMessage] = useState<boolean>(false);
  const router = useRouter();
  const form = useRef<any>();
  const { colorMode } = useColorMode();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_i9nnz0w",
        "template_kljdmey",
        form.current,
        "OcKaWyrr-i5DX0B2c"
      )
      .then(
        (result: any) => {
          setLoading(false);
          setSuccessMessage(true);
        },
        (error: any) => {
          setSuccessMessage(false);
        }
      );
  };
  return (
    <Box
      w="full"
      minH="500px"
      bgColor={colorMode === "light" ? "brand.100" : "gray.500"}
      mt="5rem"
      py="2rem"
      id="contact"
    >
      <Heading textAlign="center" py={["1rem", "3rem"]} textDecor="underline">
        Need to connect?
      </Heading>
      <HStack w={["90%", "80%"]} mx="auto" flexDirection={["column", "row"]}>
        <Flex
          w="full"
          h={["auto", "500px"]}
          alignItems={["center", "flex-start"]}
          flexDirection="column"
          onClick={
            (() =>
              window.open("/connect", "_blank", "noopener,noreferrer")) as any
          }
        >
          <Image src="/assets/barcode.png" h={["300px", "450px"]} w="auto" />
          <Text textDecor="underline" textAlign="center">
            Unable to scan code? Click on barcode to view embeded url.
          </Text>
        </Flex>
        <Box w="full">
          {successMesages && <Text>Message sent! Check your email</Text>}
          <form ref={form} onSubmit={sendEmail}>
            <VStack spacing="1rem" align="end">
              <ContactInput
                label="Full Name"
                name="fullName"
                defaultValue=""
                placeholder="Pade Omotosho"
              />
              <ContactInput
                label="Email"
                name="email"
                defaultValue=""
                type="email"
                placeholder="padeomotoso@gmail.com"
              />
              <ContactInput
                label="Phone number"
                name="phoneNumber"
                defaultValue=""
                placeholder="Type in a valid phone number"
              />
              <ContactTextArea
                label="Message"
                name="message"
                placeholder="Type your message here"
              />

              <Button
                isLoading={loading}
                bgColor={colorMode === "light" ? "white" : "black"}
                w={["full", "auto"]}
              >
                {" "}
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </HStack>
    </Box>
  );
}

export default ContactUs;
