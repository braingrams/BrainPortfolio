import {
  Box,
  Heading,
  VStack,
  Text,
  Grid,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiSass,
  DiJqueryLogo,
} from "react-icons/di";
import { MdAnimation } from "react-icons/md";
import {
  SiChakraui,
  SiChartdotjs,
  SiBootstrap,
  SiMaterialui,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind, TbBrandFramer } from "react-icons/tb";

import SkillsCard from "lib/components/bits/SkillsCard";

export default function Skillset() {
  return (
    <HStack
      align="center"
      gap={8}
      w="90%"
      h="full"
      mx="auto"
      justify="space-between"
      flexDir={["column", "row"]}
      py={["4rem", "0"]}
    >
      <VStack w={["full", "40%"]} align="flex-start" spacing={5}>
        <Heading fontSize="3xl" w="fit-content">
          My Skill-Set over the years
        </Heading>
        <VStack spacing={6}>
          <Text fontSize=".9rem">
            My journey of software development started few years ago without
            escaping the beginner class of certain skill (programming languages)
          </Text>
          <Text fontSize=".9rem">
            At first, picked up HTML, then CSS, then a lot of libraries to make
            work faster and improve user experience also meeting with time
            proposed
          </Text>
          <Text fontSize=".9rem" noOfLines={4}>
            Javascript came into the picture and became the most popular
            language with multiple features and a huge user base and there comes
            React JS, Next JS and other Javascript libraries and frameworks
            developed by developers to make development easy and super fast. lol
          </Text>
        </VStack>
      </VStack>
      <Box w={["full", "40%"]}>
        <Grid templateColumns="repeat(4, 1fr)" rowGap={8}>
          <SkillsCard icon={<Icon as={AiFillHtml5} />} />
          <SkillsCard icon={<Icon as={DiCss3} />} />
          <SkillsCard icon={<Icon as={SiBootstrap} />} />
          <SkillsCard icon={<Icon as={SiMaterialui} />} />
          <SkillsCard icon={<Icon as={DiJavascript1} />} />
          <SkillsCard icon={<Icon as={DiSass} />} />
          <SkillsCard icon={<Icon as={DiReact} />} />
          <SkillsCard icon={<Icon as={TbBrandTailwind} />} />
          <SkillsCard icon={<Icon as={SiChakraui} />} />
          <SkillsCard icon={<Icon as={TbBrandNextjs} />} />
          <SkillsCard icon={<Icon as={AiFillGithub} />} />
          <SkillsCard icon={<Icon as={DiJqueryLogo} />} />
          <SkillsCard icon={<Icon as={TbBrandFramer} />} />
          <SkillsCard icon={<Icon as={MdAnimation} />} />
          <SkillsCard icon={<Icon as={SiChartdotjs} />} />
        </Grid>
      </Box>
    </HStack>
  );
}
