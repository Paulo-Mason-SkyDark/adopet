import { Container, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import JustArrived from "../components/JustArrived";
import Section from "../components/Section";
import { useGetPets } from "../hook/pets/getPets";

export default function Home(): JSX.Element {
  const pets = useGetPets();

  return (
    <>
      <Header />
      <Section
        search={true}
        asH1={true}
        title={"Você sabe do que um pet precisa?... DE VOCÊ!"}
        description={"Todo mundo precisa de um amigo, que tal adotar o seu hoje? Encontre o pet dos seus sonhos aqui."}
        image={"/assets/varios-animais-juntos.png"}
      />
      <Section
        reverse={true}
        background={"/assets/pata-grande-com-pata-pequena.png"}
        title={"Ajude seu filhote a achar um lar"}
        description={
          "Todos os dias, ajudamos milhares de famílias a achar o seu tão amado animalzinho de estimação, faça parte disso também, se inscreva e doe um pet!"
        }
        image={"/assets/husky-com-oculos-escuro.png"}
        textButton={"Doe um Pet"}
      />
      <Container maxW="1100px">
        <Flex justifyContent="space-between" alignItems="center" m="0 auto" height="480">
          <Image width="480px" height="auto" src="/assets/gato.png" alt="Gatinho" />
          <Flex flexDirection="column" justifyContent="space-between">
            <Heading as="h3" fontSize="22px" textAlign="center" color={"brand.tertiaryText"}>
              Um gato? Um Hamster? Você decide!
            </Heading>
            <Text textAlign="center" margin="18px 0">
              Mais de dezenas de pets anunciados todos os dias, adote um!
            </Text>
            <Flex justifyContent="center">
              <Link fontSize="22px" fontWeight="700" color={"brand.secondary"}>
                Veja mais...
              </Link>
            </Flex>
          </Flex>
          <Image width="480px" height="auto" src="/assets/hamister.png" alt="Hamister" />
        </Flex>
      </Container>

      <Container maxW="1100px">
        <Heading as="h3" color={"brand.tertiaryText"}>
          Recém chegados
        </Heading>
      </Container>

      <JustArrived pets={pets} />
      <JustArrived reverse={true} pets={pets} />

      <Section
        id="about"
        background={"/assets/pata-gigante.png"}
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
