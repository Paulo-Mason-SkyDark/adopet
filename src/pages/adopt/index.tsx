import { Box, Flex, Image, ListItem, UnorderedList, Grid, Skeleton } from "@chakra-ui/react";
import CardPet from "../../components/CardPet";
import Header from "../../components/Header";
import { useGetPets } from "../../hook/pets/getPets";

export default function Adopt(): JSX.Element {
  const pets = useGetPets();

  return (
    <>
      <Header />
      <Box mt={"10"} margin={`auto ${136 / 16}rem `}>
        <Image src="assets/group-adorable-puppiess.png" alt="group" w="full" />
        <UnorderedList
          bg={"brand.primaryButton"}
          borderRadius="4"
          paddingX={"10"}
          paddingY={"2"}
          color="brand.white"
          fontSize="20"
          listStyleType={"none"}
        >
          <Flex gap={"10"} justifyContent="space-around" alignItems="center">
            <ListItem>
              Adicionados <br />
              recentementes
            </ListItem>
            <Box bg="brand.white" w={"0.5"} h="14" />
            <ListItem>Cachorro</ListItem>
            <Box bg="brand.white" w={"0.5"} h="14" />
            <ListItem>Gato</ListItem>
            <Box bg="brand.white" w={"0.5"} h="14" />
            <ListItem>Roedores</ListItem>
            <Box bg="brand.white" w={"0.5"} h="14" />
            <ListItem>Aves</ListItem>
            <Box bg="brand.white" w={"0.5"} h="14" />
            <ListItem>Répteis</ListItem>
            <Box bg="brand.white" w={"0.5"} h="14" />
            <ListItem>Mais...</ListItem>
          </Flex>
        </UnorderedList>
        <Skeleton isLoaded={pets.length > 0}>
          <Box width="100%" height="100%">
            <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={"10"} width="100%" height={"100%"}>
              {pets.map((pet) => {
                return <CardPet name={pet.name} age={pet.age} especie={pet.specie} key={pet.id} img={pet.img[0]} />;
              })}
            </Grid>
          </Box>
        </Skeleton>
      </Box>
    </>
  );
}
