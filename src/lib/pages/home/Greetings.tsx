import { Box } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

function Greetings() {
  return (
    <Box
      w="80%"
      mx="auto"
      textAlign="center"
      my={["1.5rem", "2.5rem"]}
      fontFamily="'Norican', cursive"
      fontSize={["1rem", "1.8rem"]}
      // fontWeight="600"
    >
      <Typewriter
        options={{
          strings: [
            "Thank you for reading through my portfolio!",
            "I hope you liked it! ♥",
            "Please feel free to contact me for any gig available!",
          ],
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 10,
        }}
      />
    </Box>
  );
}

export default Greetings;
