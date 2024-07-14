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
  InputRightAddon,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CTooling from "../classes/CTooling";
import { profile } from "console";

interface InputGroupProps {
  //Initialize
  tooling: string;
  quantity: string;
  price: string;
}

interface ProgrammingProps {
  m_aTooling: CTooling[];
  setm_aTooling: any;
}

const Tooling: React.FC<ProgrammingProps> = (props) => {
  const [inputGroups, setInputGroups] = useState<InputGroupProps[]>([
    //set variables
    { tooling: "", quantity: "", price: "" },
  ]);

  const RemoveTooling = (index: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this Arm?"
    );

    if (confirmRemove) {
      const v = [...props.m_aTooling];
      v.splice(index, 1);
      props.setm_aTooling(v);
    }
  };

  const AddTooling = () => {
    let cTooling: CTooling = new CTooling();
    cTooling.description = "";
    cTooling.qty = 0;
    props.setm_aTooling([...props.m_aTooling, cTooling]);
  };

  const Toolingelection = (index: number, description: string) => {
    const v = [...props.m_aTooling];
    v[index].description = description;
    props.setm_aTooling(v);
  };

  const AddToolingQtyChange = (index: number, value: string) => {
    const v = [...props.m_aTooling];
    v[index].qty = Number(value);
    props.setm_aTooling(v);
  };

  const AddToolingPriceChange = (index: number, value: string) => {
    const v = [...props.m_aTooling];
    v[index].price = Number(value);
    props.setm_aTooling(v);
  };

  function getPosition(elementToFind: any, arrayElements: string | any[]) {
    var i;
    for (i = 0; i < arrayElements.length; i += 1) {
      if (arrayElements[i] === elementToFind) {
        return i;
      }
    }
    return 0; //not found
  }

  return (
    <ChakraProvider resetCSS>
      <Heading mt={2}>Tooling</Heading>

      {props.m_aTooling.map((v) => (
        <InputGroup key={0} mb={2}>
          <InputLeftAddon>Tooling</InputLeftAddon>
          <Input
            variant="outline"
            size="md"
            value={v.description}
            onChange={(e) =>
              Toolingelection(getPosition(v, props.m_aTooling), e.target.value)
            }
          ></Input>
          <InputLeftAddon>Quantity</InputLeftAddon>

          <Input
            width="100px"
            value={v.qty}
            onChange={(e) =>
              AddToolingQtyChange(
                getPosition(v, props.m_aTooling),
                e.target.value
              )
            }
          />
          <InputLeftAddon>Price</InputLeftAddon>
          <Input
            width="100px"
            value={v.price}
            onChange={(e) =>
              AddToolingPriceChange(
                getPosition(v, props.m_aTooling),
                e.target.value
              )
            }
          />

          <Button
            ml={2}
            colorScheme="red"
            onClick={() => RemoveTooling(getPosition(v, props.m_aTooling))}
          >
            Remove
          </Button>
        </InputGroup>
      ))}

      <Button
        onClick={() => AddTooling()}
        colorScheme="teal"
        width="50px"
        mb={2}
        mt={2}
      >
        Add
      </Button>

      <Divider borderColor="black" />
    </ChakraProvider>
  );
};

export default Tooling;
