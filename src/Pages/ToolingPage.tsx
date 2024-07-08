import {
  Heading,
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface InputGroupProps {
  arm: string;
  quantity: string;
}

interface ProgrammingProps {
  ArmValue1: string;
  ArmSelection1: (value: string) => void;
  ArmValue2: string;
  ArmSelection2: (value: string) => void;
}

const Programming: React.FC<ProgrammingProps> = (props) => {
  const [inputGroups, setInputGroups] = useState<InputGroupProps[]>([
    { arm: "", quantity: "" },
  ]);
  const [m_nSelector, setm_nSelector] = useState(0);

  const addInputGroup = () => {
    setInputGroups([...inputGroups, { arm: "", quantity: "" }]);
    setm_nSelector(m_nSelector + 1);
  };

  const removeInputGroup = (index: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this Arm?"
    );
    if (confirmRemove) {
      const updatedGroups = [...inputGroups];
      updatedGroups.splice(index, 1);
      setInputGroups(updatedGroups);
      setm_nSelector(m_nSelector - 1);
    }
  };

  const handleArmChange = (index: number, value: string) => {
    const updatedGroups = [...inputGroups];
    updatedGroups[index].arm = value;
    setInputGroups(updatedGroups);
  };

  const handleQuantityChange = (index: number, value: string) => {
    const updatedGroups = [...inputGroups];
    updatedGroups[index].quantity = value;
    setInputGroups(updatedGroups);
  };

  function RenderPage() {
    if (m_nSelector == 0)
      return (
        <ChakraProvider resetCSS>
          <Box p={4}>
            <Heading mb={4}>Robot Arms</Heading>
            {inputGroups.map((inputGroup, index) => (
              <InputGroup key={index} mb={4}>
                <InputLeftAddon>Preset Arms</InputLeftAddon>
                <Select
                  variant="outline"
                  size="md"
                  value={props.ArmValue1}
                  onChange={(e) => props.ArmSelection1(e.target.value)}
                >
                  <option value="">Choose...</option>
                  <option value="IRB 1010-1.5/0.37">IRB 1010-1.5/0.37</option>
                </Select>

                <Input
                  width="100px"
                  placeholder="#"
                  value={inputGroup.quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                />
                <Button
                  ml={2}
                  colorScheme="red"
                  onClick={() => removeInputGroup(index)}
                >
                  Remove
                </Button>
              </InputGroup>
            ))}
            <Flex justify="flex-end">
              <Button onClick={addInputGroup} colorScheme="teal" width="50px">
                Add
              </Button>
            </Flex>
          </Box>
          {m_nSelector}
        </ChakraProvider>
      );
    else if (m_nSelector == 1)
      return (
        <ChakraProvider resetCSS>
          <Box p={4}>
            <Heading mb={4}>Robot Arms</Heading>
            {inputGroups.map((inputGroup, index) => (
              <InputGroup key={index} mb={4}>
                <InputLeftAddon>Preset Arms</InputLeftAddon>
                <Select
                  variant="outline"
                  size="md"
                  value={props.ArmValue2}
                  onChange={(e) => props.ArmSelection2(e.target.value)}
                >
                  <option value="">Choose...</option>
                  <option value="IRB 1010-1.5/0.37">IRB 1010-1.5/0.37</option>
                </Select>

                <Input
                  width="100px"
                  placeholder="#"
                  value={inputGroup.quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                />
                <Button
                  ml={2}
                  colorScheme="red"
                  onClick={() => removeInputGroup(index)}
                >
                  Remove
                </Button>
              </InputGroup>
            ))}
            <Flex justify="flex-end">
              <Button onClick={addInputGroup} colorScheme="teal" width="50px">
                Add
              </Button>
            </Flex>
          </Box>
          m_nSelector: {m_nSelector}
        </ChakraProvider>
      );
  }
  return <div>{RenderPage()}</div>;
};

export default Programming;
