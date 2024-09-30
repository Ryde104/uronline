import {
  Heading,
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import CPositioner from "../classes/CPositioner";



interface ProgrammingProps {
  m_aPositioner: CPositioner[];
  setm_aPositioners: any;
}

const Positioners: React.FC<ProgrammingProps> = (props) => {
  const RemovePositioner = (index: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this Positioner?"
    );

    if (confirmRemove) {
      const v = [...props.m_aPositioner];
      v.splice(index, 1);
      props.setm_aPositioners(v);
    }
  };

  const AddPositioner = () => {
    let cPositioner: CPositioner = new CPositioner();
    cPositioner.description = "";
    cPositioner.qty = 1;
    cPositioner.price = "";
    props.setm_aPositioners([...props.m_aPositioner, cPositioner]);
  };

  const PositionerSelection = (index: number, description: string) => {
    const v = [...props.m_aPositioner];
    v[index].description = description;
    props.setm_aPositioners(v);
  };

  const AddPositionerQtyChange = (index: number, value: string) => {
    if (!isNaN(Number(value))) {
      // Prevent non-numeric input
      const v = [...props.m_aPositioner];
      v[index].qty = Number(value);
      props.setm_aPositioners(v);
    }
  };

  const AddPositionerPriceChange = (index: number, value: string) => {
    const v = [...props.m_aPositioner];
    v[index].price = value; // Store price as string
    props.setm_aPositioners(v);
  };

  function getPosition(elementToFind: any, arrayElements: string | any[]) {
    var i;
    for (i = 0; i < arrayElements.length; i += 1) {
      if (arrayElements[i] === elementToFind) {
        return i;
      }
    }
    return 0; // not found
  }

  return (
    <ChakraProvider resetCSS>
      <Heading mt={2}>Positioners</Heading>

      {props.m_aPositioner.map((v, index) => (
        <InputGroup key={index} mb={2}>
          <InputLeftAddon>Description</InputLeftAddon>
          <Input
            variant="outline"
            size="md"
            value={v.description}
            onChange={(e) =>
              PositionerSelection(
                getPosition(v, props.m_aPositioner),
                e.target.value
              )
            }
          />
          <InputLeftAddon>Quantity</InputLeftAddon>
          <Input
            width="100px"
            value={v.qty}
            onChange={(e) =>
              AddPositionerQtyChange(
                getPosition(v, props.m_aPositioner),
                e.target.value
              )
            }
          />
          <InputLeftAddon>Price</InputLeftAddon>
          <Input
            type="number"
            value={v.price}
            onChange={(e) =>
              AddPositionerPriceChange(
                getPosition(v, props.m_aPositioner),
                e.target.value
              )
            }
            width={`${Math.max(100, (v.price.length + 6) * 15)}px`} // Adjust width based on length of the price value
            minWidth="100px" // Set a minimum width
          />

          <Button
            ml={2}
            colorScheme="red"
            onClick={() =>
              RemovePositioner(getPosition(v, props.m_aPositioner))
            }
          >
            Remove
          </Button>
        </InputGroup>
      ))}

      <Button
        onClick={() => AddPositioner()}
        colorScheme="teal"
        width="50px"
        mb={2}
        mt={2}
      >
        Add
      </Button>

      <Divider borderColor="black" />
    </ChakraProvider>
  );
};

export default Positioners;
