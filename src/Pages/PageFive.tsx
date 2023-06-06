import { ListGroupItem } from "react-bootstrap";

const Five = (props: any) => {
  return (
    <div className="text-center col">
      <h1>Total:</h1>
      <h4>
        <div className="overflow-auto">
          <div className="mt-2">Arm: {props.Arm}</div>
          <div className="mt-2"> Arm Price: ${props.ArmPrice}</div>
          <div className="mt-2"> Positioner: {props.Positioners}</div>
          <div className="mt-2">Positioner Price: ${props.PositionerPrice}</div>
          <div className="mt-2">Welder Brand: {props.Brand}</div>
          <div className="mt-2">Welder Description: {props.Desc}</div>
          <div className="mt-2"> Welder Price: ${props.WelderPrice}</div>
          <div className="mt-2">Training: {props.Training}</div>
          <div className="mt-2">Integration: {props.Integration}</div>
          <div className="mt-2"> Programming: {props.Programming}</div>
        </div>
      </h4>
    </div>
  );
};

export default Five;
