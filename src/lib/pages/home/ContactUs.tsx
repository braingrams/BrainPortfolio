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

  // const sendEmail = (e: any) => {
  //   console.log("I have been clicked");

  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .sendForm(
  //       "service_i9nnz0w",
  //       "template_kljdmey",
  //       form.current,
  //       "OcKaWyrr-i5DX0B2c"
  //     )
  //     .then(
  //       (result: any) => {
  //         setLoading(false);
  //         setSuccessMessage(true);
  //       },
  //       (error: any) => {
  //         setLoading(false);
  //         setSuccessMessage(false);
  //       }
  //     );
  // };

  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/bae82b20-440b-11ed-9b17-6fdf7f94f506";
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 100);
  };
  return (
    <>
      <Box ml="5.4rem" mt="5rem">
        <svg className="w-full" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </Box>
      <Box
        w="full"
        minH="500px"
        bgColor={colorMode === "light" ? "brand.100" : "gray.500"}
        py="3rem"
        id="contact"
        borderRadius="6rem 0 6rem 0"
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
            <Image src="/assets/barcodeb.png" h={["300px", "450px"]} w="auto" />
            <Text textDecor="underline" textAlign="center">
              Unable to scan code? Click on barcode to view embeded url.
            </Text>
          </Flex>
          <Box w="full">
            {submitted && <Text>Message sent! Check your email</Text>}
            <form
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
              target="_blank"
            >
              <VStack spacing="1rem" align="end">
                <ContactInput
                  label="Full Name"
                  name="fullName"
                  defaultValue=""
                  placeholder="Pade Omotosho"
                  required
                />
                <ContactInput
                  label="Email"
                  name="email"
                  defaultValue=""
                  type="email"
                  placeholder="padeomotoso@gmail.com"
                  required
                />
                <ContactInput
                  label="Phone number"
                  name="phoneNumber"
                  defaultValue=""
                  placeholder="Type in a valid phone number"
                  required
                />
                <ContactTextArea
                  label="Message"
                  name="message"
                  placeholder="Type your message here"
                  required
                />

                <Button
                  isLoading={loading}
                  bgColor={colorMode === "light" ? "white" : "black"}
                  w={["full", "auto"]}
                  type="submit"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </HStack>
      </Box>
      <Box mr="5.4rem">
        <svg className="w-full" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </Box>
    </>
  );
}

export default ContactUs;
