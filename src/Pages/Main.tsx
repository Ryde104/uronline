import react, { useState } from "react";
import "../App.css";

import Banner from "../components/Banner";

import InfoPage from "./InfoPage";
import HomePage from "./HomePage";

import WeldersPage from "./WeldersPage";

import TotalPage from "./TotalPage";

import { ChakraProvider } from "@chakra-ui/react";

import DesignPage from "./DesignPage";

import Arms from "../components/Arms";
import Positioners from "../components/Positioners";
import Welders from "../components/Welders";

const Home = () => {
  const [m_nPage, setm_nPage] = useState(0);

  const [artists, setArtists] = useState([]);

  //Company info page
  const [m_strFirstName, setm_strFirstName] = useState("");
  const [m_strLastName, setm_strLastName] = useState("");
  const [m_strCompany, setm_strCompany] = useState("");
  const [m_strQuoteN, setm_strQuoteN] = useState("");
  //date?
  const [m_strProjectDesc, setm_strProjectDesc] = useState("");

  //Design page
  const [m_aRobotArm, setm_aRobotArm] = useState([]);
  const [m_aPositioner, setm_aPositioner] = useState([]);
  const [m_aWelder, setm_aWelder] = useState([]);

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

  function AddRobotArm() {
    //setm_aRobotArms
    // let vRobotArm:CRobotArm[]  = m_aRobotArms;
    // let c: CRobotArm = new CRobotArm;
    // c.description = "test";
    // c.qty = 1;
    // vRobotArm.push(c);
    // alert("t");
    // setm_aRobotArms([...m_aRobotArms, vRobotArm])
    //set_array([...array, new_array]);
    //setm_aRobotArms(m_aRobotArms => [...m_aRobotArms, newValue])
    // setArtists( // Replace the state
    //   [ // with a new array
    //     ...artists, // that contains all the old items
    //     {  name: "name" } // and one new item at the end
    //   ]
    // );
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
        </>
      );
    else if (m_nPage == 2)
      return (
        <>
          <DesignPage></DesignPage>
          <Arms
            m_aRobotArm={m_aRobotArm}
            setm_aRobotArms={setm_aRobotArm}
          ></Arms>
          <Positioners
            m_aPositioner={m_aPositioner}
            setm_aPositioner={setm_aPositioner}
          ></Positioners>
          <Welders m_aWelder={m_aWelder} setm_aWelder={setm_aWelder}></Welders>
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
    else if (m_nPage == 4) return <></>;
    else if (m_nPage == 5) return <></>;
    else if (m_nPage == 6) return <></>;
    else if (m_nPage == 7) return <></>;
    else if (m_nPage == 8) return <></>;
    else if (m_nPage == 9) return <></>;
    else if (m_nPage == 10)
      return (
        <>
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
        </>
      );
    else if (m_nPage == 11) return <></>;
  }

  function Debug() {
    return (
      <div>
        page: {m_nPage}
        <br></br>
        <pre>
          First{JSON.stringify(m_strFirstName)} Last
          {JSON.stringify(m_strLastName)} Company{JSON.stringify(m_strCompany)}{" "}
          Quote#{JSON.stringify(m_strQuoteN)} Project_Desc
          {JSON.stringify(m_strProjectDesc)}
        </pre>
        <pre>RobotArms: {JSON.stringify(m_aRobotArm)}</pre>
        <pre>Positioners: {JSON.stringify(m_aPositioner)}</pre>
        <pre>Welder: {JSON.stringify(m_aWelder)}</pre>
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
