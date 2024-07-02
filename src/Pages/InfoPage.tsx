import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/banner";
import { ChakraProvider, Heading, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const One = (props: any) => {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  return (
    <ChakraProvider resetCSS>
      <Heading mb={2}>Company Information</Heading>
      <Input placeholder="First Name" mt={2} mb={2} width="50" />
      <Input placeholder="Last Name" width="50" ml={2} />
      <Input placeholder="Company" width="50" ml={2} />
      <Input placeholder="Quote Number" width="50" ml={2} />
      <Input
        placeholder="Date"
        width="50"
        ml={2}
        type="date"
        value={currentDate}
        onChange={(e) => setCurrentDate(e.target.value)}
      />
      <Input placeholder="Project Description" />
    </ChakraProvider>
  );
};

export default One;
