import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/banner";

const One = (props: any) => {
  return (
    <div>
      <div className="text-center col">
        <h1>ABB Welding Arms</h1>
      </div>
      <select
        onChange={(e) => props.ArmSelection(e.target.value)}
        value={props.ArmValue}
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
              type="number"
              className="form-control"
              value={props.ArmValueQty}
              onChange={(e) => props.ArmPriceQty(e.target.value)}
            ></input>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default One;
