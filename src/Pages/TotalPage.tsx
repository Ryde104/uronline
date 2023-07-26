import { ListGroupItem } from "react-bootstrap";

const TotalPage = (props: any) => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Main</th>
            <th scope="col" colSpan={2}>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Arm</th>
            <td colSpan={2}>{props.Arm}</td>
            <td>${props.ArmPrice}</td>
          </tr>
          <tr>
            <th scope="row">Positioner</th>
            <td colSpan={2}>{props.Positioners}</td>
            <td>${props.PositionerPrice}</td>
          </tr>
          <tr>
            <th scope="row">Welder</th>
            <td colSpan={2}>{props.Brand}</td>
            <td>${props.WelderPrice}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Services</th>
            <th scope="col" colSpan={2}>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Training</th>
            <td colSpan={2}>{props.Training}</td>
            <td>${props.TrainingPrice}</td>
          </tr>
          <tr>
            <th scope="row">Integration</th>
            <td colSpan={2}>{props.Integration}</td>
            <td>${props.IntegrationPrice}</td>
          </tr>
          <tr>
            <th scope="row">Programming</th>
            <td colSpan={2}>{props.Brand}</td>
            <td>${props.WelderPrice}</td>
          </tr>
          <tr>
            <th scope="row">Tooling</th>
            <td colSpan={2}>{props.Brand}</td>
            <td>${props.WelderPrice}</td>
          </tr>
          <tr>
            <th scope="row">FAT&C</th>
            <td colSpan={2}>{props.Brand}</td>
            <td>${props.WelderPrice}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Options</th>
            <th scope="col" colSpan={2}>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Training</th>
            <td colSpan={2}>{props.Arm}</td>
            <td>${props.ArmPrice}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TotalPage;
