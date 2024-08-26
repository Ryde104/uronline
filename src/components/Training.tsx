import {
  Heading,
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Divider,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CTraining from "../classes/CTraining";



interface ProgrammingProps {
  m_aTraining: CTraining[];
  setm_aTraining: any;
}

const Training: React.FC<ProgrammingProps> = (props) => {
  const [isChecked, setIsChecked] = useState(props.m_aTraining.length > 0);

  useEffect(() => {
    
    setIsChecked(props.m_aTraining.length > 0);
  }, [props.m_aTraining]);

  const RemoveTraining = (index: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this training item?"
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

  
  const AddTrainingPriceChange = (index: number, value: string) => {
    const v = [...props.m_aTraining];
    v[index].price = Number(value);
    props.setm_aTraining(v);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (checked) {
      AddTraining();
    } else {
      // Remove the last training item or handle as needed
      if (props.m_aTraining.length > 0) {
        RemoveTraining(props.m_aTraining.length - 1);
      }
    }
  };

  return (
    <ChakraProvider resetCSS>
      <InputGroup>
        <Heading>Training</Heading>
        <Checkbox
          size="lg"
          ml={2}
          isChecked={isChecked}
          onChange={handleCheckboxChange}
        />
      </InputGroup>

      {props.m_aTraining.map((v, index) => (
        <InputGroup key={index} mb={2}>
          
          <InputLeftAddon>Price</InputLeftAddon>
          <Input
            width="100px"
            value={v.price}
            onChange={(e) =>
              AddTrainingPriceChange(index, e.target.value)
            }
          />
         
        </InputGroup>
      ))}

      
      <Divider borderColor="black" />
    </ChakraProvider>
  );
};

export default Training;
