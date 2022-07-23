import { Form, Field } from "react-final-form";
import React from "react";
import { Table } from "react-bootstrap";

const StabilityCOG = () => {
  return (
    <>
    <Table>
        <thead>
            <tr>
                <th>Component</th>
                <th>중량 (kg)</th>
                <th>전후방향(X)</th>
                <th>좌우방향(Y)</th>
                <th>상하방향(Z)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>상부체(운전자 65kg)</td>
                <td>상부체중량</td>
                <td><Field component="input" className="form-control" name="COG.upperStructure.longitudinal" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.upperStructure.lateral" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.upperStructure.vertical" type="number" /> </td>
            </tr>
            <tr>
                <td>Counterweight</td>
                <td><Field component="input" className="form-control" name="COG.counterWeight.weight" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.counterWeight.longitudinal" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.counterWeight.lateral" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.counterWeight.vertical" type="number" /> </td>
            </tr>
            <tr>
                <td>하부체</td>
                <td><Field component="input" className="form-control" name="COG.underCarriage.weight" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.underCarriage.longitudinal" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.underCarriage.lateral" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.underCarriage.vertical" type="number" /> </td>
            </tr>
            <tr>
                <td>작업장치</td>
                <td><Field component="input" className="form-control" name="COG.attachments.weight" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.attachments.longitudinal" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.attachments.lateral" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.attachments.vertical" type="number" /> </td>
            </tr>
            <tr>
                <td>Total</td>
                <td>grossWeight</td>
                <td>전후COG </td>
                <td>좌우COG</td>
                <td>상하COG</td>
            </tr>

        </tbody>
    </Table>

    </>
  );
};

export default StabilityCOG;
