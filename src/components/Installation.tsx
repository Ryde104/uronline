import {
  Heading,
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftAddon,
  Divider,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CInstallation from "../classes/CInstallation";

interface ProgrammingProps {
  m_aInstallation: CInstallation[];
  setm_aInstallation: any;
}

const Installation: React.FC<ProgrammingProps> = (props) => {
  const [isChecked, setIsChecked] = useState(props.m_aInstallation.length > 0);

  useEffect(() => {
    setIsChecked(props.m_aInstallation.length > 0);
  }, [props.m_aInstallation]);

  const RemoveInstallation = (index: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this Installation item?"
    );
    if (confirmRemove) {
      const v = [...props.m_aInstallation];
      v.splice(index, 1);
      props.setm_aInstallation(v);
    }
  };

  const AddInstallation = () => {
    let cInstallation: CInstallation = new CInstallation();
    props.setm_aInstallation([...props.m_aInstallation, cInstallation]);
  };

  const AddInstallationPriceChange = (index: number, value: string) => {
    const v = [...props.m_aInstallation];
    // Prevent non-numeric characters, allow empty input to reset to 0
    if (value === "" || !isNaN(Number(value))) {
      v[index].price = value === "" ? 0 : Number(value); // Always store a number
      props.setm_aInstallation(v);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (checked) {
      AddInstallation();
    } else {
      if (props.m_aInstallation.length > 0) {
        RemoveInstallation(props.m_aInstallation.length - 1);
      }
    }
  };

  return (
    <ChakraProvider resetCSS>
      <InputGroup>
        <Heading>Installation</Heading>
        <Checkbox
          size="lg"
          ml={2}
          isChecked={isChecked}
          onChange={handleCheckboxChange}
        />
      </InputGroup>

      {props.m_aInstallation.map((v, index) => (
        <InputGroup key={index} mb={2}>
          <InputLeftAddon>Price</InputLeftAddon>
          <Input
            type="text" // Use text to allow empty input
            width="100px"
            value={v.price === 0 ? "" : v.price} // Display empty string for 0, otherwise show the price
            onChange={(e) => AddInstallationPriceChange(index, e.target.value)}
          />
        </InputGroup>
      ))}

      <Divider borderColor="black" />
    </ChakraProvider>
  );
};

export default Installation;
