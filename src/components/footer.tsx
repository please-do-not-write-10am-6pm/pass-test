import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box background={"black"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Text fontSize={"1.2rem"} fontWeight={"700"} color={"white"}>
          @ 2022 TALLYSIGHT INC. RESERVED
        </Text>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "center" }}
          align={{ base: "center", md: "center" }}
        >
          <Text color={"white"}>
            If you or someone you know has a gambling problem and wants help,
            call 1800 Gambler. You must be 21 years or older to place a bet
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
