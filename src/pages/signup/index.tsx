import Header from "../../components/Header";
import { Button, Flex, FormControl, Input, Stack, Image, useToast } from "@chakra-ui/react";
import { signUp } from "../../controllers/signup";
import { useForm } from "react-hook-form";
import { useState } from "react";

const SignUp = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const toast = useToast();
  const [error, setError] = useState<Array<string>>();

  function messageError(error: Array<string>) {
    setError(error);
  }

  const validatePassword = (password: string) => {
    let isValid = false;
    if (password !== "" && password.length >= 8) {
      isValid = true;
    } else {
      toast({
        position: "bottom",
        title: "Cadastro",
        description: "A senha precisa conter no minimo 8 caracteres",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
    return isValid;
  };

  function showToastMessage() {
    if (error && error.length > 0) {
      let messageError = error[0] === "auth/email-already-in-use" ? "Este E-mail já está sendo utilizado" : error[0];
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
        description: "Cadastro realizado com sucesso",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  const handleRegister = (data: any) => {
    if (validatePassword(data.password)) {
      signUp(data.email, data.password, messageError);
      showToastMessage();
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: "url(assets/pata-e-corações-pequenos.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "81vh",
          marginTop: "3rem",
        }}
      >
        <form onSubmit={handleSubmit(handleRegister)} name="registration_form">
          <Stack
            minH={"82vh"}
            direction={{ base: "column", md: "row-reverse" }}
            my={10}
            margin={`auto ${136 / 16}rem `}
          >
            <Flex py={24} flex={1} justify={"center"}>
              <Stack spacing={8} w={"full"} maxW={"md"}>
                <FormControl id="nome">
                  <Input
                    id="name"
                    {...register("name")}
                    isRequired
                    rounded={"full"}
                    bg="brand.white"
                    type="text"
                    placeholder="Nome"
                    py="7"
                  />
                </FormControl>
                <FormControl id="emxail">
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
                    Cadastra-se
                  </Button>
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
      </div>
    </>
  );
};

export default SignUp;
