import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [quoteNumber, setQuoteNumber] = useState(props.QuoteNValue || "");
  const [, setCurrentDate] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  useEffect(() => {
    setQuoteNumber(props.QuoteNValue || "");
  }, [props.QuoteNValue]);

  const autoFill = () => {
    axios
<<<<<<< HEAD
      .get(`https://20.237.122.240:5000/GetCompanyInfo?quotenumber=${quoteNumber}`)
=======
      .get(`http://4.236.227.113:5000/GetCompanyInfo?quotenumber=${quoteNumber}`)
>>>>>>> dfe0c448b55453592304d5b780f6b3855554a84f
      .then((response) => {
        props.FirstName(response.data.person_name);
        props.Company(response.data.org_name);
        props.ProjectTitle(response.data.title);
        props.Date(response.data.add_time);

        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        alert(err);
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
          onChange={(e) => {
            setQuoteNumber(e.target.value);
            props.QuoteN(e.target.value); // Update parent component
          }}
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
        type="text"
        maxLength={10}
        ml={2}
        value={props.DateValue}
        onChange={(e) => props.Date(e.target.value)}
      />
      <Divider borderColor="black" />

      {error && <Text color="red.500">Error: {error}</Text>}
      {data && (
        <div>
          <Heading size="md" mt={4}>
            
          </Heading>
          
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

        </div>
      )}
    </ChakraProvider>
  );
};

export default InfoPage;
