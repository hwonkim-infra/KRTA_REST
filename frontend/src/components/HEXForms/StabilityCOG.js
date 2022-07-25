import { Field } from "react-final-form";
import React from "react";
import { Table } from "react-bootstrap";

const StabilityCOG = (values) => {
    let GrossWeight=values.operating_weight + 65;
let GrossWeight_load = values.operating_weight + 65 + 1500 * values.attachments_bucket_heap;
let attachments_load_weight = values.COG?.attachments_weight + 1500 * values.attachments_bucket_heap;

let upperStructure_weight=values.grossWeight - values.COG?.counterWeight_weight - values.COG?.underCarriage_weight - values.COG?.attachments_weight;
// default Config.
let COG_longitudinal=Math.round((upperStructure_weight*values.COG?.upperStructure_longitudinal + values.COG?.counterWeight_weight*values.COG?.counterWeight_longitudinal+values.COG?.underCarriage_weight*values.COG?.underCarriage_longitudinal+values.COG?.attachments_weight*values.COG?.attachments_longitudinal)/ GrossWeight, 1); 

let COG_lateral = Math.round((upperStructure_weight*values.COG?.upperStructure_lateral+values.COG?.counterWeight_weight*values.COG?.counterWeight_lateral+values.COG?.underCarriage_weight*values.COG?.underCarriage_lateral+values.COG?.attachments_weight*values.COG?.attachments_lateral)/
GrossWeight, 1); 

let COG_vertical = Math.round((upperStructure_weight*values.COG?.upperStructure_vertical+values.COG?.counterWeight_weight*values.COG?.counterWeight_vertical+values.COG?.underCarriage_weight*values.COG?.underCarriage_vertical+values.COG?.attachments_weight*values.COG?.attachments_vertical)/ GrossWeight, 1) ; 

// attachments_load
let COG_longitudinal_load = ((upperStructure_weight*values.COG?.upperStructure_longitudinal+values.COG?.counterWeight_weight*values.COG?.counterWeight_longitudinal+values.COG?.underCarriage_weight*values.COG?.underCarriage_longitudinal+attachments_load_weight*values.COG?.attachments_load_longitudinal)/ GrossWeight_load, 1) ; 

let COG_lateral_load  = COG_lateral; 

let COG_vertical_load  = Math.round((upperStructure_weight*values.COG?.upperStructure_vertical+values.COG?.counterWeight_weight*values.COG?.counterWeight_vertical+values.COG?.underCarriage_weight*values.COG?.underCarriage_vertical+attachments_load_weight*values.COG?.attachments_load_vertical)/ GrossWeight_load, 1); 


// attachments_maxReach
let COG_longitudinal_maxReach = Math.round((upperStructure_weight*values.COG?.upperStructure_longitudinal+values.COG?.counterWeight_weight*values.COG?.counterWeight_longitudinal+values.COG?.underCarriage_weight*values.COG?.underCarriage_longitudinal+attachments_load_weight*values.COG?.attachments_maxReach_longitudinal)/ GrossWeight_load, 1); 

let COG_lateral_maxReach  = COG_lateral; 

let COG_vertical_maxReach  = Math.round((upperStructure_weight*values.COG?.upperStructure_vertical+values.COG?.counterWeight_weight*values.COG?.counterWeight_vertical+values.COG?.underCarriage_weight*values.COG?.underCarriage_vertical+attachments_load_weight*values.COG?.attachments_maxReach_vertical)/ GrossWeight_load, 1); 


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
                <td>{upperStructure_weight}</td>
                <td><Field component="input" className="form-control" name="COG.upperStructure_longitudinal" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.upperStructure_lateral" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.upperStructure_vertical" type="number" /> </td>
            </tr>
            <tr>
                <td>Counterweight</td>
                <td><Field component="input" className="form-control" name="COG.counterWeight_weight" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.counterWeight_longitudinal" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.counterWeight_lateral" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.counterWeight_vertical" type="number" /> </td>
            </tr>
            <tr>
                <td>하부체</td>
                <td><Field component="input" className="form-control" name="COG.underCarriage_weight" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.underCarriage_longitudinal" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.underCarriage_lateral" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.underCarriage_vertical" type="number" /> </td>
            </tr>
            <tr>
                <td rowSpan="3">작업장치</td>
                <td><Field component="input" className="form-control" name="COG.attachments_weight" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.attachments_longitudinal" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.attachments_lateral" type="number" /> </td>
                <td><Field component="input" className="form-control" name="COG.attachments_vertical" type="number" /> </td>
            </tr>
            <tr>
                <td> 덤프 자세 </td>
                <td><Field component="input" className="form-control" name="COG.attachments_load_longitudinal" type="number" /> </td>
                <td>↑ </td>
                <td><Field component="input" className="form-control" name="COG.attachments_load_vertical" type="number" /> </td>
            </tr>
            <tr>
                <td> 최대 반지름 </td>
                <td><Field component="input" className="form-control" name="COG.attachments_maxReach_longitudinal" type="number" /> </td>
                <td>↑</td>
                <td><Field component="input" className="form-control" name="COG.attachments_maxReach_vertical" type="number" /> </td>
            </tr>
            
            <tr>
                <td>Total</td>
                <td>{values.grossWeight} </td>
                <td>{COG_longitudinal} </td>
                <td>{COG_lateral} </td>
                <td>{COG_vertical}</td>
            </tr>

        </tbody>
    </Table>

    </>
  );
};

export default StabilityCOG;
