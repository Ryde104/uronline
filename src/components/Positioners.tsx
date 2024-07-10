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
import CPositioner from "../classes/CPositioner";
import { profile } from "console";

interface InputGroupProps {
  //Initialize
  positioner: string;
  quantity: string;
  price: string;
}

interface ProgrammingProps {
  m_aPositioner: CPositioner[];
  setm_aPositioner: any;
}

const Positioner: React.FC<ProgrammingProps> = (props) => {
  const [inputGroups, setInputGroups] = useState<InputGroupProps[]>([
    //set variables
    { positioner: "", quantity: "", price: "" },
  ]);

  const RemovePositioner = (index: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this Positioner?"
    );

    if (confirmRemove) {
      const v = [...props.m_aPositioner];
      v.splice(index, 1);
      props.setm_aPositioner(v);
    }
  };

  const AddPositioner = () => {
    let cPositioner: CPositioner = new CPositioner();
    cPositioner.description = "";
    cPositioner.qty = 0;
    props.setm_aPositioner([...props.m_aPositioner, cPositioner]);
  };

  const PositionerSelection = (index: number, description: string) => {
    const v = [...props.m_aPositioner];
    v[index].description = description;
    props.setm_aPositioner(v);
  };

  const AddPositionerChange = (index: number, value: string) => {
    const v = [...props.m_aPositioner];
    v[index].qty = Number(value);
    props.setm_aPositioner(v);
  };

  const AddPositionerPriceChange = (index: number, value: string) => {
    const v = [...props.m_aPositioner];
    v[index].price = Number(value);
    props.setm_aPositioner(v);
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
      <Heading mt={2}>Positioners</Heading>

      {props.m_aPositioner.map((v) => (
        <InputGroup key={0} mb={2}>
          <InputLeftAddon>Custom Positioners</InputLeftAddon>
          <Input
            variant="outline"
            size="md"
            value={v.description}
            onChange={(e) =>
              PositionerSelection(
                getPosition(v, props.m_aPositioner),
                e.target.value
              )
            }
          ></Input>
          <InputLeftAddon>Quantity</InputLeftAddon>

          <Input
            width="100px"
            value={v.qty}
            onChange={(e) =>
              AddPositionerChange(
                getPosition(v, props.m_aPositioner),
                e.target.value
              )
            }
          />
          <InputLeftAddon>Price</InputLeftAddon>
          <Input
            width="100px"
            value={v.price}
            onChange={(e) =>
              AddPositionerPriceChange(
                getPosition(v, props.m_aPositioner),
                e.target.value
              )
            }
          />

          <Button
            ml={2}
            colorScheme="red"
            onClick={() =>
              RemovePositioner(getPosition(v, props.m_aPositioner))
            }
          >
            Remove
          </Button>
        </InputGroup>
      ))}

      <Button
        onClick={() => AddPositioner()}
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

export default Positioner;
