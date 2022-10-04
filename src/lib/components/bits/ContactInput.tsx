import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";

export function ContactInput({
  label,
  type,
  placeholder,
  defaultValue,
  name,
  isModal,
}: any) {
  const { colorMode } = useColorMode();
  return (
    <FormControl>
      <FormLabel
        htmlFor={label}
        textTransform="capitalize"
        pos="relative"
        top={5}
        left={4}
        width="fit-content"
        zIndex={3}
        bgColor={
          // eslint-disable-next-line no-nested-ternary
          isModal
            ? colorMode === "light"
              ? "white"
              : "gray.700"
            : colorMode === "light"
            ? "brand.100"
            : "gray.500"
        }
        fontSize=".8rem"
      >
        {label}
      </FormLabel>

      <InputGroup>
        <Input
          type={type}
          placeholder={placeholder}
          variant="outline"
          defaultValue={defaultValue}
          name={name}
          borderRadius="0"
          border="2px solid"
          borderColor={colorMode === "light" ? "black" : "white"}
          height="3rem"
          fontSize=".8rem"
        />
      </InputGroup>
    </FormControl>
  );
}
export function ContactTextArea({ label, placeholder, name, isModal }: any) {
  const { colorMode } = useColorMode();
  return (
    <FormControl>
      <FormLabel
        htmlFor={label}
        textTransform="capitalize"
        pos="relative"
        top={5}
        left={4}
        width="fit-content"
        zIndex={3}
        bgColor={
          // eslint-disable-next-line no-nested-ternary
          isModal
            ? colorMode === "light"
              ? "white"
              : "gray.700"
            : colorMode === "light"
            ? "brand.100"
            : "gray.500"
        }
        fontSize=".8rem"
      >
        {label}
      </FormLabel>

      <InputGroup>
        <Textarea
          name={name}
          placeholder={placeholder}
          variant="outline"
          h="100px"
          resize="none"
          borderRadius="0"
          border="2px solid"
          borderColor={colorMode === "light" ? "black" : "white"}
          fontSize=".8rem"
        />
      </InputGroup>
    </FormControl>
  );
}
