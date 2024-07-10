import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/Banner";
import { ChakraProvider, Divider, Heading, Input } from "@chakra-ui/react";

const Zero = (props: any) => {
  return (
    <ChakraProvider resetCSS>
      <Heading mb={2}>Welcome to Quoteanator-3000</Heading>
      <Heading as="h3" size="md">
        Click Next to Get Started
      </Heading>
    </ChakraProvider>
  );
};

export default Zero;
