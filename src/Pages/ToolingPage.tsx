import { Heading, Divider, ChakraProvider, Input, InputGroup, InputLeftAddon, Select } from "@chakra-ui/react";
import React, { useState, ChangeEvent } from "react";

interface InputGroup {
  name: string;
  age: string;
}

const Programming: React.FC = () => {
  const [inputGroups, setInputGroups] = useState<InputGroup[]>([
    { name: "", age: "" },
  ]);

  const addInputGroup = () => {
    setInputGroups([...inputGroups, { name: "", age: "" }]);
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

  return (
    <div>
      {inputGroups.map((inputGroup, index) => (
    <ChakraProvider resetCSS>
      <Heading>Robot Arms</Heading>

      <InputGroup>
        <InputLeftAddon>Preset Arms</InputLeftAddon>
        <Select
          variant="outline"
          size="md"
          
        >
          <option selected>Choose...</option>
          <option>IRB 1010-1.5/0.37</option>
          <option>IRB 1100-4/0.475</option>
          <option>IRB 1100-4/0.58</option>
          <option>IRB 120</option>
          <option>IRB 1200-5/0.9</option>
          <option>IRB 1200-7/0.7</option>
          <option>IRB 1300-11/0.9</option>
          <option>IRB 1300-10/1.15</option>
          <option>IRB 1300-7/1.4</option>
          <option>IRB 1300-12/1.4</option>
          <option>IRB 1410</option>
          <option>IRB 1520</option>
          <option>IRB 1600-6/1.2</option>
          <option>IRB 1600-6/1.45</option>
          <option>IRB 1600-10/1.2</option>
          <option>IRB 1600-10/1.45</option>
          <option>IRB 1660ID-6/1.55</option>
          <option>IRB 1660ID-4/1.55</option>
          <option>IRB 2400/10</option>
          <option>IRB 2400/16</option>
          <option>IRB 2600-20/1.65</option>
          <option>IRB 2600-12/1.65</option>
          <option>IRB 2600-12/1.85</option>
          <option>IRB 2600-20/1.65 type C</option>
          <option>IRB 2600-12/1.65 type C</option>
          <option>IRB 2600ID-15/1.85</option>
          <option>IRB 2600ID-8/2.0</option>
          <option>IRB 4400/60</option>
          <option>IRB 4400/L10</option>
          <option>IRB 460-110/2.4</option>
          <option>IRB 4600-60/2.05</option>
          <option>IRB 4600-45/2.05</option>
          <option>IRB 4600-40/2.55</option>
          <option>IRB 4600-20/2.50</option>
          <option>IRB 5710-110/2.3</option>
          <option>IRB 5710-90/2.7</option>
          <option>IRB5710-90/2.3 LID</option>
          <option>IRB 5710-70/2.7 LID</option>
          <option>IRB 5720-180/2.6</option>
          <option>IRB 5720-125/3.0</option>
          <option>IRB 5720-155/2.6 LID</option>
          <option>IRB 5720-90/3.0 LID</option>
          <option>IRB 660-180/3.15</option>
          <option>IRB 660-250/3.15</option>
          <option>IRB 6620-150/2.2</option>
          <option>IRB 6650S-90/3.9</option>
          <option>IRB 6650S-125/3.5</option>
          <option>IRB 6650S-200/3.0</option>
          <option>IRB 6660-100/3.3</option>
          <option>IRB 6660-130/3.1</option>
          <option>IRB 6660-205/1.9</option>
          <option>IRB 6700-235/2.65</option>
          <option>IRB 6700-205/2.80</option>
          <option>IRB 6700-175/3.05</option>
          <option>IRB 6700-150/3.20</option>
          <option>IRB 6700-200/2.60</option>
          <option>IRB 6700-155/2.85</option>
          <option>IRB 6700-300/2.70</option>
          <option>IRB 6700-245/3.00</option>
          <option>IRB 6700Inv-300/2.60</option>
          <option>IRB 6700Inv-245/2.90</option>
          <option>IRB 6790-235/2.65</option>
          <option>IRB 6790-205/2.80</option>
          <option>IRB 760-450/3.2</option>
          <option>IRB 760-445/3.2</option>
          <option>IRB 7600-500/2.55</option>
          <option>IRB 7600-400/2.55</option>
          <option>IRB 7600-340/2.8</option>
          <option>IRB 7600-325/3.1</option>
          <option>IRB 7600-150/3.5</option>
          <option>IRB 8700</option>
        </Select>

        <Input width="50" placeholder="Quantity" />
      </InputGroup>
    </ChakraProvider>
  ))}
      <button onClick={addInputGroup}>Add Input Group</button>
    </div>
  );
};

export default Programming;
