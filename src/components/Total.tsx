import {
  Button,
  ChakraProvider,
  Divider,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";


const TotalPage = (props: any) => {
  return (
    <>
      <ChakraProvider resetCSS>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Build</th>
              <th scope="col" colSpan={2}>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Arm</th>
              <td colSpan={2}>{props.Arm}</td>
              <td>${props.ArmPrice}</td>
            </tr>
            <tr>
              <th scope="row">Positioner</th>
              <td colSpan={2}>{props.Positioners}</td>
              <td>${props.PositionerPrice}</td>
            </tr>
            <tr>
              <th scope="row">Welder</th>
              <td colSpan={2}>{props.Brand}</td>
              <td>${props.WelderPrice}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Services</th>
              <th scope="col" colSpan={2}>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Tooling</th>
              <td colSpan={2}>{props.Training}</td>
              <td>${props.TrainingPrice}</td>
            </tr>
            <tr>
              <th scope="row">Training</th>
              <td colSpan={2}>{props.Integration}</td>
              <td>${props.IntegrationPrice}</td>
            </tr>
            <tr>
              <th scope="row">Installation</th>
              <td colSpan={2}>{props.Programming}</td>
              <td>${props.ProgrammingPrice}</td>
            </tr>
          </tbody>
          <thead></thead>
          <tbody></tbody>
        </table>
        <></>
        <Button
          variant="solid"
          size="lg"
          colorScheme="whatsapp"
          display="flex"
          rightIcon={<CheckIcon />}
          onClick={() => props.CreateButton()}
        >
          Create
        </Button>
        <Divider borderColor="black" />
      </ChakraProvider>
    </>
  );
};

export default TotalPage;
