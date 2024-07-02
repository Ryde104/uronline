import { Heading, Divider, ChakraProvider, Input, InputGroup, InputLeftAddon, Select } from "@chakra-ui/react";
import React, { useState, ChangeEvent } from "react";

interface InputGroup {
  name: string;
  age: string;
}

const Programming= (props: any) => {
  const [inputGroups, setInputGroups] = useState<InputGroup[]>([
    { name: "", age: "" },
  ]);
  const [m_nSelector, setm_nSelector] = useState(0);

  const addInputGroup = () => {
    setInputGroups([...inputGroups, { name: "", age: "" }]);
    setm_nSelector(m_nSelector + 1);
  };

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...inputGroups];
    const name = event.target.name as keyof InputGroup; // Assertion here
    values[index][name] = event.target.value;
    setInputGroups(values);
  };

  

 

  if (m_nSelector == 0) return (
    <div>
      {inputGroups.map((inputGroup, index, prop) => (
    <ChakraProvider resetCSS>
      <Heading>Robot Arms</Heading>

      <InputGroup>
        <InputLeftAddon>Preset Arms</InputLeftAddon>
        <Select
          variant="outline"
          size="md"
          
          value={props.ArmValue}
          onChange={(e) => props.ArmSelection(e.target.value)}
          
        >
         <option selected>Choose...</option>
          <option>IRB 1010-1.5/0.37</option>

        </Select>

        <Input width="50" placeholder="Quantity" />
      </InputGroup>
    </ChakraProvider>
  ))}
      <button onClick={addInputGroup} >Add Input Group</button>
    </div>
  );
  else if (m_nSelector == 2)
    return (
      <div>
        {inputGroups.map((inputGroup, index, prop) => (
      <ChakraProvider resetCSS>
        <Heading>Robot Arms</Heading>
  
        <InputGroup>
          <InputLeftAddon>Preset Arms</InputLeftAddon>
          <Select
            variant="outline"
            size="md"
            
            value={props.ArmValue}
            onChange={(e) => props.ArmSelection(e.target.value)}
            
          >
           <option selected>Choose...</option>
            <option>IRB 1010-1.5/0.37</option>
  
          </Select>
  
          <Input width="50" placeholder="Quantity" />
        </InputGroup>
      </ChakraProvider>
    ))}
        <button onClick={addInputGroup} >Add Input Group</button>
      </div>
    );
  
};

export default Programming;
