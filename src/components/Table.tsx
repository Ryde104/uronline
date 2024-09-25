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
  CreateButton: () => void;
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
  const robotArmSubtotal = m_aRobotArm.reduce(
    (total, arm) => total + Number(arm.price),
    0
  );
  const positionerSubtotal = m_aPositioner.reduce(
    (total, pos) => total + Number(pos.price),
    0
  );
  const welderSubtotal = m_aWelder.reduce(
    (total, welder) => total + Number(welder.price),
    0
  );

  const toolingSubtotal = m_aTooling.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  const trainingSubtotal = m_aTraining.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  const installationSubtotal = m_aInstallation.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const toolingTrainingInstallationSubtotal =
    toolingSubtotal + trainingSubtotal + installationSubtotal;

  const totalPrice =
    robotArmSubtotal +
    positionerSubtotal +
    welderSubtotal +
    toolingTrainingInstallationSubtotal;

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
                {m_aRobotArm.map((arm) => (
                  <div key={arm.description}>{formatPrice(arm.price)}</div>
                ))}
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
                {m_aPositioner.map((pos) => (
                  <div key={pos.description}>{formatPrice(pos.price)}</div>
                ))}
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
                {m_aWelder.map((welder) => (
                  <div key={welder.description}>{formatPrice(welder.price)}</div>
                ))}
              </Td>
            </Tr>
            <Tr>
              <Th colSpan={3} textAlign="right">
                <strong>Subtotal for Equipment:</strong>
              </Th>
              <Td textAlign="right">
                <strong>
                  {formatPrice(
                    (robotArmSubtotal + positionerSubtotal + welderSubtotal).toString()
                  )}
                </strong>
              </Td>
            </Tr>
          </Tbody>

          <Tbody>
            <Tr>
              <Th colSpan={4}>
                <strong></strong>
              </Th>
            </Tr>
            <Tr>
              <Th scope="row">
                <strong>Tooling</strong>
              </Th>
              <Td>
                {m_aTooling.length > 0 ? (
                  <CheckIcon color="black" />
                ) : (
                  <span>No Tooling</span>
                )}
              </Td>
              <Td>{m_aTooling.map((item) => item.description).join(", ")}</Td>
              <Td>{formatPrice(toolingSubtotal.toString())}</Td>
            </Tr>
            <Tr>
              <Th scope="row">
                <strong>Training</strong>
              </Th>
              <Td>
                {m_aTraining.length > 0 ? (
                  <CheckIcon color="black" />
                ) : (
                  <span>No Training</span>
                )}
              </Td>
              <Td>{m_aTraining.map((item) => item.description).join(", ")}</Td>
              <Td>{formatPrice(trainingSubtotal.toString())}</Td>
            </Tr>
            <Tr>
              <Th scope="row">
                <strong>Installation</strong>
              </Th>
              <Td>
                {m_aInstallation.length > 0 ? (
                  <CheckIcon color="black" />
                ) : (
                  <span>No Installation</span>
                )}
              </Td>
              <Td>{m_aInstallation.map((item) => item.description).join(", ")}</Td>
              <Td>{formatPrice(installationSubtotal.toString())}</Td>
            </Tr>
            <Tr>
              <Th colSpan={3} textAlign="right">
                <strong>Subtotal for Services:</strong>
              </Th>
              <Td textAlign="right">
                <strong>
                  {formatPrice(toolingTrainingInstallationSubtotal.toString())}
                </strong>
              </Td>
            </Tr>
          </Tbody>

          <Tbody>
            <Tr>
              <Th colSpan={3} textAlign="right">
                <strong>TOTAL:</strong>
              </Th>
              <Td textAlign="right">
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
