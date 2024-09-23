import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  Divider,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

interface Item {
  description: string;
  qty: number;
  price: string;
}

interface DataTableProps {
  m_aRobotArm: Item[];
  m_aPositioner: Item[];
  m_aWelder: Item[];
  m_aTooling: Item[];
  m_aTraining: Item[];
  m_aInstallation: Item[];
  CreateButton: () => void; // Add this line
}

const formatPrice = (price: string) => {
  const numberPrice = parseFloat(price);
  return isNaN(numberPrice)
    ? ""
    : numberPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
};

const DataTable: React.FC<DataTableProps> = ({
  m_aRobotArm,
  m_aPositioner,
  m_aWelder,
  m_aTooling,
  m_aTraining,
  m_aInstallation,
  CreateButton,
}) => {
  const totalPrice = [
    ...m_aRobotArm,
    ...m_aPositioner,
    ...m_aWelder,
    ...m_aTooling,
    ...m_aTraining,
    ...m_aInstallation,
  ].reduce((total, item) => total + Number(item.price), 0);

  return (
    <>
      <Box
        overflowX="auto"
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        bg="white"
      >
        <Table variant="simple" colorScheme="gray" size="md">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>
                <strong>Build</strong>
              </Th>
              <Th>
                <strong>Qty</strong>
              </Th>
              <Th>
                <strong>Price</strong>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th scope="row">
                <strong>Arm</strong>
              </Th>
              <Td>
                {m_aRobotArm.map((arm) => (
                  <div key={arm.description}>{arm.description}</div>
                ))}
              </Td>
              <Td>
                {m_aRobotArm.map((arm) => (
                  <div key={arm.description}>{arm.qty}</div>
                ))}
              </Td>
              <Td>
                {formatPrice(
                  m_aRobotArm
                    .reduce((total, arm) => total + Number(arm.price), 0)
                    .toString()
                )}
              </Td>
            </Tr>
            <Tr>
              <Th scope="row">
                <strong>Positioner</strong>
              </Th>
              <Td>
                {m_aPositioner.map((pos) => (
                  <div key={pos.description}>{pos.description}</div>
                ))}
              </Td>
              <Td>
                {m_aPositioner.map((pos) => (
                  <div key={pos.description}>{pos.qty}</div>
                ))}
              </Td>
              <Td>
                {formatPrice(
                  m_aPositioner
                    .reduce((total, pos) => total + Number(pos.price), 0)
                    .toString()
                )}
              </Td>
            </Tr>
            <Tr>
              <Th scope="row">
                <strong>Welder</strong>
              </Th>
              <Td>
                {m_aWelder.map((welder) => (
                  <div key={welder.description}>{welder.description}</div>
                ))}
              </Td>
              <Td>
                {m_aWelder.map((welder) => (
                  <div key={welder.description}>{welder.qty}</div>
                ))}
              </Td>
              <Td>
                {formatPrice(
                  m_aWelder
                    .reduce((total, welder) => total + Number(welder.price), 0)
                    .toString()
                )}
              </Td>
            </Tr>
          </Tbody>

          <Thead>
            <Tr>
              <Th></Th>
              <Th>
                <strong>Check</strong>
              </Th>
              <Th>
                <strong>Services</strong>
              </Th>
              <Th>
                <strong>Price</strong>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {[
              { label: "Tooling", items: m_aTooling },
              { label: "Training", items: m_aTraining },
              { label: "Installation", items: m_aInstallation },
            ].map(({ label, items }) => (
              <Tr key={label}>
                <Th scope="row">
                  <strong>{label}</strong>
                </Th>
                <Td>
                  {items.length > 0 ? (
                    <CheckIcon color="black" />
                  ) : (
                    <span>No {label}</span>
                  )}
                </Td>
                <Td>
                  {items.length > 0
                    ? items.map((item) => item.description).join(", ")
                    : ""}
                </Td>
                <Td>
                  {formatPrice(
                    items
                      .reduce((total, item) => total + Number(item.price), 0)
                      .toString()
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>

          <Tbody>
            <Tr>
              <Th colSpan={3} style={{ textAlign: "left" }}>
                <strong>TOTAL:</strong>
              </Th>
              <Td>
                <strong>{formatPrice(totalPrice.toString())}</strong>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Divider borderColor="black" />
      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          variant="solid"
          size="lg"
          colorScheme="whatsapp"
          display="flex"
          rightIcon={<CheckIcon />}
          onClick={CreateButton}
        >
          Create
        </Button>
      </Box>
      <Divider borderColor="black" />
    </>
  );
};

export default DataTable;
