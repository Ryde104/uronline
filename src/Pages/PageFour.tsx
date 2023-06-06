const Four = (props: any) => {
  return (
    <div className="text-center col">
      <h1>Services</h1>
      <h4>
        <div className="row mt-3">
          <div className="col-2">Training:</div>
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
          <div className="col-2">Integration:</div>
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
          <div className="col-2">Programming:</div>
          <div className="col ">
            <textarea
              value={props.ProgrammingValue}
              onChange={(e) => props.Programming(e.target.value)}
              className="form-control"
            ></textarea>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default Four;
