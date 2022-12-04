import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const InputDefault = (): JSX.Element => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="brand.secondary" />
      </InputLeftElement>
      <Input type="text" borderRadius="50" background="brand.white" />
    </InputGroup>
  );
};

export default InputDefault;
