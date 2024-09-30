import "bootstrap/dist/css/bootstrap.min.css";

const Banner = (props: any) => {
  return (
    <header className="row mb-4">
      <div className="mt-3 col-7">
        <img src="./logo.png" alt="logo" width={200} className="logo" />
      </div>
      <div className="col-5 mt-4">
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700' }}>{props.headerText}</h1> {/* Adjust font size and weight */}
      </div>
    </header>
  );
};

export default Banner;
