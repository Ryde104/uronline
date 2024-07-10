import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/Banner";
import { Divider, Heading } from "@chakra-ui/react";

const Zero = (props: any) => {
  return (
    <>
      <Heading mb={2}>Design</Heading>
      <Heading as="h3" size="md" mb={6}>
        What are we building?
      </Heading>
      <Divider borderColor="black" />
    </>
  );
};

export default Zero;
