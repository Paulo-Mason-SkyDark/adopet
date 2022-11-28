import Header from "../../components/Header";
import { te, db } from "../../utils/firebase";
import { useEffect } from "react";
import { Button, Flex, FormControl, Input, Link, Stack, Image } from "@chakra-ui/react";

const Login = (): JSX.Element => {
  useEffect(() => {
    te(db);
  }, []);

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
        <Stack minH={"82vh"} direction={{ base: "column", md: "row-reverse" }} my={10}>
          <Flex py={24} flex={1} justify={"center"}>
            <Stack spacing={8} w={"full"} maxW={"md"}>
              <FormControl id="email">
                <Input rounded={"full"} bg="brand.white" type="email" placeholder="Email" py="7" />
              </FormControl>
              <FormControl id="password">
                <Input rounded={"full"} bg="brand.white" type="password" placeholder="Senha" py="7" />
              </FormControl>
              <Stack spacing={6}>
                <Stack direction={{ base: "column" }} align={"center"} justify={"space-between"}>
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
                    Entrar
                  </Button>
                  <Link color={"brand.secondary"} fontSize="22px" fontWeight="700">
                    Esqueci minha senha
                  </Link>
                </Stack>
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
      </div>
    </>
  );
};

export default Login;
