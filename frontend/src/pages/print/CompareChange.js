import React, { useEffect, useState } from "react";
import HEXService from "../../services/HEXServices";
import { Box, Grid, Paper } from "@mui/material";
import parse from "html-react-parser";

const CompareChange = ({ values }) => {
  

  const [originData, setOriginData] = useState({});

  const getHEX = (id) => {
    HEXService.get(id)
      .then((response) => {
        setOriginData(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    console.log(values.origin);
    getHEX(values.origin);
  }, [values.origin]);

  const origin = originData;
  const originExterior = origin.drawings?.exterior || "";

  return (
    <>
    <div className="pages" id="Greadability_Spec">
          <table className="bordertable">
          <tr className="borderheader">
              <td height="30mm">형식 변경에 따른 변경 제원 비교</td>
            </tr>


    
      <Grid container justifyContent="center" padding="20px">
      <Paper variant="outlined" elevation={1} style= {{
      padding: "15px", width: '80%'
    }} className="content-editable" contenteditable="true">
      주요 형식 변경 사양:
      {values.ECN}

      </Paper>
      
      <table className="innertable" width="80%">
        <thead>
          <tr height="70">
          <th width="40%">제원 항목</th>
          <th width="30%">변경 전</th>
          <th>변경 후</th>
          </tr>
        </thead>
        <tbody>
          {origin.operating_weight !== values.operating_weight && (
            <tr height="50">
              <td>자체중량</td>
              <td>{origin?.operating_weight}</td>
              <td>{values?.operating_weight} </td>
            </tr>
          )}
          {origin.attachments?.boom_length !== values.attachments?.boom_length && (
            <tr height="50">
              <td>붐</td>
              <td>{origin.attachments?.boom_length}</td>
              <td>{values.attachments?.boom_length} </td>
            </tr>
          )}
          {origin.attachments?.arm_length !== values.attachments?.arm_length && (
            <tr height="50">
              <td>암</td>
              <td>{origin.attachments?.arm_length}</td>
              <td>{values.attachments?.arm_length} </td>
            </tr>
          )}
          {origin.attachments?.bucket_struck !== values.attachments?.bucket_struck && (
            <tr height="50">
              <td>버켓</td>
              <td>{origin.attachments?.bucket_struck} / {origin.attachments?.bucket_heap}</td>
              <td>{values.attachments?.bucket_struck} / {values.attachments?.bucket_heap} </td>
            </tr>
          )}
          {origin.attachments?.quick_coupler_1 !== values.attachments?.quick_coupler_1 && (
            <tr height="50">
              <td>퀵 커플러</td>
              <td>{origin.attachments?.quick_coupler_1}</td>
              <td>{values.attachments?.quick_coupler_1} </td>
            </tr>
          )}
          {origin.overall_length !== values.overall_length && (
            <tr height="50">
              <td>길이</td>
              <td>{origin?.overall_length}</td>
              <td>{values?.overall_length} </td>
            </tr>
          )}
          {origin.overall_width !== values.overall_width && (
            <tr height="50">
              <td>너비</td>
              <td>{origin?.overall_width}</td>
              <td>{values?.overall_width} </td>
            </tr>
          )}
          {origin.overall_height !== values.overall_height && (
            <tr height="50">
              <td>높이</td>
              <td>{origin?.overall_height}</td>
              <td>{values?.overall_height} </td>
            </tr>
          )}
          {origin.attachments?.digging_reach !== values.attachments?.digging_reach && (
            <tr height="50">
              <td>최대굴착반경</td>
              <td>{origin.attachments?.digging_reach}</td>
              <td>{values.attachments?.digging_reach} </td>
            </tr>
          )}
          {origin.attachments?.digging_depth !== values.attachments?.digging_depth && (
            <tr height="50">
              <td>최대굴착깊이</td>
              <td>{origin.attachments?.digging_depth}</td>
              <td>{values.attachments?.digging_depth} </td>
            </tr>
          )}
          {origin.attachments?.loading_height !== values.attachments?.loading_height && (
            <tr height="50">
              <td>최대덤프높이</td>
              <td>{origin.attachments?.loading_height}</td>
              <td>{values.attachments?.loading_height} </td>
            </tr>
          )}
          {origin.undercarriage?.ground_pressure !== values.undercarriage?.ground_pressure && (
            <tr height="50">
              <td>접지압</td>
              <td>{origin.undercarriage?.ground_pressure}</td>
              <td>{values.undercarriage?.ground_pressure} </td>
            </tr>
          )}
          {origin.undercarriage?.shoe_width !== values.undercarriage?.shoe_width && (
            <tr height="50">
              <td>슈폭</td>
              <td>{origin.undercarriage?.shoe_width}</td>
              <td>{values.undercarriage?.shoe_width} </td>
            </tr>
          )}
          {origin.travel?.travel_speed !== values.travel?.travel_speed && (
            <tr height="50">
              <td>최고속도</td>
              <td>{origin.travel?.travel_speed}</td>
              <td>{values.travel?.travel_speed} </td>
            </tr>
          )}
          {origin.swivel?.swing_rev !== values.swivel?.swing_rev && (
            <tr height="50">
              <td>선회속도</td>
              <td>{origin.swivel?.swing_rev}</td>
              <td>{values.swivel?.swing_rev} </td>
            </tr>
          )}
          {origin.travel?.greadability !== values.travel?.greadability && (
            <tr height="50">
              <td>등판능력</td>
              <td>{origin.travel?.greadability}</td>
              <td>{values.travel?.greadability} </td>
            </tr>
          )}
          
          {origin.engine?.engine_name !== values.engine?.engine_name && (
            <tr height="50">
              <td>엔진형식</td>
              <td>{origin.engine?.engine_name}</td>
              <td>{values.engine?.engine_name} </td>
            </tr>
          )}
          {origin.engine?.power !== values.engine?.power && (
            <tr height="50">
              <td>엔진출력</td>
              <td>{origin.engine?.power}</td>
              <td>{values.engine?.power} </td>
            </tr>
          )}
          <tr contenteditable="true" height="50">
              <td></td>
              <td></td>
              <td></td>
            </tr>
          
        </tbody>
      </table>
      </Grid>
    </table>
    </div>
    <div className="pages">
        <table className="bordertable">
          <thead>
            <tr className="borderheader">
              <td height="30mm">외관도(최초)</td>
            </tr>
          </thead>
          <tbody>
            <tr>{parse(originExterior)}</tr>
          </tbody>
        </table>
      </div>

    </>

  );
};

export default CompareChange;
