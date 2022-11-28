import { Flex, Box, Text, Image, Heading, Button } from "@chakra-ui/react";
import theme from "../../styles/theme";

interface ISection {
  id?: string;
  reverse?: boolean;
  title: string;
  description: string;
  image: string;
  textButton?: string;
  asH1?: boolean;
}

const Section = ({ id, reverse, title, description, image, textButton, asH1 }: ISection): JSX.Element => {
  return (
    <Flex
      id={id}
      justifyContent="space-between"
      alignItems="center"
      m="0 auto"
      height="480"
      flexDirection={reverse ? "row-reverse" : "row"}
    >
      <Box maxWidth="420">
        {asH1 ? (
          <Heading as="h1" mb="4" color={theme.colors.brand.secondaryText}>
            {title}
          </Heading>
        ) : (
          <Heading as="h3" mb="4" textAlign="center" color={theme.colors.brand.white}>
            {title}
          </Heading>
        )}

        {reverse ? (
          <Text as="h1" textAlign="center" m="14px 0">
            {description}
          </Text>
        ) : (
          <Text>{description}</Text>
        )}

        {textButton && (
          <Button
            display={{ base: "none", md: "flex" }}
            fontSize={"sm"}
            fontWeight={600}
            borderRadius="50"
            m="0 auto"
            color={theme.colors.brand.white}
            bg={theme.colors.brand.primaryButton}
            _hover={{
              bg: "pink.300",
            }}
          >
            {textButton}
          </Button>
        )}
      </Box>
      <Box height="auto">
        <Image boxSize="150px" width="520px" height="auto" src={image} alt={description} />
      </Box>
    </Flex>
  );
};

export default Section;
