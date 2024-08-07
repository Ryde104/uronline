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
import CRobotArm from "../classes/CRobotArm";
import { profile } from "console";

interface InputGroupProps {
  //Initialize
  arm: string;
  quantity: string;
  price: string;
}

interface ProgrammingProps {
  m_aRobotArm: CRobotArm[];
  setm_aRobotArms: any;
}

const Arms: React.FC<ProgrammingProps> = (props) => {
  const [inputGroups, setInputGroups] = useState<InputGroupProps[]>([
    //set variables
    { arm: "", quantity: "", price: "" },
  ]);

  const RemoveRobotArm = (index: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this Arm?"
    );

    if (confirmRemove) {
      const v = [...props.m_aRobotArm];
      v.splice(index, 1);
      props.setm_aRobotArms(v);
    }
  };

  const AddRobotArm = () => {
    let cRobotArm: CRobotArm = new CRobotArm();
    cRobotArm.description = "";
    cRobotArm.qty = 0;
    props.setm_aRobotArms([...props.m_aRobotArm, cRobotArm]);
  };

  const RobotArmSelection = (index: number, description: string) => {
    const v = [...props.m_aRobotArm];
    v[index].description = description;
    props.setm_aRobotArms(v);
  };

  const AddRobotArmQtyChange = (index: number, value: string) => {
    const v = [...props.m_aRobotArm];
    v[index].qty = Number(value);
    props.setm_aRobotArms(v);
  };

  const AddRobotArmPriceChange = (index: number, value: string) => {
    const v = [...props.m_aRobotArm];
    v[index].price = Number(value);
    props.setm_aRobotArms(v);
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
      <Heading mt={2}>Robot Arms</Heading>

      {props.m_aRobotArm.map((v) => (
        <InputGroup key={0} mb={2}>
          <InputLeftAddon>Custom Arms</InputLeftAddon>
          <Input
            variant="outline"
            size="md"
            value={v.description}
            onChange={(e) =>
              RobotArmSelection(
                getPosition(v, props.m_aRobotArm),
                e.target.value
              )
            }
          ></Input>
          <InputLeftAddon>Quantity</InputLeftAddon>

          <Input
            width="100px"
            value={v.qty}
            onChange={(e) =>
              AddRobotArmQtyChange(
                getPosition(v, props.m_aRobotArm),
                e.target.value
              )
            }
          />
          <InputLeftAddon>Price</InputLeftAddon>
          <Input
            width="100px"
            value={v.price}
            onChange={(e) =>
              AddRobotArmPriceChange(
                getPosition(v, props.m_aRobotArm),
                e.target.value
              )
            }
          />

          <Button
            ml={2}
            colorScheme="red"
            onClick={() => RemoveRobotArm(getPosition(v, props.m_aRobotArm))}
          >
            Remove
          </Button>
        </InputGroup>
      ))}

      <Button
        onClick={() => AddRobotArm()}
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

export default Arms;
