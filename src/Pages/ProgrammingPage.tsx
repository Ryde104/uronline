import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/banner";

const Programming = (props: any) => {
  return (
    <div>
      <div className="text-center col">
        <h1>Programming</h1>
      </div>
      <h4>
        <div className="row mt-3">
          <div className="col-2">Description:</div>
          <div className="col ">
            <textarea
              value={props.ProgrammingValue}
              onChange={(e) => props.Programming(e.target.value)}
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
              value={props.ProgrammingPriceValue}
              onChange={(e) => props.ProgrammingPrice(e.target.value)}
              className="form-control"
              type="number"
            ></input>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default Programming;
