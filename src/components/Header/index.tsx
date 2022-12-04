import { Image, Flex, Button, Stack, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Profile from "../profile";

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  const pages: {
    name: string;
    href: string;
  }[] = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Adotar",
      href: "/adopt",
    },
    {
      name: "Sobre Nós",
      href: "/#about",
    },
    {
      name: "Doar",
      href: "/donate",
    },
  ];

  function isActive(href: string) {
    return router.pathname === href;
  }

  return (
    <Flex
      bg={"transparent"}
      minH={"80px"}
      my={{ base: 4 }}
      mx={{ base: 32 }}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={"brand.secondary"}
      align={"center"}
      margin={`auto ${136 / 16}rem `}
    >
      <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
        <Image src="logo-adopet.svg" alt="logo-adopet" />
        <Flex display={{ base: "4", md: "flex" }} ml={144 / 16 + "rem"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {pages.map((page, index) => (
              <Link key={index} href={page.href} passHref>
                <NavLink
                  bg={isActive(page.href) ? "brand.primaryButton" : "none"}
                  fontWeight={isActive(page.href) ? "bold" : "normal"}
                  color={isActive(page.href) ? "#000" : "primaryText"}
                >
                  {page.name}
                </NavLink>
              </Link>
            ))}
          </HStack>
        </Flex>
      </Flex>
      {isAuthenticated ? <Profile /> : <ButtonsOfAccess />}
    </Flex>
  );
}
function ButtonsOfAccess() {
  return (
    <Stack flex={{ base: 2, md: 0 }} justify={"flex-end"} direction={"row"} spacing={8}>
      <Button as={"a"} fontSize={"medium"} fontWeight={"bold"} variant={"link"} href={"/login"}>
        Entrar
      </Button>
      <Button
        rounded={"full"}
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"medium"}
        fontWeight={"bold"}
        color={"white"}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/signup";
        }}
        bg={"brand.secondaryButton"}
        _hover={{
          bg: "pink.300",
        }}
      >
        Registrar
      </Button>
    </Stack>
  );
}
