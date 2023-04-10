import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/banner";
import Quotes from "./components/quotes";
import { useState } from "react";
// import style from "./text";
import CQuote from "./models/Quote";
import PleaseWait from "./components/PleaseWait";
import './App.css';
import CProduct from './models/Product';

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
  const [m_nIRBP1000qty, setm_nIRBP1000qty] = useState("");
  const [m_nABBBullsEyeqty, setm_nABBBullsEyeqty] = useState("");
  const [m_nAbicorBinzelqty, setm_nAbicorBinzelqty] = useState("");
  const [m_nFroniusTPSi400qty, setm_nFroniusTPSi400qty] = useState("");
  const [m_nKeyencesafetyareascannersqty, setm_nKeyencesafetyareascannersqty] =
    useState("");
  const [m_nMinitecfencingsystemqty, setm_nMinitecfencingsystemqty] =
    useState("");
  const [m_nPushbuttonoperatorpanelsqty, setm_nPushbuttonoperatorpanelsqty] =
    useState("");
  const [m_ncablecoversqty, setm_ncablecoversqty] = useState("");
  const [m_nDigitalgasflowmeterqty, setm_nDigitalgasflowmeterqty] =
    useState("");
  const [m_nFroniusConsumablesqty, setm_nFroniusConsumablesqty] = useState("");
  const [m_nWirewizardconduitqty, setm_nWirewizardconduitqty] = useState("");
  const [m_nPendantarmorqty, setm_nPendantarmorqty] = useState("");
  const [m_nRemoteaccessmoduleqty, setm_nRemoteaccessmoduleqty] = useState("");
  const [m_nElectrodetouchsenseqty, setm_nElectrodetouchsenseqty] =
    useState("");
  const [m_nSafetyPLCqty, setm_nSafetyPLCqty] = useState("");

  const [m_bShowPleaseWait, setm_bShowPleaseWait] = useState(false);

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
    return <div className="container"><div className="row"><div className="col"><PleaseWait Show={m_bShowPleaseWait}></PleaseWait></div></div></div>
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
            <b>Company Name</b>
          </div>
          <div className="col">
            <input
              className="form-control"
              value={m_strCompanyName}
              onChange={(e) => setm_strCompanyName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row"><div className="col-2">&nbsp;</div></div>
        <div className="row">
          <div className="col-2">
            <b>Tooling Description</b>
          </div>
          <div className="col">
            <textarea
              className="form-control "
              value={m_strToolingDescription}
              onChange={(e) => setm_strToolingDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="row"><div className="col-2">&nbsp;</div></div>
        <div className="row">
          <div className="col-2">
            <b>Tooling Price</b>
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
        <div className="row"><div className="col-2">&nbsp;</div></div>
        <div className="row">
          <div className="col-2">
            <b>Options</b>
          </div>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">qty</th>
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
                      onChange={(e) => setm_nABBIRB4600qty(Number(e.target.value))}
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
                      onChange={(e) => setm_nIRBP1000qty(e.target.value)}
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
                      onChange={(e) => setm_nABBBullsEyeqty(e.target.value)}
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
                      onChange={(e) => setm_nAbicorBinzelqty(e.target.value)}
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
                      onChange={(e) => setm_nFroniusTPSi400qty(e.target.value)}
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
                        setm_nKeyencesafetyareascannersqty(e.target.value)
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
                        setm_nMinitecfencingsystemqty(e.target.value)
                      }
                    />
                  </th>
                  <td>
                    Minitec fencing system with interlocked door and pop up flash
                    screens
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nPushbuttonoperatorpanelsqty}
                      onChange={(e) =>
                        setm_nPushbuttonoperatorpanelsqty(e.target.value)
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
                      onChange={(e) => setm_ncablecoversqty(e.target.value)}
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
                      onChange={(e) => setm_nDigitalgasflowmeterqty(e.target.value)}
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
                      onChange={(e) => setm_nFroniusConsumablesqty(e.target.value)}
                    />
                  </th>
                  <td>
                    Fronius Consumables- tips, nozzles, spatter guards, diffusers,
                    liner, and coolant
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="number"
                      className=" "
                      value={m_nWirewizardconduitqty}
                      onChange={(e) => setm_nWirewizardconduitqty(e.target.value)}
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
                      onChange={(e) => setm_nPendantarmorqty(e.target.value)}
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
                      onChange={(e) => setm_nRemoteaccessmoduleqty(e.target.value)}
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
                      onChange={(e) => setm_nElectrodetouchsenseqty(e.target.value)}
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
                      onChange={(e) => setm_nSafetyPLCqty(e.target.value)}
                    />
                  </th>
                  <td>Safety PLC, electronic position switch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row"><div className="col-2">&nbsp;</div></div>
        <div className="row">
          <div className="col-2">
          </div>
          <div className="col">
            <button
              onClick={() => Process()}
              className="btn btn-success buttonwidth"
            >
              Generate
            </button>

          </div>
        </div>
        <div className="row"><div className="col-2">&nbsp;</div></div>
        <div className="row">
          <div className="col">
            <Quotes></Quotes>
          </div>

        </div>


      </div>
    );
};
export default App;
