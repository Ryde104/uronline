import "bootstrap/dist/css/bootstrap.min.css";

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
        <option>-</option>
        <option>IRBP A-250 Rotation/1180 Z-Rotation/900</option>
        <option>IRBP A-500/1000 Rotation/1000 Z-Rotation/950</option>
        <option>IRBP A-500/1450 Rotation/1450 Z-Rotation/950</option>
        <option>IRBP A-750/1000 Rotation/1000 Z-Rotation/950</option>
        <option>IRBP A-750/1450 Rotation/1450 Z-Rotation/950</option>
        <option>-</option>
        <option>IRBP B-250 Rotation/683 Z-Rotation/1786</option>
        <option>IRBP B-500 Rotation/1450 Z-Rotation/2620</option>
        <option>IRBP B-750 Rotation/1450 Z-Rotation/1620</option>
        <option>-</option>
        <option>IRBP C-500</option>
        <option>IRBP C-1000</option>
        <option>-</option>
        <option>IRBP D-600/1000 Span/1600 Rotation/1000</option>
        <option>IRBP D-600/1000 Span/2000 Rotation/1000</option>
        <option>IRBP D-600/1200 Span/1600 Rotation/1200</option>
        <option>IRBP D-600/1200 Span/2000 Rotation/1200</option>
        <option>-</option>
        <option>IRBP K-300/1000 Span/1600 Rotation/1000</option>
        <option>IRBP K-300/1000 Span/2000 Rotation/1000</option>
        <option>IRBP K-300/1000 Span/2500 Rotation/1000</option>
        <option>IRBP K-300/1000 Span/3150 Rotation/1000</option>
        <option>IRBP K-300/1000 Span/3500 Rotation/1000</option>
        <option>IRBP K-300/1000 Span/4000 Rotation/1000</option>
        <option>IRBP K-300/1200 Span/1600 Rotation/1200</option>
        <option>IRBP K-300/1200 Span/2000 Rotation/1200</option>
        <option>IRBP K-300/1200 Span/2500 Rotation/1200</option>
        <option>IRBP K-300/1200 Span/3150 Rotation/1200</option>
        <option>IRBP K-300/1200 Span/3500 Rotation/1200</option>
        <option>IRBP K-300/1200 Span/4000 Rotation/1200</option>
        <option>IRBP K-600/1200 Span/1600 Rotation/1200</option>
        <option>IRBP K-600/1200 Span/2000 Rotation/1200</option>
        <option>IRBP K-600/1200 Span/2500 Rotation/1200</option>
        <option>IRBP K-600/1200 Span/3150 Rotation/1200</option>
        <option>IRBP K-600/1200 Span/3500 Rotation/1200</option>
        <option>IRBP K-600/1200 Span/4000 Rotation/1200</option>
        <option>IRBP K-600/1400 Span/1600 Rotation/1400</option>
        <option>IRBP K-600/1400 Span/2000 Rotation/1400</option>
        <option>IRBP K-600/1400 Span/2500 Rotation/1400</option>
        <option>IRBP K-600/1400 Span/3150 Rotation/1400</option>
        <option>IRBP K-600/1400 Span/3500 Rotation/1400</option>
        <option>IRBP K-600/1400 Span/4000 Rotation/1400</option>
        <option>IRBP K-1000/1200 Span/1600 Rotation/1200</option>
        <option>IRBP K-1000/1200 Span/2000 Rotation/1200</option>
        <option>IRBP K-1000/1200 Span/2500 Rotation/1200</option>
        <option>IRBP K-1000/1200 Span/3150 Rotation/1200</option>
        <option>IRBP K-1000/1200 Span/3500 Rotation/1200</option>
        <option>IRBP K-1000/1200 Span/4000 Rotation/1200</option>
        <option>IRBP K-1000/1400 Span/1600 Rotation/1400</option>
        <option>IRBP K-1000/1400 Span/2000 Rotation/1400</option>
        <option>IRBP K-1000/1400 Span/2500 Rotation/1400</option>
        <option>IRBP K-1000/1400 Span/3150 Rotation/1400</option>
        <option>IRBP K-1000/1400 Span/3500 Rotation/1400</option>
        <option>IRBP K-1000/1400 Span/4000 Rotation/1400</option>
        <option>-</option>
        <option>IRBP L-300</option>
        <option>IRBP L-600</option>
        <option>IRBP L-1000</option>
        <option>IRBP L-2000</option>
        <option>IRBP L-5000</option>
        <option>-</option>
        <option>IRBP R-300/1000 Rotation/950 Span/1250</option>
        <option>IRBP R-300/1000 Rotation/950 Span/1600</option>
        <option>IRBP R-600/1000 Rotation/950 Span/1600</option>
        <option>IRBP R-600/1200 Rotation/1035 Span/1600</option>
        <option>IRBP R-1000/1000 Rotation/950 Span/2000</option>
        <option>IRBP R-1000/1200 Rotation/1035 Span/2000</option>
      </select>
      <h5>
        <div className="row mt-3">
          <div className="col-1 mt-1">Price: $</div>
          <div className="col ">
            <input
              value={props.PositionerValueQty}
              type="number"
              onChange={(e) => props.PositionerPriceQty(e.target.value)}
              className="form-control  col-1"
            ></input>
          </div>
        </div>
      </h5>
    </div>
  );
};

export default Two;
