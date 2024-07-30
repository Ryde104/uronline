import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/Banner";
import {
  Button,
  ChakraProvider,
  Divider,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const Final = (props: any) => {
  return (
    <>
      <ChakraProvider resetCSS>
        <Heading mb={2}>Total</Heading>
        <Heading as="h3" size="md" mb={6}></Heading>

        <Divider borderColor="black" />
      </ChakraProvider>
    </>
  );
};

export default Final;
