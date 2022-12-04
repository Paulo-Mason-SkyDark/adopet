import { Flex, Box, Text, Image, Heading, Button, Container } from "@chakra-ui/react";
import router from "next/router";
import InputDefault from "../InputDefault";

interface ISection {
  id?: string;
  background?: string;
  reverse?: boolean;
  title: string;
  description: string;
  image: string;
  textButton?: string;
  asH1?: boolean;
  search?: boolean;
}

const Section = ({
  id,
  background,
  reverse,
  title,
  description,
  image,
  textButton,
  asH1,
  search,
}: ISection): JSX.Element => {
  return (
    <Box
      width="100%"
      margin="0 0 60px"
      bgImage={background && `url(${background})`}
      bgRepeat="no-repeat"
      backgroundPosition={reverse ? "right" : "left"}
    >
      <Container maxW={[null, "1500px", null, "1300px", null, "1800px"]}>
        <Flex
          id={id}
          justifyContent="space-between"
          alignItems="center"
          m="0 auto"
          height="480"
          flexDirection={reverse ? "row-reverse" : "row"}
        >
          <Box maxWidth="420">
            {search && (
              <Box mb="14">
                <InputDefault />
              </Box>
            )}

            {asH1 ? (
              <Heading as="h1" mb="4" color={"brand.secondary"}>
                {title}
              </Heading>
            ) : (
              <Heading as="h3" mb="4" textAlign="center" color={"brand.white"}>
                {title}
              </Heading>
            )}

            {reverse ? (
              <Text as="h1" fontSize={"20px"} fontWeight={"400"} textAlign="center" m="14px 0">
                {description}
              </Text>
            ) : (
              <Text fontSize={"18px"} fontWeight={"500"}>
                {description}
              </Text>
            )}

            {textButton && (
              <Button
                display={{ base: "none", md: "flex" }}
                fontSize={"sm"}
                fontWeight={600}
                borderRadius="50"
                m="0 auto"
                color={"brand.white"}
                bg={"brand.primaryButton"}
                _hover={{
                  bg: "pink.300",
                }}
                onClick={() => router.push("/donate")}
              >
                {textButton}
              </Button>
            )}
          </Box>
          <Box height="auto">
            <Image boxSize="150px" width="580px" height="auto" src={image} alt={description} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Section;
