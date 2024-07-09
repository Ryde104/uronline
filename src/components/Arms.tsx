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
import CRobotArm from "../classes/RobotArm";
import { profile } from "console";

interface InputGroupProps {
  arm: string;
  quantity: string;
}

// interface ProgrammingProps {
//   ArmValue1: string;
//   ArmSelection1: (value: string) => void;
//   ArmValue2: string;
//   ArmSelection2: (value: string) => void;
// }
interface ProgrammingProps {
  m_aRobotArm: CRobotArm[];
  setm_aRobotArms: any;
}

const Arms: React.FC<ProgrammingProps> = (props) => {
  const [inputGroups, setInputGroups] = useState<InputGroupProps[]>([
    { arm: "", quantity: "" },
  ]);
  const [m_nSelector, setm_nSelector] = useState(0);

  const addInputGroup = () => {
    setInputGroups([...inputGroups, { arm: "", quantity: "" }]);
    setm_nSelector(m_nSelector + 1);
  };

  const RemoveRobotArm = (index: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this Arm?"
    );

    if (confirmRemove) {
      const v = [...props.m_aRobotArm];
      v.splice(index, 1);
      props.setm_aRobotArms(v);
      //setm_nSelector(m_nSelector - 1);
    }
  };

  const RobotArmSelection = (index: number, description: string) => {
    const v = [...props.m_aRobotArm];
    v[index].description = description;
    props.setm_aRobotArms(v);
  };

  const AddRobotArm = () => {
    let cRobotArm: CRobotArm = new CRobotArm();
    cRobotArm.description = "";
    cRobotArm.qty = 0;
    props.setm_aRobotArms([...props.m_aRobotArm, cRobotArm]);
  };

  // const handleArmChange = (index: number, value: string) => {
  //   const updatedGroups = [...inputGroups];
  //   updatedGroups[index].arm = value;
  //   setInputGroups(updatedGroups);
  // };

  const AddRobotArmQtyChange = (index: number, value: string) => {
    const v = [...props.m_aRobotArm];
    v[index].qty = Number(value);
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
      <Box>
        {props.m_aRobotArm.map((v) => (
          <InputGroup key={0} mb={2}>
            {/* <InputLeftAddon>{getPosition(v, props.m_aRobotArm)}</InputLeftAddon> */}
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
      </Box>
      <Divider borderColor="black" />
    </ChakraProvider>
  );
};

export default Arms;
