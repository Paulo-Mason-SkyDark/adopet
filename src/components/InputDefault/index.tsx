import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import theme from "../../styles/theme";

const InputDefault = (): JSX.Element => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color={theme.colors.brand.secondaryText} />
      </InputLeftElement>
      <Input type="text" borderRadius="50" background={theme.colors.brand.white} />
    </InputGroup>
  );
};

export default InputDefault;
