import react, { useState } from "react";

import Banner from "../components/banner";

import ArmsPage from "./ArmsPage";
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

const Home = () => {
  const [m_nPage, setm_nPage] = useState(0);

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
    if (m_nPage == 10) return;
    setm_nPage(m_nPage + 1);
  }

  function RenderPage() {
    if (m_nPage == 0) return <HomePage />;
    else if (m_nPage == 1)
      return (
        <ArmsPage
          ArmSelection={setm_strArm}
          ArmPriceQty={setm_nArmQty}
          // ^ make the box work ↓ make it keep value
          ArmValue={m_strArm}
          ArmValueQty={m_nArmQty}
        ></ArmsPage>
      );
    else if (m_nPage == 2)
      return (
        <PositionersPage
          PositionerSelection={setm_strPositioner}
          PositionerPriceQty={setm_nPositionerQty}
          PositionerValue={m_strPositioner}
          PositionerValueQty={m_nPositionerQty}
        ></PositionersPage>
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
    else if (m_nPage == 7)
      return (
        <ToolingPage
          Tooling={setm_strTooling}
          ToolingPrice={setm_nToolingPrice}
          ToolingValue={m_strToolingValue}
          ToolingPriceValue={m_nToolingPriceValue}
        ></ToolingPage>
      );
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
    <div className="container ">
      <div className="col"></div>
      <Banner headerText="United Robotics Quote Generator" />
      {RenderPage()}
      <button
        onClick={() => Backward()}
        className="btn btn-danger btn-lg position-absolute bottom-0 start-0 col-2 mb-4 mx-4"
      >
        Back
      </button>
      <button
        onClick={() => Forward()}
        className="btn btn-primary btn-lg position-absolute bottom-0 end-0 col-2 mb-4 mx-4"
      >
        Next
      </button>

      {/* {Debug()} */}
    </div>
  );
};

export default Home;
