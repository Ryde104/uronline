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
  m_aRobotArm: CRobotArm[],
  setm_aRobotArms: any
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
    props.setm_aRobotArms(
      [
        ...props.m_aRobotArm,
        cRobotArm
      ]
    );
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

  function RenderPage() {

    return (
      <ChakraProvider resetCSS>
        <Box p={4}>
          <Heading mb={4}>Robot Arms</Heading>



          {props.m_aRobotArm.map(v => 
            <InputGroup key={0} mb={4}>
            {/* <InputLeftAddon>{getPosition(v, props.m_aRobotArm)}</InputLeftAddon> */}
            <InputLeftAddon>Preset Arms</InputLeftAddon>
            <Select
              variant="outline"
              size="md"
              value={v.description}
              onChange={(e) => RobotArmSelection(getPosition(v, props.m_aRobotArm), e.target.value)}
            >
              <option value="">Choose...</option>
              <option value="IRB 1010-1.5/0.37">IRB 1010-1.5/0.37</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>

            <Input
              width="100px"
              placeholder="#"
              value={v.qty}
              onChange={(e) => AddRobotArmQtyChange(getPosition(v, props.m_aRobotArm), e.target.value)}
            />
            <Button
              ml={2}
              colorScheme="red"
              onClick={() => RemoveRobotArm(getPosition(v, props.m_aRobotArm))}
            >
              Remove
            </Button>
          </InputGroup>

         )}

          <Button onClick={() => AddRobotArm()} colorScheme="teal" width="50px">
            Add
          </Button>


          {/* {inputGroups.map((inputGroup, index) => (
            <InputGroup key={index} mb={4}>
              <InputLeftAddon>Preset Arms</InputLeftAddon>
              <Select
                variant="outline"
                size="md"
              // value={props.ArmValue1}
              // onChange={(e) => props.ArmSelection1(e.target.value)}
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
          </Flex> */}
        </Box>



      </ChakraProvider>
    );
  }
  return <div>{RenderPage()}</div>;
};

export default Programming;
