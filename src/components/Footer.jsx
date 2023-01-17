import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/dk.png";
const avatarSrc = btcSrc;

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontSize={"18"} fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"m"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>

          <Text
            fontSize={"12"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Created by Dikshant Kamboj©
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"40"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Dikshant Kamboj</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
