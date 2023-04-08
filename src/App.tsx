import Banner from "./components/banner";
import Quotes from "./components/quotes";
import { useState } from "react";
// import style from "./text";
import CQuote from "./models/Quote";
import PleaseWait from "./components/PleaseWait";

const substyle = {
  fontWeight: "bold",
  fontSize: "large",
  color: "black",
};

const App = () => {
  const [m_strCompanyName, setm_strCompanyName] = useState("");
  const [m_strToolingDescription, setm_strToolingDescription] = useState("");
  const [m_dToolingPrice, setm_dToolingPrice] = useState("");

  const [m_nABBIRB4600qty, setm_nABBIRB4600qty] = useState("");
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
    v.products = [];
    setm_bShowPleaseWait(true);

    fetch(
      "https://uro.azurewebsites.net/api/Generate?code=xZAU_AK3AP7lyvzGO41ClqkaMUP-z1pwN9OnPmG7VJgHAzFuGtGlaA==",
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
    return <PleaseWait Show={m_bShowPleaseWait}></PleaseWait>;
  else
    return (
      <>
        <>
          <Banner headerText="United Robotics Quote Generator" />
        </>
        <>
          <div className="row mb-2">
            <div className="col-5 mt-2" style={substyle}>
              Company Name
            </div>
            <div className="col-3 mt-2" style={substyle}>
              <input
                className="form-control"
                value={m_strCompanyName}
                onChange={(e) => setm_strCompanyName(e.target.value)}
              ></input>
            </div>
            <div className="col-5 mt-2" style={substyle}>
              Tooling Descripion
            </div>
            <div className="col-3 mt-2" style={substyle}>
              <textarea
                className="form-control "
                value={m_strToolingDescription}
                onChange={(e) => setm_strToolingDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="col-5 mt-2" style={substyle}>
              Tooling price
            </div>
            <div className="col-3 mt-2" style={substyle}>
              <input
                className="form-control"
                type="number"
                value={m_dToolingPrice}
                onChange={(e) => setm_dToolingPrice(e.target.value)}
              ></input>
            </div>
          </div>

          {/* <SubText Text="Client Name" Text2="Tooling Descriptions" /> */}
        </>
        <>{/* <Box /> */}</>
        {/* <Price Text3="Tooling Price" /> */}
        {/* <List Text4="test"/>
      <List Text4="test2"/> */}

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
                  onChange={(e) => setm_nABBIRB4600qty(e.target.value)}
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

        <>
          <button
            onClick={() => Process()}
            className="btn btn-success buttonwidth"
          >
            Generate
          </button>
          {/* <Button /> */}
        </>
        <Quotes />

        {/* <pre>
        <code>{JSON.stringify(m_strCompanyName, null, 4)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(m_strToolingDescription, null, 4)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(m_dToolingPrice, null, 4)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(m_nSafetyPLCqty, null, 4)}</code>
      </pre> */}
      </>
    );
};
export default App;
