import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/Banner";
import {
  Button,
  ChakraProvider,
  Divider,
  Heading,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const InfoPage = (props: any) => {
  const [quoteNumber, setQuoteNumber] = useState("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [data, setData] = useState<any>(null); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  const autoFill = () => {
    axios
      .get(`http://127.0.0.1:5000/GetCompanyInfo?quotenumber=${quoteNumber}`)
      .then((response) => {
        


        props.FirstName(response.data.FirstName);

        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        
        setError("Failed to fetch data");
      });
  };

  return (
    <ChakraProvider resetCSS>
      <Heading mb={2}>Company Information</Heading>
      <InputGroup mb={0}>
        <Input
          placeholder="Quote Number"
          value={quoteNumber}
          onChange={(e) => setQuoteNumber(e.target.value)}
        />
        <Button
          onClick={autoFill}
          variant="solid"
          size="md"
          colorScheme="whatsapp"
          mx={2}
        >
          Auto Complete
        </Button>
      </InputGroup>

      <Input
        placeholder="First Name"
        mt={2}
        mb={2}
        width="50"
        value={props.FirstNameValue}
        onChange={(e) => props.FirstName(e.target.value)}
      />
      <Input
        placeholder="Last Name"
        width="50"
        ml={2}
        value={props.LastNameValue}
        onChange={(e) => props.LastName(e.target.value)}
      />
      <Input
        placeholder="Company"
        width="50"
        ml={2}
        value={props.CompanyValue}
        onChange={(e) => props.Company(e.target.value)}
      />
      <Input
        placeholder="Project Title"
        width="50"
        ml={2}
        value={props.ProjectTitleValue}
        onChange={(e) => props.ProjectTitle(e.target.value)}
      />
      <Input
        placeholder="Date"
        width="50"
        ml={2}
        type="date"
        value={currentDate || props.DateValue}
        onChange={(e) => setCurrentDate(e.target.value)}
      />
      <Divider borderColor="black" />

      {error && <Text color="red.500">Error: {error}</Text>}
      {data && (
        <div>
          <Heading size="md" mt={4}>
            Fetched Data:
          </Heading>

          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </ChakraProvider>
  );
};

export default InfoPage;
