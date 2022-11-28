import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import CardPet from "../components/CardPet";
import Header from "../components/Header";
import Section from "../components/Section";
import theme from "../styles/theme";

export default function Home(): JSX.Element {
  
  return (
    <>
      <Header />
      <Section
        asH1={true}
        title={"Você sabe do que um pet precisa?... DE VOCÊ!"}
        description={"Todo mundo precisa de um amigo, que tal adotar o seu hoje? Encontre o pet dos seus sonhos aqui."}
        image={"/assets/varios-animais-juntos.png"}
      />
      <Section
        reverse={true}
        title={"Ajude seu filhote a achar um lar"}
        description={
          "Todos os dias, ajudamos milhares de famílias a achar o seu tão amado animalzinho de estimação, faça parte disso também, se inscreva e doe um pet!"
        }
        image={"/assets/husky-com-oculos-escuro.png"}
        textButton={"Doe um Pet"}
      />
      <Flex justifyContent="space-between" alignItems="center" m="0 auto" height="480">
        <Box>
          <Image boxSize="150px" width="420px" height="auto" src="/assets/gato.png" alt="Gatinho" />
        </Box>
        <Flex flexDirection="column" justifyContent="space-between">
          <Heading as="h3" textAlign="center" color={theme.colors.brand.tertiaryText}>
            Um gato? Um Hamster? Você decide!
          </Heading>
          <Text textAlign="center" margin="18px 0" >
            Mais de dezenas de pets anunciados todos os dias, adote um!
          </Text>
          <Flex justifyContent="center">
            <Link fontSize="22px" fontWeight="700" color={theme.colors.brand.secondaryText}>
              Veja mais...
            </Link>
          </Flex>
        </Flex>
        <Box>
          <Image boxSize="150px" width="420px" height="auto" src="/assets/hamister.png" alt="Hamister" />
        </Box>
      </Flex>

      <Flex>
        <CardPet />
      </Flex>

      <Section
        id="about"
        asH1={true}
        title={"Sobre nós"}
        description={`A ADOPET hoje, tem como princípio a facilitação da adoção e doação de animais de estimação. Nossa meta é levar a felicidade para o tutor e para o pet de forma prática e rápida.
          Tendo em mente as dificuldades dos tutores em achar meios para doação e adoção de seus bichinhos, desenvolvemos este site na intenção de ajudar de forma totalmente segura e gratuita este processo.
        `}
        image={"/assets/cachorro-no-computador.png"}
      />
    </>
  );
}
