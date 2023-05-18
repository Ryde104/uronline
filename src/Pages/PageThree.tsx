const Three = (props: any) => {
  return (
    <div className="text-center col">
      <h1>Welders</h1>
      <h4>
        <div className="row mt-3">
          <div className="col-1">Brand:</div>
          <div className="col ">
            <input
              value={props.m_strBrand}
              onChange={(e) => props.m_strBrand(e.target.value)}
              className="form-control"
            ></input>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default Three;
