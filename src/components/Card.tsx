import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { State } from "../types";

interface props {
  state: State;
  key: number;
}

export default function Card(props: props) {
  const { state } = props;
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "900px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1}>
          <Image objectFit="contain" boxSize="100%" src={state.img} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} textAlign="left" fontFamily={"body"}>
            {state.name}
          </Heading>
          <Text
            textAlign={"left"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {state.bonus}
          </Text>
          <Text
            textAlign={"left"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {state.insurance}
          </Text>
        </Stack>
        <Stack
          width={"25%"}
          mt={"2rem"}
          direction={"row"}
          padding={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            flex={1}
            fontSize={"2xl"}
            // rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            py={8}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            {state.buttonName}
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}
