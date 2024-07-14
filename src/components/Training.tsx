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
import CTraining from "../classes/CTraining";
import { profile } from "console";

interface InputGroupProps {
  //Initialize
  training: string;
  quantity: string;
  price: string;
}

interface ProgrammingProps {
  m_aTraining: CTraining[];
  setm_aTraining: any;
}

const Training: React.FC<ProgrammingProps> = (props) => {
  const [inputGroups, setInputGroups] = useState<InputGroupProps[]>([
    //set variables
    { training: "", quantity: "", price: "" },
  ]);

  const RemoveTraining = (index: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this Arm?"
    );

    if (confirmRemove) {
      const v = [...props.m_aTraining];
      v.splice(index, 1);
      props.setm_aTraining(v);
    }
  };

  const AddTraining = () => {
    let cTraining: CTraining = new CTraining();
    cTraining.description = "";
    cTraining.qty = 0;
    props.setm_aTraining([...props.m_aTraining, cTraining]);
  };

  const Trainingelection = (index: number, description: string) => {
    const v = [...props.m_aTraining];
    v[index].description = description;
    props.setm_aTraining(v);
  };

  const AddTrainingQtyChange = (index: number, value: string) => {
    const v = [...props.m_aTraining];
    v[index].qty = Number(value);
    props.setm_aTraining(v);
  };

  const AddTrainingPriceChange = (index: number, value: string) => {
    const v = [...props.m_aTraining];
    v[index].price = Number(value);
    props.setm_aTraining(v);
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
      <Heading mt={2}>Training</Heading>

      {props.m_aTraining.map((v) => (
        <InputGroup key={0} mb={2}>
          <InputLeftAddon>Training</InputLeftAddon>
          <Input
            variant="outline"
            size="md"
            value={v.description}
            onChange={(e) =>
              Trainingelection(
                getPosition(v, props.m_aTraining),
                e.target.value
              )
            }
          ></Input>
          <InputLeftAddon>Quantity</InputLeftAddon>

          <Input
            width="100px"
            value={v.qty}
            onChange={(e) =>
              AddTrainingQtyChange(
                getPosition(v, props.m_aTraining),
                e.target.value
              )
            }
          />
          <InputLeftAddon>Price</InputLeftAddon>
          <Input
            width="100px"
            value={v.price}
            onChange={(e) =>
              AddTrainingPriceChange(
                getPosition(v, props.m_aTraining),
                e.target.value
              )
            }
          />

          <Button
            ml={2}
            colorScheme="red"
            onClick={() => RemoveTraining(getPosition(v, props.m_aTraining))}
          >
            Remove
          </Button>
        </InputGroup>
      ))}

      <Button
        onClick={() => AddTraining()}
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

export default Training;
