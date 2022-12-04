import Header from "../../components/Header";
import { Button, Flex, FormControl, Input, Link, Stack, Image, Box, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { signIn } from "../../controllers/login";

const Login = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const toast = useToast();
  const [error, setError] = useState<Array<string>>();

  function messageError(error: Array<string>) {
    setError(error);
  }

  function showToastMessage() {
    if (error && error.length > 0) {
      let messageError = error[0] === "auth/wrong-password" ? "Verifique seus dados estão corretos" : error[0];
      toast({
        position: "bottom",
        title: "Cadastro",
        description: messageError,
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        position: "bottom",
        title: "Cadastro",
        description: "Login realizado com sucesso",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  const handleLogin = (data: any) => {
    if (data !== undefined && data !== null) {
      signIn(data.email, data.password, messageError);
      showToastMessage();
    }
  };

  return (
    <>
      <Header />
      <Box
        style={{
          backgroundImage: "url(assets/pata-e-corações-pequenos.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "81vh",
          marginTop: "3rem",
        }}
      >
        <form onSubmit={handleSubmit(handleLogin)} name="registration_form">
          <Stack
            minH={"81vh"}
            direction={{ base: "column", md: "row-reverse" }}
            my={10}
            margin={`auto ${136 / 16}rem `}
          >
            <Flex py={24} flex={1} justify={"center"}>
              <Stack spacing={8} w={"full"} maxW={"md"}>
                <FormControl id="email">
                  <Input
                    id="email"
                    {...register("email")}
                    isRequired
                    rounded={"full"}
                    bg="brand.white"
                    type="email"
                    placeholder="Email"
                    py="7"
                  />
                </FormControl>
                <FormControl id="password">
                  <Input
                    id="password"
                    {...register("password")}
                    isRequired
                    rounded={"full"}
                    bg="brand.white"
                    type="password"
                    placeholder="Senha"
                    py="7"
                  />
                </FormControl>
                <Stack spacing={6}>
                  <Stack direction={{ base: "column" }} align={"center"} justify={"space-between"}>
                    <Button
                      type="submit"
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
                marginTop={"1.5rem"}
                width={`${536 / 16}em`}
                height={`${481 / 16}em`}
                alt={"Login Image"}
                src="assets/lovely-pet-portrait-isolated.png"
              />
            </Flex>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default Login;
