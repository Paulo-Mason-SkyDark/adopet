import { Avatar, Box, Button, Flex, Icon, Text, useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import { logout } from "../../controllers/logout";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const toast = useToast();
  return (
    <>
      <Flex align={"center"}>
        <Avatar size="sm" name={user.email} src={user.photoURL ?? ""}></Avatar>
        <Box ml="8px" textAlign="left">
          {/* <Text fontSize={"16px"} color="gray.900" fontWeight={"bold"}>
            {user.email}
          </Text>
          <Text fontSize={"15px"} color="gray.250">
            {user.uid}
          </Text> */}
          <Button
            colorScheme="teal"
            variant="link"
            onClick={() =>
              logout(() =>
                toast({
                  position: "bottom",
                  title: "Logout",
                  description: "Você foi desconectado com sucesso",
                  status: "warning",
                  duration: 3000,
                  isClosable: true,
                })
              )
            }
            _hover={{ textDecoration: "none", color: "#FF4E63" }}
          >
            <Icon as={MdLogout} fontSize="17" />
            Sair
          </Button>
        </Box>
      </Flex>
    </>
  );
}
