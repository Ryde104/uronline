import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/banner";

const Two = (props: any) => {
  return (
    <div>
      <div className="text-center col">
        <h1>ABB Welding Positioners</h1>
      </div>
      <select
        value={props.PositionerValue}
        onChange={(e) => props.PositionerSelection(e.target.value)}
        className="form-control col-5 mt-3"
        id="inputGroupSelect01"
      >
        <option selected>Choose...</option>
        <option>IRBP K-300/1000</option>
        <option>IRBP K-300/1200</option>
        <option>IRBP K-600/1200</option>
      </select>
      <h4>
        <div className="row mt-3">
          <div className="col-1">Price: $</div>
          <div className="col ">
            <input
              value={props.PositionerValueQty}
              type="number"
              onChange={(e) => props.PositionerPriceQty(e.target.value)}
              className="form-control  col-1"
            ></input>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default Two;
