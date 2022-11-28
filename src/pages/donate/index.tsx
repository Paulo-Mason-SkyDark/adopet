import { Button, Flex, FormControl, FormLabel, Input, Stack, Image, Text } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Header from "../../components/Header";

export default function Donate(): JSX.Element {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [images, setImages] = useState<File>();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!images) {
      setPreview("")
      return
    }

    const objectUrl = URL.createObjectURL(images);
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [images])

  function handleInputFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) {
      setImages(undefined)
      return
    }

    setImages(e.target.files[0])
  }
  
  return (
    <>
      <Header />
      <form action="">
        <Stack mt="10" direction={{ base: 'column', md: 'row' }} display="flex" alignItems="center" style={{
          height: '82vh', 
          backgroundImage: 'url(assets/pata-e-corações-pequenos.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
           }}>

          <Flex flex={1} bg="brand.white" h="450" rounded="2xl" alignItems="center" justifyContent="center" flexDirection="column" position="relative">
            <Text fontWeight="bold">Adicionar foto</Text>
            <FormLabel htmlFor="image" display="flex" alignItems="center" justifyContent="center" >

              {images && <Image src={preview} h="full" position="absolute" rounded="2xl"/>}

              <Image src="image-plus.svg" alt="upload" />
            </FormLabel>
            <Input type="file" id="image" display="none" onChange={handleInputFileChange} />
          </Flex>

          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={4} w={'full'} maxW={'md'}>
              <FormControl id="name">
                <FormLabel fontWeight="bold">Nome do pet</FormLabel>
                <Input type="text" bg="brand.white" rounded={'full'} py="6" />
              </FormControl>

              <FormControl id="species">
                <FormLabel fontWeight="bold">Espécie</FormLabel>
                <Input type="text" bg="brand.white" rounded={'full'} py="6" />
              </FormControl>

              <FormControl id="age">
                <FormLabel fontWeight="bold">Idade</FormLabel>
                <Input type="text" bg="brand.white" rounded={'full'} py="6" />
              </FormControl>

              <FormControl id="breed">
                <FormLabel fontWeight="bold">Raça</FormLabel>
                <Input type="text" bg="brand.white" rounded={'full'} py="6" />
              </FormControl>
              <Stack >
                <Button mt="8" bg={'brand.secondaryButton'} variant={'solid'} rounded={'full'} color="brand.white" py="6">
                  Salvar informações
                </Button>
              </Stack>
            </Stack>
          </Flex>

        </Stack>
      </form>
    </>
  );
}
