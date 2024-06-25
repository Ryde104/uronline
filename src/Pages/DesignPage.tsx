import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/banner";
import { Divider, Heading } from "@chakra-ui/react";

const Zero = (props: any) => {
  return (
    <>
      <Heading mb={2}>Design</Heading>
      <Heading as="h3" size="md">
        What are we building?
      </Heading>
      <Divider borderColor="black" />
    </>
  );
};

export default Zero;
