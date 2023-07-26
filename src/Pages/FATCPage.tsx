import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/banner";

const FATC = (props: any) => {
  return (
    <div>
      <div className="text-center col">
        <h1>Functional Acceptance Testing & Criteria</h1>
      </div>
      <h4>
        <div className="row mt-3">
          <div className="col-2">Description:</div>
          <div className="col ">
            <textarea
              value={props.FATCValue}
              onChange={(e) => props.FATC(e.target.value)}
              className="form-control"
            ></textarea>
          </div>
        </div>
      </h4>
      <h4>
        <div className="row mt-3">
          <div className="col-2">Price: $</div>
          <div className="col ">
            <input
              value={props.FATCPriceValue}
              onChange={(e) => props.FATCPrice(e.target.value)}
              className="form-control"
              type="number"
            ></input>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default FATC;
