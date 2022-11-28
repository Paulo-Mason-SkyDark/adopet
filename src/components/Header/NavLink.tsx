import { useColorModeValue, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  children: string;
}

export function NavLink({ children, ...rest }: NavLinkProps) {
  return (
    <Link
    px={4}
    py={1}
    {...rest}
    rounded={"full"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("red.100", "red.600"),
    }}
    
    >
        {children}
    </Link>
  );
}
