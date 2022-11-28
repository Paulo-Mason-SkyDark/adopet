import { Box, Flex, Image, ListItem, UnorderedList, Grid } from "@chakra-ui/react";
import CardPet from "../../components/CardPet";
import Header from "../../components/Header";

export default function Adopt(): JSX.Element {
  return (
    <>
      <Header />
      <Box mt={'10'} >
        <Image src="group-portrait-adorable-puppies.svg" alt="group" w="full" />
        <UnorderedList bg={'brand.primaryButton'} borderRadius="4" paddingX={'10'} paddingY={'2'} color="brand.white" fontSize="20" listStyleType={'none'}>
          <Flex gap={'10'} justifyContent="space-around" alignItems="center">
            <ListItem>Adicionados <br />recentementes</ListItem>
            <Box bg="brand.white" w={'0.5'} h="14" />
            <ListItem>Cachorro</ListItem>
            <Box bg="brand.white" w={'0.5'} h="14" />
            <ListItem>Gato</ListItem>
            <Box bg="brand.white" w={'0.5'} h="14" />
            <ListItem>Roedores</ListItem>
            <Box bg="brand.white" w={'0.5'} h="14" />
            <ListItem>Aves</ListItem>
            <Box bg="brand.white" w={'0.5'} h="14" />
            <ListItem>Répteis</ListItem>
            <Box bg="brand.white" w={'0.5'} h="14" />
            <ListItem>Mais...</ListItem>
          </Flex>
        </UnorderedList>

        <Grid templateColumns='repeat(4, 1fr)' gap={6} mt={'10'}>
          <CardPet />
          <CardPet />
          <CardPet />
          <CardPet />

          <CardPet />
          <CardPet />
          <CardPet />
          <CardPet />
        </Grid>
      </Box>
    </>
  );
}