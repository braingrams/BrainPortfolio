import { HStack, Circle, Icon, Link } from "@chakra-ui/react";
import React from "react";

interface DashProps {
  icon: any;
  url: string;
  color: string;
  site: string;
  nop?: boolean;
}

export const SingleSocial = ({ icon, url, color, site, nop }: DashProps) => {
  return (
    <HStack
      boxShadow="md"
      p="1rem"
      borderRadius="10px"
      w={["full", "auto"]}
      justify={["center", "flex-start"]}
    >
      <Circle size="2rem" bg={color} color="white">
        <Icon as={icon} />
      </Circle>
      <Link isExternal href={url} color={color}>
        {nop ? "React out via" : "Connect via"} {site}
      </Link>
    </HStack>
  );
};
