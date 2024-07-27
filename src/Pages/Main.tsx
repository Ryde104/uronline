import react, { useState } from "react";
import "../App.css";
//import Banner from "../components/Banner";
import InfoPage from "./InfoPage";
import HomePage from "./HomePage";
import { Button, ChakraProvider } from "@chakra-ui/react";
import DesignPage from "./DesignPage";
import Arms from "../components/Arms";
import Positioners from "../components/Positioners";
import Welders from "../components/Welders";
import Options from "./ServicesPage";
import Tooling from "../components/Tooling";
import Training from "../components/Training";
import Installation from "../components/Installation";
import ExtrasPage from "./ExtrasPage";
import FinalPage from "./FinalPage";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import TotalPage from "../components/Total";
import Total from "../components/Total";
import Banner from "../components/Banner";
import axios from "axios";
import CRobotArm from "../classes/CRobotArm";
//import Banner from "../components/Banner";

const Home = () => {
  const [m_nPage, setm_nPage] = useState(0);

  //Company info page
  const [m_strFirstName, setm_strFirstName] = useState("");
  const [m_strLastName, setm_strLastName] = useState("");
  const [m_strCompany, setm_strCompany] = useState("");
  const [m_strQuoteN, setm_strQuoteN] = useState("");
  const [m_strDate, setm_strDate] = useState("");
  const [m_strProjectTitle, setm_strProjectTitle] = useState("");

  //Design page
  const [m_aRobotArm, setm_aRobotArm] = useState([]);
  const [m_aPositioner, setm_aPositioner] = useState([]);
  const [m_aWelder, setm_aWelder] = useState([]);

  //Options page
  const [m_aTooling, setm_aTooling] = useState([]);
  const [m_aTraining, setm_aTraining] = useState([]);
  const [m_aInstallation, setm_aInstallation] = useState([]);

  //Extras page
  const [m_strProjectDesc, setm_strProjectDesc] = useState("");

  // const [artists, setArtists] = useState([]);

 
  function GetArm(v:CRobotArm)
  {
    return '{"description":"'+v.description+'", "qty":'+v.qty+',"price":'+v.price+'}';
  }
  
  function Create() {

    let strJSON = '{"robotarms":[';
    strJSON += m_aRobotArm.map(v => GetArm(v))
    strJSON += ']}';

    //alert(strJSON);
    axios.post('http://127.0.0.1:5000/Create', JSON.parse(strJSON))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });





  }

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
            Date={setm_strDate}
            DateValue={m_strDate}
            ProjectTitle={setm_strProjectTitle}
            ProjectTitleValue={m_strProjectTitle}
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
        <>
          <Options></Options>
          <Tooling
            m_aTooling={m_aTooling}
            setm_aTooling={setm_aTooling}
          ></Tooling>
          <Training
            m_aTraining={m_aTraining}
            setm_aTraining={setm_aTraining}
          ></Training>
          <Installation
            m_aInstallation={m_aInstallation}
            setm_aInstallation={setm_aInstallation}
          ></Installation>
        </>
      );
    else if (m_nPage == 4)
      return (
        <>
          <ExtrasPage
            ProjectDesc={setm_strProjectDesc}
            ProjectDescValue={m_strProjectDesc}
          ></ExtrasPage>
        </>
      );
    else if (m_nPage == 5)
      return (
        <>
          <FinalPage></FinalPage>
          <Total CreateButton={Create}></Total>
        </>
      );
    else if (m_nPage == 6) return;
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
          {JSON.stringify(m_strProjectTitle)}
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

        {m_nPage > 0 && (
          <Button
            onClick={() => Backward()}
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
            onClick={() => Forward()}
            variant="solid"
            size="lg"
            colorScheme="linkedin"
            rightIcon={<ArrowForwardIcon />}
            mt="2"
          >
            Forward
          </Button>
        )}

        {Debug()}
      </div>
    </ChakraProvider>
  );
};

export default Home;
