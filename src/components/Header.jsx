import { Button, HStack, Avatar, Box, Stack, Text, VStack} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import btcSrc from "../assets/dk.png";
const avatarSrc = btcSrc;

const Header = () => {
  return (
    
    <HStack p={"4"} mb={"0.5"} shadow={"base"} bgColor={"blackAlpha.900"}>

      <Box
      // bgColor={"blackAlpha.900"}
      // color={"whiteAlpha.700"}
      // minH={"48"}
      // px={"16"}
      // py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"} marginRight={"5"}>
        <VStack w={"full"} alignItems={["center", "flex-center"]}>
          <Avatar boxSize={"10vh"} mt={["4", "0"]} src={avatarSrc} />
        </VStack>
      </Stack>
    </Box>



      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>

    </HStack>

    
    
  );
};






export default Header;
