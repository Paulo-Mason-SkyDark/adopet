import { Image, Box, Flex, Button, Stack, HStack, Icon, background } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavLink } from "./NavLink";

export default function Header() {
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

  const pagesAccount: {
    name: string;
    href: string;
  }[] = [
    {
      name: "Entrar",
      href: "/login",
    },
    {
      name: "Registrar",
      href: "/signup",
    },
  ];

  const router = useRouter();

  function isActive(href: string) {
    return router.pathname === href;
  }

  function goToPage(href: string) {
    <Link key={href} href={href} passHref></Link>;
  }

  return (
    <Box>
      <Flex
        bg={"transparent"}
        minH={"80px"}
        my={{ base: 4 }}
        mx={{ base: 32 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"brand.secondary"}
        align={"center"}
        margin="0 auto"
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
      </Flex>
    </Box>
  );
}
