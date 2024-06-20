import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/banner";
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

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "300px",
    margin: "20px auto",
  },
  textbox: {
    flex: "1",
    margin: "0 10px",
  },
};
export default Zero;
