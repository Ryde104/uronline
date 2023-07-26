import "bootstrap/dist/css/bootstrap.min.css";

const Options = (props: any) => {
  return (
    <div>
      <div className="text-center col">
        <h1>Options</h1>
      </div>
      <h4>
        <div className="row mt-3">
          <div className="col ">
            <select
              value={props.Options1Value}
              onChange={(e) => props.Options1(e.target.value)}
              className="form-control col-5 mt-3"
            >
              <option selected>Choose...</option>
              <option>somthing</option>
            </select>
          </div>
        </div>
      </h4>
      <h4>
        <div className="row mt-3">
          <div className="col-2">Price: $</div>
          <div className="col ">
            <input
              value={props.OptionsPriceValue}
              onChange={(e) => props.OptionsPrice(e.target.value)}
              className="form-control"
              type="number"
            ></input>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default Options;
