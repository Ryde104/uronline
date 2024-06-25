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
        <div key={index}>
          <input
            type="text"
            name="name"
            value={inputGroup.name}
            onChange={(event) => handleInputChange(index, event)}
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            value={inputGroup.age}
            onChange={(event) => handleInputChange(index, event)}
            placeholder="Age"
          />
        </div>
      ))}
      <button onClick={addInputGroup}>Add Input Group</button>
    </div>
  );
};

export default Programming;
