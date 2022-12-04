import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Image,
  Text,
  Box,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore/lite";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ChangeEvent, useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { petProps } from "../../@types";
import Header from "../../components/Header";
import { ModalWithProgress } from "../../components/ModalWithProgress";
import { AuthContext } from "../../context/AuthContext";
import { db, storage } from "../../utils/firebase";

export default function Donate(): JSX.Element {
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const { isAuthenticated } = useContext(AuthContext);
  const [percent, setPercent] = useState<number>(0);
  const [nameOfPet, setNameOfPet] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    if (!images) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(images);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [images]);

  function handleInputFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) {
      setImages(undefined);
      return;
    }

    setImages(e.target.files[0]);
  }

  function showsTheUserThatTheyNeedToAuthenticate() {
    if (!isAuthenticated) {
      toast({
        position: "bottom",
        title: "Atenção",
        description: "É necessário ter um conta logado no sistema!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  }

  async function dataForCreatePet(data: any) {
    showsTheUserThatTheyNeedToAuthenticate();
    try {
      if (images === null || images === undefined) {
        toast({
          position: "bottom",
          title: "Atenção",
          description: "Selecione ao menos uma imagem!",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
        throw "nenhuma imagem foi selecionada";
      }

      const dataPet: petProps = data;
      setNameOfPet(dataPet.name);
      const namePathAndNameImage = `/imagemPets/${dataPet.name}+${new Date().getTime()}${images.name}`;
      const storageRef = ref(storage, namePathAndNameImage);
      const uploadTask = uploadBytesResumable(storageRef, images);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          onOpen();
          const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            try {
              const docRef = addDoc(collection(db, "pet"), {
                name: dataPet.name,
                age: dataPet.age,
                breed: dataPet.breed,
                img: [url],
                specie: dataPet.specie,
                donated: false,
              });
            } catch (error) {
              console.log("file: index.tsx:106 | getDownloadURL | error", error);
            }
          });
        }
      );
    } catch (e) {
      console.log("file: index.tsx:40 | dataForCreatePet | e", e);
    }
  }

  useEffect(()=>{
    if(percent === 100){
      toast({
        position: "bottom",
        title: "Obrigado",
        description: `Ajudaremos o amigo ${nameOfPet} a encontrar um novo lar`,
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  },[nameOfPet, percent, toast])

  return (
    <div>
      <Header />
      <Box
        width="100%"
        mt="1px"
        padding="0 0 60px"
        bgImage={"url(assets/pata-e-corações-pequenos.png)"}
        bgRepeat="no-repeat"
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <form onSubmit={handleSubmit(dataForCreatePet)}>
          <Stack
            margin={`auto ${136 / 16}rem `}
            direction={{ base: "column", md: "row" }}
            display="flex"
            alignItems="center"
          >
            <Flex
              flex={1}
              bg="brand.white"
              h="450"
              rounded="2xl"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              position="relative"
            >
              <Text fontWeight="bold">Adicionar foto</Text>
              <FormLabel htmlFor="img" display="flex" alignItems="center" justifyContent="center">
                {images && <Image src={preview} h="full" position="absolute" rounded="2xl" alt="preview" />}
                <Image src="image-plus.svg" alt="upload" />
              </FormLabel>
              <Input type="file" id="img" display="none" {...register("img")} onChange={handleInputFileChange} />
            </Flex>

            <Flex p={8} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={4} w={"full"} maxW={"md"}>
                <FormControl id="name">
                  <FormLabel fontWeight="bold">Nome do pet</FormLabel>
                  <Input
                    required
                    type="text"
                    bg="brand.white"
                    rounded={"full"}
                    py="6"
                    id="name"
                    {...register("name")}
                  />
                </FormControl>

                <FormControl id="species">
                  <FormLabel fontWeight="bold">Espécie</FormLabel>
                  <Input
                    required
                    type="text"
                    bg="brand.white"
                    rounded={"full"}
                    py="6"
                    id="specie"
                    {...register("specie")}
                  />
                </FormControl>

                <FormControl id="age">
                  <FormLabel fontWeight="bold">Idade</FormLabel>
                  <Input
                    required
                    type="number"
                    bg="brand.white"
                    rounded={"full"}
                    py="6"
                    id="age"
                    {...register("age")}
                  />
                </FormControl>

                <FormControl id="breed">
                  <FormLabel fontWeight="bold">Raça</FormLabel>
                  <Input
                    required
                    type="text"
                    bg="brand.white"
                    rounded={"full"}
                    py="6"
                    id="breed"
                    {...register("breed")}
                  />
                </FormControl>
                <ModalWithProgress isOpen={isOpen} onClose={onClose} progress={percent} />
                <Stack>
                  <Button
                    type="submit"
                    mt="8"
                    bg={"pink.400"}
                    variant={"solid"}
                    rounded={"full"}
                    color="brand.white"
                    py="6"
                    _hover={{
                      bg: "pink.500",
                    }}
                  >
                    Salvar informações
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Stack>
        </form>
      </Box>
    </div>
  );
}
