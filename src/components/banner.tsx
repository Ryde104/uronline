import "bootstrap/dist/css/bootstrap.min.css";

const titlestyle = {
  fontStyle: "italic",
  fontSize: "xx-large",
  color: "coral",
};

const Banner = (props: any) => {
  return (
    <header className="row mb-4 ">
      {/* <div className=" mt-3 col-7">
        <img src="./logo.png" alt="logo" width={200} className="logo " />
      </div>
      <div className="col-5 mt-4 " style={titlestyle}>
        {props.headerText}
      </div> */}
    </header>
  );
};

export default Banner;
