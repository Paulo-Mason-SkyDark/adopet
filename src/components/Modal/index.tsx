import {
  Button,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Modal,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function ModalAdopt() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const { isAuthenticated } = useContext(AuthContext);

  function showToastMessage() {
    toast({
      position: "bottom",
      title: "Processo de adoção",
      description: "Sua solicitação foi realizada com sucesso!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }
  return (
    <>
      <Button
        bg="brand.primaryButton"
        color="brand.white"
        onClick={() => {
          if (isAuthenticated) {
            onOpen();
            return;
          }
          toast({
            position: "bottom",
            title: "Atenção",
            description: "É necessário ter um conta logado no sistema!",
            status: "info",
            duration: 3000,
            isClosable: true,
          });
        }}
      >
        adotar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt="8">Você tem certeza que quer adotar esse pet? </ModalHeader>
          <ModalCloseButton />
          <ModalBody>Sua solicitação será enviada ao doador e logo ele entrarar em contato com você</ModalBody>

          <ModalFooter mt="8">
            <Button bg="brand.primaryButton" color="brand.white" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              onClick={() => {
                showToastMessage();
                onClose();
              }}
              bg="brand.secondary"
              color="brand.white"
            >
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
