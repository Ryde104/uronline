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
import CInstallation from "../classes/CInstallation";
import { profile } from "console";

interface InputGroupProps {
  //Initialize
  installation: string;
  quantity: string;
  price: string;
}

interface ProgrammingProps {
  m_aInstallation: CInstallation[];
  setm_aInstallation: any;
}

const Installation: React.FC<ProgrammingProps> = (props) => {
  const [inputGroups, setInputGroups] = useState<InputGroupProps[]>([
    //set variables
    { installation: "", quantity: "", price: "" },
  ]);

  const RemoveInstallation = (index: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this Arm?"
    );

    if (confirmRemove) {
      const v = [...props.m_aInstallation];
      v.splice(index, 1);
      props.setm_aInstallation(v);
    }
  };

  const AddInstallation = () => {
    let cInstallation: CInstallation = new CInstallation();
    cInstallation.description = "";
    cInstallation.qty = 0;
    props.setm_aInstallation([...props.m_aInstallation, cInstallation]);
  };

  const Installationelection = (index: number, description: string) => {
    const v = [...props.m_aInstallation];
    v[index].description = description;
    props.setm_aInstallation(v);
  };

  const AddInstallationQtyChange = (index: number, value: string) => {
    const v = [...props.m_aInstallation];
    v[index].qty = Number(value);
    props.setm_aInstallation(v);
  };

  const AddInstallationPriceChange = (index: number, value: string) => {
    const v = [...props.m_aInstallation];
    v[index].price = Number(value);
    props.setm_aInstallation(v);
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
      <Heading mt={2}>Installation</Heading>

      {props.m_aInstallation.map((v) => (
        <InputGroup key={0} mb={2}>
          <InputLeftAddon>Installation</InputLeftAddon>
          <Input
            variant="outline"
            size="md"
            value={v.description}
            onChange={(e) =>
              Installationelection(
                getPosition(v, props.m_aInstallation),
                e.target.value
              )
            }
          ></Input>
          <InputLeftAddon>Quantity</InputLeftAddon>

          <Input
            width="100px"
            value={v.qty}
            onChange={(e) =>
              AddInstallationQtyChange(
                getPosition(v, props.m_aInstallation),
                e.target.value
              )
            }
          />
          <InputLeftAddon>Price</InputLeftAddon>
          <Input
            width="100px"
            value={v.price}
            onChange={(e) =>
              AddInstallationPriceChange(
                getPosition(v, props.m_aInstallation),
                e.target.value
              )
            }
          />

          <Button
            ml={2}
            colorScheme="red"
            onClick={() =>
              RemoveInstallation(getPosition(v, props.m_aInstallation))
            }
          >
            Remove
          </Button>
        </InputGroup>
      ))}

      <Button
        onClick={() => AddInstallation()}
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

export default Installation;
