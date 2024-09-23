import { Heading, ChakraProvider, Input, InputGroup, InputLeftAddon, Divider, Checkbox } from "@chakra-ui/react";
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
    const confirmRemove = window.confirm("Are you sure you want to remove this Training item?");
    if (confirmRemove) {
      const v = [...props.m_aTraining];
      v.splice(index, 1);
      props.setm_aTraining(v);
    }
  };

  const AddTraining = () => {
    let cTraining: CTraining = new CTraining();
    props.setm_aTraining([...props.m_aTraining, cTraining]);
  };

  const AddTrainingPriceChange = (index: number, value: string) => {
    const v = [...props.m_aTraining];
    // Prevent non-numeric characters, allow empty input to reset to 0
    if (value === '' || !isNaN(Number(value))) {
      v[index].price = value === '' ? 0 : Number(value); // Always store a number
      props.setm_aTraining(v);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (checked) {
      AddTraining();
    } else {
      if (props.m_aTraining.length > 0) {
        RemoveTraining(props.m_aTraining.length - 1);
      }
    }
  };

  return (
    <ChakraProvider resetCSS>
      <InputGroup>
        <Heading>Training</Heading>
        <Checkbox size="lg" ml={2} isChecked={isChecked} onChange={handleCheckboxChange} />
      </InputGroup>

      {props.m_aTraining.map((v, index) => (
        <InputGroup key={index} mb={2}>
          <InputLeftAddon>Price</InputLeftAddon>
          <Input
  type="text" // Use text to allow empty input
  width="100px"
  value={v.price === 0 ? '' : v.price} // Display empty string for 0, otherwise show the price
  onChange={(e) => AddTrainingPriceChange(index, e.target.value)}
/>
        </InputGroup>
      ))}

      <Divider borderColor="black" />
    </ChakraProvider>
  );
};

export default Training;
