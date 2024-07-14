import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/Banner";
import { ChakraProvider, Divider, Heading, Textarea } from "@chakra-ui/react";

const Extras = (props: any) => {
  return (
    <>
      <ChakraProvider resetCSS>
        <Heading mb={2}>Extras</Heading>
        <Heading as="h3" size="md" mb={6}></Heading>
        <Divider borderColor="black" />

        <Textarea
          placeholder="Project Description"
          value={props.ProjectDescValue}
          onChange={(e) => props.ProjectDesc(e.target.value)}
        />
        <Divider borderColor="black" />
      </ChakraProvider>
    </>
  );
};

export default Extras;
