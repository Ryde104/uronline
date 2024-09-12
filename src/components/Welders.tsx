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
import CWelder from "../classes/CWelder"; // Adapted to CWelder

interface InputGroupProps {
  welder: string;
  quantity: string;
  price: string;
}

interface ProgrammingProps {
  m_aWelder: CWelder[];
  setm_aWelders: any;
}

const Welders: React.FC<ProgrammingProps> = (props) => {
  const RemoveWelder = (index: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this Welder?"
    );

    if (confirmRemove) {
      const v = [...props.m_aWelder];
      v.splice(index, 1);
      props.setm_aWelders(v);
    }
  };

  const AddWelder = () => {
    let cWelder: CWelder = new CWelder();
    cWelder.description = "";
    cWelder.qty = 1;
    cWelder.price = ""; // Ensure price starts empty
    props.setm_aWelders([...props.m_aWelder, cWelder]);
  };

  const WelderSelection = (index: number, description: string) => {
    const v = [...props.m_aWelder];
    v[index].description = description;
    props.setm_aWelders(v);
  };

  const AddWelderQtyChange = (index: number, value: string) => {
    const v = [...props.m_aWelder];
    v[index].qty = Number(value);
    props.setm_aWelders(v);
  };

  const AddWelderPriceChange = (index: number, value: string) => {
    const v = [...props.m_aWelder];
    v[index].price = value; // Store price as string
    props.setm_aWelders(v);
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
      <Heading mt={2}>Welders</Heading>

      {props.m_aWelder.map((v, index) => (
        <InputGroup key={index} mb={2}>
          <InputLeftAddon>Custom Welders</InputLeftAddon>
          <Input
            variant="outline"
            size="md"
            value={v.description}
            onChange={(e) =>
              WelderSelection(
                getPosition(v, props.m_aWelder),
                e.target.value
              )
            }
          />
          <InputLeftAddon>Quantity</InputLeftAddon>
          <Input
            width="100px"
            value={v.qty}
            onChange={(e) =>
              AddWelderQtyChange(
                getPosition(v, props.m_aWelder),
                e.target.value
              )
            }
          />
          <InputLeftAddon>Price</InputLeftAddon>
          <Input
            type="number"
            value={v.price}
            onChange={(e) =>
              AddWelderPriceChange(
                getPosition(v, props.m_aWelder),
                e.target.value
              )
            }
            width={`${Math.max(100, (v.price.length + 6) * 15)}px`} // Adjust width based on length of the price value
            minWidth="100px" // Set a minimum width
          />

          <Button
            ml={2}
            colorScheme="red"
            onClick={() => RemoveWelder(getPosition(v, props.m_aWelder))}
          >
            Remove
          </Button>
        </InputGroup>
      ))}

      <Button
        onClick={() => AddWelder()}
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

export default Welders;
