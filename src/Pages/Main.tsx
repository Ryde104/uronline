import React, { useState, useEffect } from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import axios from "axios";
import CTooling from "../classes/CTooling";
import InfoPage from "./InfoPage";
import HomePage from "./HomePage";
import DesignPage from "./DesignPage";
import Arms from "../components/Arms";
import Options from "./ServicesPage";
import Tooling from "../components/Tooling";
import Training from "../components/Training";
import Installation from "../components/Installation";
import ExtrasPage from "./ExtrasPage";
import DataTable from "../components/Table";
import Banner from "../components/Banner";
import CRobotArm from "../classes/CRobotArm";
import CPositioner from "../classes/CPositioner";
import CWelder from "../classes/CWelder";
import Welders from "../components/Welders";
import Positioners from "../components/Positioners";

const Home = () => {
  const [m_nPage, setm_nPage] = useState(0);

  // Company info page
  const [m_strFirstName, setm_strFirstName] = useState("");
  const [m_strLastName, setm_strLastName] = useState("");
  const [m_strCompany, setm_strCompany] = useState("");
  const [m_strQuoteN, setm_strQuoteN] = useState("");
  const [m_strDate, setm_strDate] = useState("");
  const [m_strProjectTitle, setm_strProjectTitle] = useState("");

  // Design page
  const [m_aRobotArm, setm_aRobotArm] = useState<CRobotArm[]>([]);
  const [m_aPositioner, setm_aPositioner] = useState<CPositioner[]>([]);
  const [m_aWelder, setm_aWelder] = useState<CWelder[]>([]);

  // Options page
  const [m_aTooling, setm_aTooling] = useState<any[]>([]);
  const [m_aTraining, setm_aTraining] = useState<any[]>([]);
  const [m_aInstallation, setm_aInstallation] = useState<any[]>([]);

  // Extras page
  const [m_strProjectDesc, setm_strProjectDesc] = useState("");

  // New state to hold the total price
  const [m_aTotalPrice, setm_aTotalPrice] = useState(0);

  // Function to calculate total price
  useEffect(() => {
    const calculateTotalPrice = () => {
      const robotArmTotal = m_aRobotArm.reduce((total, arm) => total + Number(arm.price), 0);
      const positionerTotal = m_aPositioner.reduce((total, pos) => total + Number(pos.price), 0);
      const welderTotal = m_aWelder.reduce((total, welder) => total + Number(welder.price), 0);
      const toolingTotal = m_aTooling.reduce((total, item) => total + Number(item.price), 0);
      const trainingTotal = m_aTraining.reduce((total, item) => total + Number(item.price), 0);
      const installationTotal = m_aInstallation.reduce((total, item) => total + Number(item.price), 0);

      const totalPrice = robotArmTotal + positionerTotal + welderTotal + toolingTotal + trainingTotal + installationTotal;
      setm_aTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [m_aRobotArm, m_aPositioner, m_aWelder, m_aTooling, m_aTraining, m_aInstallation]);

  // Helper functions to get the formatted JSON for different entities
  function GetArms(v: CRobotArm) {
    return `{"description":"${v.description}", "qty":${v.qty},"price":"${v.price}"}`;
  }

  function GetPositioners(v: CPositioner) {
    return `{"description":"${v.description}", "qty":${v.qty},"price":"${v.price}"}`;
  }

  function GetWelders(v: CWelder) {
    return `{"description":"${v.description}", "qty":${v.qty},"price":"${v.price}"}`;
  }

  function GetTooling(v: CTooling) {
    return `{"price":"${v.price}"}`;
  }

  function GetTraining(v: CTooling) {
    return `{"price":"${v.price}"}`;
  }

  function GetInstallation(v: CTooling) {
    return `{"price":"${v.price}"}`;
  }

  function Create() {
    // Build the JSON object
    let strJSON = `{
      "firstName":"${m_strFirstName}",
      "dealTitle":"${m_strProjectTitle}",
      "date":"${m_strDate}",
      "company":"${m_strCompany}",
      "quote":"${m_strQuoteN}",
      "desc":"${m_strProjectDesc}",
      "totalPrice": "${m_aTotalPrice.toFixed(2)}", 
      "robotarms":[${m_aRobotArm.map((v) => GetArms(v)).join(",")}],
      "positioners":[${m_aPositioner.map((v) => GetPositioners(v)).join(",")}],
      "welders":[${m_aWelder.map((v) => GetWelders(v)).join(",")}],
      "tooling":[${m_aTooling.map((v) => GetTooling(v)).join(",")}],
      "training":[${m_aTraining.map((v) => GetTraining(v)).join(",")}],
      "installation":[${m_aInstallation.map((v) => GetInstallation(v)).join(",")}] 
  }`;
  
    axios
      .post("http://127.0.0.1:5000/Create", JSON.parse(strJSON))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function Backward() {
    if (m_nPage === 0) return;
    setm_nPage(m_nPage - 1);
  }

  function Forward() {
    if (m_nPage === 5) return;
    setm_nPage(m_nPage + 1);
  }

  function RenderPage() {
    if (m_nPage === 0) return <HomePage />;
    else if (m_nPage === 1)
      return (
        <>
          <InfoPage
            FirstName={setm_strFirstName}
            FirstNameValue={m_strFirstName}
            LastName={setm_strLastName}
            LastNameValue={m_strLastName}
            Company={setm_strCompany}
            CompanyValue={m_strCompany}
            QuoteN={setm_strQuoteN}
            QuoteNValue={m_strQuoteN}
            Date={setm_strDate}
            DateValue={m_strDate}
            ProjectTitle={setm_strProjectTitle}
            ProjectTitleValue={m_strProjectTitle}
          />
          <div style={{ marginTop: "20px", fontWeight: "bold" }}>
            {/* Total Price: ${m_aTotalPrice.toFixed(2)} */}
          </div>
        </>
      );
    else if (m_nPage === 2)
      return (
        <>
          <DesignPage />
          <Arms m_aRobotArm={m_aRobotArm} setm_aRobotArms={setm_aRobotArm} />
          <Positioners m_aPositioner={m_aPositioner} setm_aPositioners={setm_aPositioner} />
          <Welders m_aWelder={m_aWelder} setm_aWelders={setm_aWelder} />
        </>
      );
    else if (m_nPage === 3)
      return (
        <>
          <Options />
          <Tooling m_aTooling={m_aTooling} setm_aTooling={setm_aTooling} />
          <Training m_aTraining={m_aTraining} setm_aTraining={setm_aTraining} />
          <Installation m_aInstallation={m_aInstallation} setm_aInstallation={setm_aInstallation} />
        </>
      );
    else if (m_nPage === 4)
      return (
        <ExtrasPage
          ProjectDesc={setm_strProjectDesc}
          ProjectDescValue={m_strProjectDesc}
        />
      );
    else if (m_nPage === 5)
      return (
        <>
          <DataTable
            m_aRobotArm={m_aRobotArm}
            m_aPositioner={m_aPositioner}
            m_aWelder={m_aWelder}
            m_aTooling={m_aTooling}
            m_aTraining={m_aTraining}
            m_aInstallation={m_aInstallation}
            CreateButton={Create}
          />
        </>
      );
  }

  return (
    <ChakraProvider>
      <div className="container">
        <div className="col"></div>
        <Banner headerText="United Robotics Quote Generator" />
        {RenderPage()}

        {m_nPage > 0 && (
          <Button
            onClick={Backward}
            variant="solid"
            size="lg"
            colorScheme="red"
            leftIcon={<ArrowBackIcon />}
            mt="2"
            mr="2"
          >
            Back
          </Button>
        )}
        {m_nPage < 5 && (
          <Button
            onClick={Forward}
            variant="solid"
            size="lg"
            colorScheme="linkedin"
            rightIcon={<ArrowForwardIcon />}
            mt="2"
          >
            Forward
          </Button>
        )}
      </div>
    </ChakraProvider>
  );
};

export default Home;
