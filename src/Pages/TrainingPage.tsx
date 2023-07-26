import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/banner";

const Training = (props: any) => {
  return (
    <div>
      <div className="text-center col">
        <h1>Training</h1>
      </div>
      <h4>
        <div className="row mt-3">
          <div className="col-2">Description:</div>
          <div className="col ">
            <textarea
              value={props.TrainingValue}
              onChange={(e) => props.Training(e.target.value)}
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
              type="number"
              className="form-control"
              value={props.TrainingPriceValue}
              onChange={(e) => props.TrainingPrice(e.target.value)}
            ></input>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default Training;
