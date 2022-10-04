import {
  Box,
  Button,
  Text,
  useToast,
  VStack,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { useState, useRef } from "react";

import { ContactInput, ContactTextArea } from "../bits/ContactInput";

const HireModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: any }) => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<any>();

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
          router.push("/thanks");
        },
        (error: any) => {}
      );
  };
  return (
    <Modal
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent
        py={10}
        borderRadius="0"
        w={["88%", "50%"]}
        overflow="hidden"
        maxH="100vh"
        mt="0"
        mb="0"
      >
        <ModalHeader>
          <Text
            color={colorMode === "light" ? "black" : "white"}
            fontSize="1.1rem"
            textAlign="left"
            fontWeight="semibold"
            px={5}
          >
            You're one step to get the best frontend developer.
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box maxH="80vh" overflowY="auto" px={5}>
            <Box w="100%">
              <form ref={form} onSubmit={sendEmail}>
                <VStack spacing="1rem" align="end">
                  <ContactInput
                    label="Full Name"
                    name="fullName"
                    defaultValue=""
                    placeholder="Pade Omotosho"
                    isModal
                  />
                  <ContactInput
                    label="Email"
                    name="email"
                    defaultValue=""
                    type="email"
                    placeholder="padeomotoso@gmail.com"
                    isModal
                  />
                  <ContactInput
                    label="Phone number"
                    name="phoneNumber"
                    defaultValue=""
                    placeholder="Type in a valid phone number"
                    isModal
                  />
                  <ContactTextArea
                    label="Message"
                    name="message"
                    placeholder="Type your message here"
                    isModal
                  />

                  <HStack
                    spacing="1rem"
                    w="100%"
                    justify="space-between"
                    align="center"
                    mt="2rem !important"
                  >
                    <Button
                      variant="outline"
                      onClick={onClose}
                      borderRadius="35px"
                      w="full"
                      h="3rem"
                      border="2px solid"
                      display={["none", "inline=flex"]}
                      borderColor={colorMode === "light" ? "black" : "white"}
                    >
                      Close
                    </Button>

                    <Button
                      isLoading={loading}
                      w="full"
                      borderRadius="35px"
                      h="3rem"
                      color={colorMode === "dark" ? "black" : "white"}
                      bgColor={colorMode === "light" ? "black" : "white"}
                    >
                      {" "}
                      Send Message
                    </Button>
                  </HStack>
                </VStack>
              </form>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HireModal;
