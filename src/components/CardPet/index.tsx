import { Box, Center, useColorModeValue, Heading, Text, Stack, Image, Flex, Button } from "@chakra-ui/react";
import { ModalAdopt } from "../Modal";

type CardPetProps = {
  name?: string;
  age?: number;
  especie?: string;
  img?: string;
};

const IMAGE = "https://i0.wp.com/reporternordeste.com.br/wp-content/uploads/2012/05/gato-triste.jpg";

export default function CardPet({ name, age, especie, img }: CardPetProps) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            background: "brand.primaryButton",
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image rounded={"lg"} height={230} width={282} objectFit={"cover"} src={`${img ? img : IMAGE}`} alt="img" />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={600}>
            {name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Flex justifyContent="center" gap="6" alignItems="center">
              <Text fontWeight="700">{age} anos</Text>
              <Box bg="brand.secondary" w={"0.5"} h="5" />
              <Text fontWeight="700">{especie ? especie : "SRD"}</Text>
            </Flex>
          </Stack>

          <ModalAdopt />
        </Stack>
      </Box>
    </Center>
  );
}
