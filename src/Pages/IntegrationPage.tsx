import "bootstrap/dist/css/bootstrap.min.css";

const Integration = (props: any) => {
  return (
    <div>
      <div className="text-center col">
        <h1>Integration</h1>
      </div>
      <h4>
        <div className="row mt-3">
          <div className="col-2">Description:</div>
          <div className="col ">
            <textarea
              value={props.IntegrationValue}
              onChange={(e) => props.Integration(e.target.value)}
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
              value={props.IntegrationPriceValue}
              onChange={(e) => props.IntegrationPrice(e.target.value)}
              className="form-control"
              type="number"
            ></input>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default Integration;
