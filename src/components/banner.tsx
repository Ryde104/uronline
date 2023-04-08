const titlestyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

const Banner = (props: any) => {
  return (
    <header className="row mb-4">
      <div className="col-5 mt-2">
        <img src="./logo.png" alt="logo" className="logo" />
      </div>
      <div className="col-7 mt-5" style={titlestyle}>
        {props.headerText}
      </div>
    </header>
  );
};

export default Banner;
