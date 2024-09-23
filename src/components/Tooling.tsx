import { Heading, ChakraProvider, Input, InputGroup, InputLeftAddon, Divider, Checkbox } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CTooling from "../classes/CTooling"; // Change this import if necessary

interface ToolingProps {
  m_aTooling: CTooling[]; // Change the prop type to CTooling
  setm_aTooling: any;
}

const Tooling: React.FC<ToolingProps> = (props) => {
  const [isChecked, setIsChecked] = useState(props.m_aTooling.length > 0);

  useEffect(() => {
    setIsChecked(props.m_aTooling.length > 0);
  }, [props.m_aTooling]);

  const RemoveTooling = (index: number) => {
    const confirmRemove = window.confirm("Are you sure you want to remove this Tooling item?");
    if (confirmRemove) {
      const v = [...props.m_aTooling];
      v.splice(index, 1);
      props.setm_aTooling(v);
    }
  };

  const AddTooling = () => {
    let cTooling: CTooling = new CTooling();
    props.setm_aTooling([...props.m_aTooling, cTooling]);
  };

  const AddToolingPriceChange = (index: number, value: string) => {
    const v = [...props.m_aTooling];
    // Prevent non-numeric characters, allow empty input to reset to 0
    if (value === '' || !isNaN(Number(value))) {
      v[index].price = value === '' ? 0 : Number(value); // Always store a number
      props.setm_aTooling(v);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (checked) {
      AddTooling();
    } else {
      if (props.m_aTooling.length > 0) {
        RemoveTooling(props.m_aTooling.length - 1);
      }
    }
  };

  return (
    <ChakraProvider resetCSS>
      <InputGroup>
        <Heading>Tooling</Heading>
        <Checkbox size="lg" ml={2} isChecked={isChecked} onChange={handleCheckboxChange} />
      </InputGroup>

      {props.m_aTooling.map((v, index) => (
        <InputGroup key={index} mb={2}>
          <InputLeftAddon>Price</InputLeftAddon>
          <Input
            type="text" // Use text to allow empty input
            width="100px"
            value={v.price === 0 ? '' : v.price} // Display empty string for 0, otherwise show the price
            onChange={(e) => AddToolingPriceChange(index, e.target.value)}
          />
        </InputGroup>
      ))}

      <Divider borderColor="black" />
    </ChakraProvider>
  );
};

export default Tooling;
