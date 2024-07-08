import react, { useState } from "react";
import "../App.css";

import Banner from "../components/banner";

import InfoPage from "./InfoPage";
import HomePage from "./HomePage";
import PositionersPage from "./PositionersPage";
import WeldersPage from "./WeldersPage";
import TrainingPage from "./TrainingPage";
import IntegrationPage from "./IntegrationPage";
import ProgrammingPage from "./ProgrammingPage";
import ToolingPage from "./ToolingPage";
import FATCPage from "./FATCPage";
import OptionsPage from "./OptionsPage";
import TotalPage from "./TotalPage";
import EndPricePage from "./EndPricePage";
import { ChakraProvider } from "@chakra-ui/react";
import ArmsPage from "./ArmsPage";
import DesignPage from "./DesignPage";

const Home = () => {
  const [m_nPage, setm_nPage] = useState(0);

  //Company info page
  const [m_strFirstName, setm_strFirstName] = useState("");
  const [m_strLastName, setm_strLastName] = useState("");
  const [m_strCompany, setm_strCompany] = useState("");
  const [m_strQuoteN, setm_strQuoteN] = useState("");
  //date?
  const [m_strProjectDesc, setm_strProjectDesc] = useState("");

  const [m_strArm, setm_strArm] = useState("");
  const [m_nArmQty, setm_nArmQty] = useState(0);

  const [m_strPositioner, setm_strPositioner] = useState("");
  const [m_nPositionerQty, setm_nPositionerQty] = useState(0);

  const [m_strBrand, setm_strBrand] = useState("");
  const [m_strDesc, setm_strDesc] = useState("");
  const [m_nWelderQty, setm_nWelderQty] = useState(0);

  const [m_strTrainingValue, setm_strTraining] = useState("");
  const [m_nTrainingPriceValue, setm_nTrainingPrice] = useState(0);

  const [m_strIntegrationValue, setm_strIntegration] = useState("");
  const [m_nIntegrationPriceValue, setm_nIntegrationPrice] = useState(0);

  const [m_strProgrammingValue, setm_strProgramming] = useState("");
  const [m_nProgrammingPriceValue, setm_nProgrammingPrice] = useState(0);

  const [m_strToolingValue, setm_strTooling] = useState("");
  const [m_nToolingPriceValue, setm_nToolingPrice] = useState(0);

  const [m_strFATCValue, setm_strFATC] = useState("");
  const [m_nFATCPriceValue, setm_nFATCPrice] = useState(0);

  const [m_strOptions, setm_strOptions] = useState("");
  const [m_nOptionsPrice, setm_nOptionsPrice] = useState(0);

  // const [m_strPositioner, setm_strPositioner] = useState("");
  // const [m_nPositionerQty, setm_nPositionerQty] = useState(0);

  // const [m_strPositioner, setm_strPositioner] = useState("");
  // const [m_nPositionerQty, setm_nPositionerQty] = useState(0);

  // const [m_strPositioner, setm_strPositioner] = useState("");
  // const [m_nPositionerQty, setm_nPositionerQty] = useState(0);

  function Backward() {
    if (m_nPage == 0) return;
    setm_nPage(m_nPage - 1);
  }
  function Forward() {
    if (m_nPage == 11) return;
    setm_nPage(m_nPage + 1);
  }

  function RenderPage() {
    if (m_nPage == 0) return <HomePage />;
    else if (m_nPage == 1)
      return (
        <>
          <InfoPage
            FirstName={setm_strFirstName}
            // ^ make the box work ↓ make it keep value
            FirstNameValue={m_strFirstName}
            LastName={setm_strLastName}
            LastNameValue={m_strLastName}
            Company={setm_strCompany}
            CompanyValue={m_strCompany}
            QuoteN={setm_strQuoteN}
            QuoteNValue={m_strQuoteN}
            ProjectDesc={setm_strProjectDesc}
            ProjectDescValue={m_strProjectDesc}
          ></InfoPage>
          <ToolingPage
            ArmSelection1={setm_strArm}
            ArmValue1={m_strArm}
            ArmSelection2={setm_strArm}
            ArmValue2={m_strArm}
          ></ToolingPage>
        </>
      );
    else if (m_nPage == 2)
      return (
        <>
          <DesignPage></DesignPage>
        </>
      );
    else if (m_nPage == 3)
      return (
        <WeldersPage
          Brand={setm_strBrand}
          Description={setm_strDesc}
          WelderPrice={setm_nWelderQty}
          BrandValue={m_strBrand}
          DescriptionValue={m_strDesc}
          WelderValue={m_nWelderQty}
        ></WeldersPage>
      );
    else if (m_nPage == 4)
      return (
        <TrainingPage
          Training={setm_strTraining}
          TrainingPrice={setm_nTrainingPrice}
          TrainingValue={m_strTrainingValue}
          TrainingPriceValue={m_nTrainingPriceValue}
        ></TrainingPage>
      );
    else if (m_nPage == 5)
      return (
        <IntegrationPage
          Integration={setm_strIntegration}
          IntegrationPrice={setm_nIntegrationPrice}
          IntegrationValue={m_strIntegrationValue}
          IntegrationPriceValue={m_nIntegrationPriceValue}
        ></IntegrationPage>
      );
    else if (m_nPage == 6)
      return (
        <ProgrammingPage
          Programming={setm_strProgramming}
          ProgrammingPrice={setm_nProgrammingPrice}
          ProgrammingValue={m_strProgrammingValue}
          ProgrammingPriceValue={m_nProgrammingPriceValue}
        ></ProgrammingPage>
      );
    else if (m_nPage == 7) return <></>;
    else if (m_nPage == 8)
      return (
        <FATCPage
          FATC={setm_strFATC}
          FATCPrice={setm_nFATCPrice}
          FATCValue={m_strFATCValue}
          FATCPriceValue={m_nFATCPriceValue}
        ></FATCPage>
      );
    else if (m_nPage == 9)
      return (
        <OptionsPage
          Options1={setm_strOptions}
          OptionsPrice={setm_nOptionsPrice}
          Options1Value={m_strOptions}
          OptionsPriceValue={m_nOptionsPrice}
        ></OptionsPage>
      );
    else if (m_nPage == 10)
      return (
        <TotalPage
          Arm={m_strArm}
          ArmPrice={m_nArmQty}
          Positioners={m_strPositioner}
          PositionerPrice={m_nPositionerQty}
          Brand={m_strBrand}
          Desc={m_strDesc}
          WelderPrice={m_nWelderQty}
          //
          Training={m_strTrainingValue}
          TrainingPrice={m_nTrainingPriceValue}
          //
          Integration={m_strIntegrationValue}
          IntegrationPrice={m_nIntegrationPriceValue}
          //
          Programming={m_strProgrammingValue}
          ProgrammingPrice={m_nProgrammingPriceValue}
          //
          Tooling={m_strToolingValue}
          ToolingPrice={m_nToolingPriceValue}
          //
          FATC={m_strFATCValue}
          FATCPrice={m_nFATCPriceValue}
        ></TotalPage>
      );
    else if (m_nPage == 11) return <EndPricePage></EndPricePage>;
  }

  function Debug() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {m_nPage}
        <br></br>
        {m_strArm}
        <br></br>
        {m_nArmQty}
        <br></br>
        {m_strPositioner}
        <br></br>
        {m_nPositionerQty}
        <br></br>
        {m_strBrand}
        <br></br>
        {m_strDesc}
        <br></br>
        {m_nWelderQty}
        <br></br>
        {m_strTrainingValue}
        <br></br>
        {m_strIntegrationValue}
        <br></br>
        {m_strProgrammingValue}
        <br></br>
      </div>
    );
  }
  return (
    <ChakraProvider>
      <div className="container ">
        <div className="col"></div>
        <Banner headerText="United Robotics Quote Generator" />
        {RenderPage()}
        <button
          onClick={() => Backward()}
          className="btn btn-danger btn-lg  col-2 mt-2 mb-2"
        >
          Back
        </button>
        <button
          onClick={() => Forward()}
          className="btn btn-primary btn-lg col-2 mt-2 mx-2 mb-2"
        >
          Next
        </button>

        {Debug()}
      </div>
    </ChakraProvider>
  );
};

export default Home;
