import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/Banner";
import { Divider, Heading } from "@chakra-ui/react";

const Services = (props: any) => {
  return (
    <>
      <Heading mb={2}>Services</Heading>
      <Heading as="h3" size="md" mb={6}>
        What are we Providing?
      </Heading>
      <Divider borderColor="black" />
    </>
  );
};

export default Services;
