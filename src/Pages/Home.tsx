import react, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/banner";

import PageOne from "./PageOne";
import PageZero from "./PageZero";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";

const Home = () => {
  const [m_nPage, setm_nPage] = useState(0);

  const [m_strArm, setm_strArm] = useState("");
  const [m_nArmQty, setm_nArmQty] = useState(0);

  const [m_strPositioner, setm_strPositioner] = useState("");
  const [m_nPositionerQty, setm_nPositionerQty] = useState(0);

  const [m_strBrand, setm_strBrand] = useState("");
  const [m_strDesc, setm_strDesc] = useState("");
  const [m_nWelderQty, setm_nWelderQty] = useState(0);

  function Backward() {
    if (m_nPage == 0) return;
    setm_nPage(m_nPage - 1);
  }
  function Forward() {
    setm_nPage(m_nPage + 1);
  }

  function RenderPage() {
    if (m_nPage == 0) return <PageZero />;
    else if (m_nPage == 1)
      return (
        <PageOne
          ArmSelection={setm_strArm}
          ArmPriceQty={setm_nArmQty}
          ArmValue={m_strArm}
          ArmValueQty={m_nArmQty}
        ></PageOne>
      );
    else if (m_nPage == 2)
      return (
        <PageTwo
          PositionerSelection={setm_strPositioner}
          PositionerPriceQty={setm_nPositionerQty}
          PositionerValue={m_strPositioner}
          PositionerValueQty={m_nPositionerQty}
        ></PageTwo>
      );
    else if (m_nPage == 3)
      return (
        <PageThree
          Brand={setm_strBrand}
          Description={setm_strDesc}
          WelderPrice={setm_nWelderQty}
          BrandValue={m_strBrand}
          DescriptionValue={m_strDesc}
          WelderValue={m_nWelderQty}
        ></PageThree>
      );
    else if (m_nPage == 4) return <PageFour></PageFour>;
  }

  function Debug() {
    // return;
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
        <br></br>
        <br></br>
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

      {Debug()}
    </div>
  );
};

export default Home;
