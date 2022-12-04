import { Box, Flex } from "@chakra-ui/react";
import { petProps } from "../../@types";
import CardPet from "../CardPet";

interface IJustArrived {
  reverse?: boolean;
  pets: Array<petProps>;
}

const JustArrived = ({ reverse, pets }: IJustArrived): JSX.Element => {
  return (
    <Box
      width="100%"
      margin="0"
      bgImage={reverse ? "url('/assets/barra-rosa-com-patas-right.png')" : "url('/assets/barra-rosa-com-patas.png')"}
      bgRepeat="no-repeat"
      backgroundPosition={reverse ? "right" : "left"}
    >
      <Flex alignItems="center" justifyContent="center" gap="10">
        {pets.map((pet) => {
          return <CardPet name={pet.name} age={pet.age} especie={pet.specie} key={pet.id} img={pet.img[0]} />;
        })}
      </Flex>
    </Box>
  );
};

export default JustArrived;
