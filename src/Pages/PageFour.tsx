const Four = (props: any) => {
  return (
    <div className="text-center col">
      <h1>Options</h1>
      <h4>
        <div className="row mt-3">
          <div className="col-2">Brand:</div>
          <div className="col ">
            <input
              value={props.m_strBrand}
              onChange={(e) => props.m_strBrand(e.target.value)}
              className="form-control"
            ></input>
          </div>
        </div>
      </h4>
      <h4>
        <div className="row mt-3">
          <div className="col-2">Description:</div>
          <div className="col ">
            <textarea
              value={props.m_strBrand}
              onChange={(e) => props.m_strBrand(e.target.value)}
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
              value={props.m_strBrand}
              onChange={(e) => props.m_strBrand(e.target.value)}
              className="form-control"
              type="number"
            ></input>
          </div>
        </div>
      </h4>
      <h4>
        <div className="row mt-3">
          <div className="col-2">Image: </div>
          <div className="col ">
            <input
              value={props.m_strBrand}
              onChange={(e) => props.m_strBrand(e.target.value)}
              className="form-control"
              type="file"
            ></input>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default Four;
