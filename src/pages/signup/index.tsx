import Header from "../../components/Header";
import { Button, Flex, FormControl, Input, Link, Stack, Image } from "@chakra-ui/react";

const SignUp = (): JSX.Element => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: "url(assets/pata-e-corações-pequenos.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "82vh",
        }}
      >
        <form>
          <Stack minH={"82vh"} direction={{ base: "column", md: "row-reverse" }} my={10}>
            <Flex py={24} flex={1} justify={"center"}>
              <Stack spacing={8} w={"full"} maxW={"md"}>
                <FormControl id="nome">
                  <Input rounded={"full"} bg="brand.white" type="text" placeholder="Nome" py="7" />
                </FormControl>
                <FormControl id="email">
                  <Input rounded={"full"} bg="brand.white" type="email" placeholder="Email" py="7" />
                </FormControl>
                <FormControl id="password">
                  <Input rounded={"full"} bg="brand.white" type="password" placeholder="Senha" py="7" />
                </FormControl>
                <Stack spacing={6}>
                  <Button
                  py="7"
                    rounded={"full"}
                    bg={"brand.secondaryButton"}
                    color="brand.white"
                    width="100%"
                    _hover={{
                      bg: "brand.primaryButton",
                    }}
                    fontSize="22px"
                    fontWeight="700"
                  >
                    Cadastra-se
                  </Button>
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={1}>
              <Image
                width={`${536 / 16}em`}
                height={`${481 / 16}em`}
                alt={"Login Image"}
                src="assets/lovely-pet-portrait-isolated.png"
              />
            </Flex>
          </Stack>
        </form>
      </div>
    </>
  );
};

export default SignUp;
