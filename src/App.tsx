import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/banner";
import Quotes from "./components/quotes";
import { useState } from "react";
// import style from "./text";
import CQuote from "./models/Quote";
import PleaseWait from "./components/PleaseWait";
import "./App.css";
import CProduct from "./models/Product";

const substyle = {
  fontWeight: "bold",
  fontSize: "large",
  color: "black",
};

const App = () => {
  const [m_strCompanyName, setm_strCompanyName] = useState("");
  const [m_strToolingDescription, setm_strToolingDescription] = useState("");
  const [m_dToolingPrice, setm_dToolingPrice] = useState("");

  const [m_nABBIRB4600qty, setm_nABBIRB4600qty] = useState(0);
  const [m_nIRBP1000qty, setm_nIRBP1000qty] = useState(0);
  const [m_nABBBullsEyeqty, setm_nABBBullsEyeqty] = useState(0);
  const [m_nAbicorBinzelqty, setm_nAbicorBinzelqty] = useState(0);
  const [m_nFroniusTPSi400qty, setm_nFroniusTPSi400qty] = useState(0);
  const [m_nKeyencesafetyareascannersqty, setm_nKeyencesafetyareascannersqty] =
    useState(0);
  const [m_nMinitecfencingsystemqty, setm_nMinitecfencingsystemqty] =
    useState(0);
  const [m_nPushbuttonoperatorpanelsqty, setm_nPushbuttonoperatorpanelsqty] =
    useState(0);
  const [m_ncablecoversqty, setm_ncablecoversqty] = useState(0);
  const [m_nDigitalgasflowmeterqty, setm_nDigitalgasflowmeterqty] = useState(0);
  const [m_nFroniusConsumablesqty, setm_nFroniusConsumablesqty] = useState(0);
  const [m_nWirewizardconduitqty, setm_nWirewizardconduitqty] = useState(0);
  const [m_nPendantarmorqty, setm_nPendantarmorqty] = useState(0);
  const [m_nRemoteaccessmoduleqty, setm_nRemoteaccessmoduleqty] = useState(0);
  const [m_nElectrodetouchsenseqty, setm_nElectrodetouchsenseqty] = useState(0);
  const [m_nSafetyPLCqty, setm_nSafetyPLCqty] = useState(0);

  const [m_bShowPleaseWait, setm_bShowPleaseWait] = useState(false);

  function Preset() {
    setm_nABBIRB4600qty(1);
    setm_nIRBP1000qty(1);
    setm_nABBBullsEyeqty(3);
    setm_nFroniusTPSi400qty(1);
    setm_nMinitecfencingsystemqty(2);
    setm_nDigitalgasflowmeterqty(7);
    setm_nSafetyPLCqty(2);
  }

  function Process() {
    let v: CQuote = new CQuote();
    v.companyName = m_strCompanyName;
    v.objectPrice = parseFloat(m_dToolingPrice);

    if (m_nABBIRB4600qty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "ABBIRB4600";
      cp.quantity = m_nABBIRB4600qty;
      v.products.push(cp);
    }
    if (m_nIRBP1000qty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "IRBP1000";
      cp.quantity = m_nIRBP1000qty;
      v.products.push(cp);
    }
    if (m_nABBBullsEyeqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "ABBBullsEye";
      cp.quantity = m_nABBBullsEyeqty;
      v.products.push(cp);
    }
    if (m_nAbicorBinzelqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "AbicorBinzel";
      cp.quantity = m_nAbicorBinzelqty;
      v.products.push(cp);
    }
    if (m_nFroniusTPSi400qty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "FroniusTPSi400";
      cp.quantity = m_nFroniusTPSi400qty;
      v.products.push(cp);
    }
    if (m_nKeyencesafetyareascannersqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "Keyencesafetyareascanners";
      cp.quantity = m_nKeyencesafetyareascannersqty;
      v.products.push(cp);
    }
    if (m_nMinitecfencingsystemqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "Minitecfencingsystem";
      cp.quantity = m_nMinitecfencingsystemqty;
      v.products.push(cp);
    }
    if (m_nPushbuttonoperatorpanelsqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "Pushbuttonoperatorpanels";
      cp.quantity = m_nPushbuttonoperatorpanelsqty;
      v.products.push(cp);
    }
    if (m_ncablecoversqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "cablecovers";
      cp.quantity = m_ncablecoversqty;
      v.products.push(cp);
    }
    if (m_nDigitalgasflowmeterqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "Digitalgasflowmeter";
      cp.quantity = m_nDigitalgasflowmeterqty;
      v.products.push(cp);
    }
    if (m_nFroniusConsumablesqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "FroniusConsumables";
      cp.quantity = m_nFroniusConsumablesqty;
      v.products.push(cp);
    }
    if (m_nWirewizardconduitqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "Wirewizardconduit";
      cp.quantity = m_nWirewizardconduitqty;
      v.products.push(cp);
    }
    if (m_nPendantarmorqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "Pendantarmor";
      cp.quantity = m_nPendantarmorqty;
      v.products.push(cp);
    }
    if (m_nRemoteaccessmoduleqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "Remoteaccessmoduleq";
      cp.quantity = m_nRemoteaccessmoduleqty;
      v.products.push(cp);
    }

    if (m_nElectrodetouchsenseqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "Electrodetouchsense";
      cp.quantity = m_nElectrodetouchsenseqty;
      v.products.push(cp);
    }
    if (m_nSafetyPLCqty > 0) {
      let cp: CProduct = new CProduct();
      cp.name = "SafetyPLC";
      cp.quantity = m_nSafetyPLCqty;
      v.products.push(cp);
    }
    function Preset() {}

    setm_bShowPleaseWait(true);

    fetch(
      "https://urobackend.azurewebsites.net/api/Generate?code=Zn_l26D_4pmfQeWaIgYVFs-99Uqp_dyT1fvb0kBtxzs_AzFuQfvWYA==",
      //"http://localhost:7210/api/Generate",
      {
        //fetch("http://localhost:7210/api/Generate", {
        method: "post",
        body: JSON.stringify(v),
      }
    )
      .then((res) => {
        setm_bShowPleaseWait(false);
      })
      .catch((error) => alert("Error! " + error.message));

    // alert(v.companyName);
  }

  if (m_bShowPleaseWait)
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <PleaseWait Show={m_bShowPleaseWait}></PleaseWait>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Banner headerText="United Robotics Quote Generator" />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <b>Company Name:</b>
          </div>
          <div className="col">
            <input
              className="form-control"
              value={m_strCompanyName}
              onChange={(e) => setm_strCompanyName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-2">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-2">
            <b>Tooling Description:</b>
          </div>
          <div className="col">
            <textarea
              className="form-control "
              value={m_strToolingDescription}
              onChange={(e) => setm_strToolingDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-2">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-2">
            <b>Tooling Price:</b>
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              value={m_dToolingPrice}
              onChange={(e) => setm_dToolingPrice(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-2">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-2 mt-2">
            <b>Options:</b>
          </div>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Quantity</th>
                  <th scope="col">Product</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nABBIRB4600qty}
                      onChange={(e) =>
                        setm_nABBIRB4600qty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>ABBIRB4600-20kg2.5-meterroboticweldingarm</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nIRBP1000qty}
                      onChange={(e) =>
                        setm_nIRBP1000qty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>IRB-P1000Lheadtailstockpositioners</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nABBBullsEyeqty}
                      onChange={(e) =>
                        setm_nABBBullsEyeqty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>ABB BullsEye tool alignment station</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nAbicorBinzelqty}
                      onChange={(e) =>
                        setm_nAbicorBinzelqty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>Abicor Binzel TCS-PP torch cleaning station</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nFroniusTPSi400qty}
                      onChange={(e) =>
                        setm_nFroniusTPSi400qty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>
                    Fronius TPSi 400 water cooled welding power source with PMC{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nKeyencesafetyareascannersqty}
                      onChange={(e) =>
                        setm_nKeyencesafetyareascannersqty(
                          Number(e.target.value)
                        )
                      }
                    />
                  </th>
                  <td>Keyence safety area scanners</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nMinitecfencingsystemqty}
                      onChange={(e) =>
                        setm_nMinitecfencingsystemqty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>
                    Minitec fencing system with interlocked door and pop up
                    flash screens
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nPushbuttonoperatorpanelsqty}
                      onChange={(e) =>
                        setm_nPushbuttonoperatorpanelsqty(
                          Number(e.target.value)
                        )
                      }
                    />
                  </th>
                  <td>Push button operator panels</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_ncablecoversqty}
                      onChange={(e) =>
                        setm_ncablecoversqty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>Set of cable covers, robot riser, and floor plates</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nDigitalgasflowmeterqty}
                      onChange={(e) =>
                        setm_nDigitalgasflowmeterqty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>Digital gas flow meter </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nFroniusConsumablesqty}
                      onChange={(e) =>
                        setm_nFroniusConsumablesqty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>
                    Fronius Consumables- tips, nozzles, spatter guards,
                    diffusers, liner, and coolant
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nWirewizardconduitqty}
                      onChange={(e) =>
                        setm_nWirewizardconduitqty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>Wire wizard conduit, fittings, and barrel cover</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nPendantarmorqty}
                      onChange={(e) =>
                        setm_nPendantarmorqty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>Pendant armor cover for teach pendant </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nRemoteaccessmoduleqty}
                      onChange={(e) =>
                        setm_nRemoteaccessmoduleqty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>Remote access module </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nElectrodetouchsenseqty}
                      onChange={(e) =>
                        setm_nElectrodetouchsenseqty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>Electrode touch sense </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nSafetyPLCqty}
                      onChange={(e) =>
                        setm_nSafetyPLCqty(Number(e.target.value))
                      }
                    />
                  </th>
                  <td>Safety PLC, electronic position switch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-2">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <button
              onClick={() => Process()}
              className="btn btn-success buttonwidth  mt={5}"
            >
              Generate
            </button>
            <button
              onClick={() => Preset()}
              className="btn btn-success buttonwidth "
            >
              Preset 1
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-2">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col">
            <Quotes></Quotes>
          </div>
        </div>
      </div>
    );
};
export default App;
