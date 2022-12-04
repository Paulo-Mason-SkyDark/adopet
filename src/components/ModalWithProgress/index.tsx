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
  Progress,
} from "@chakra-ui/react";

interface ModalWithProgressProps {
  progress: number;
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
}

export function ModalWithProgress({ isOpen, onOpen, onClose, progress }: ModalWithProgressProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt="8">Criando um novo amigo </ModalHeader>
          <ModalCloseButton />
          <ModalBody>O progresso de enviou começou</ModalBody>
          <Progress hasStripe value={progress} />
          <ModalFooter mt="8">
            <Button
              onClick={() => {
                onClose();
              }}
              bg="brand.secondary"
              color="brand.white"
            >
              Sair
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
