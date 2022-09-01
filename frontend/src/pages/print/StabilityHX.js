import React from "react";
import {  Grid, Paper } from "@mui/material";
import { MathJax, MathJaxContext } from "better-react-mathjax";



const StabilityHX = ({ values, config }) => {

   

    let COG_longitudinal=Math.round((values.COG?.baseMachine_longitudinal * (values.grossWeight - values.COG?.attachments_weight) + values.COG?.attachments_weight * values.COG?.attachments_maxReach_longitudinal)/ values.grossWeight, 1); 

let excavating_limit = Math.round(values.grossWeight * (values.COG?.tipping_line + values.COG?.COG_longitudinal ) / (values.COG?.bucket_COS - values.COG?.tipping_line)); 
let bucket_exca_capa=values.attachments?.bucket_heap * 1800;

  return (
    <>
        <MathJaxContext version={3} config={config}>

        <div className="pages" id="ground_pressure">
          <table className="bordertable">
            <thead>
              <tr className="borderheader">
                <td height="30mm">전도안정도</td>
              </tr>
            </thead>
            <Grid container justifyContent="center" padding="20px">
      <Paper variant="outlined" elevation={1} style= {{
      padding: "15px", width: '80%'
    }}>
      <p>안정도 취약 자세인 측방굴착자세 기준</p>
                <p>안정적으로 굴착가능한 최대 굴착중량: <span id="">
                        { excavating_limit  }㎏
                    </span> </p>
                <p>장착한 버켓 용량에 따른 실굴착중량: <span id="">
                        { values.attachments?.bucket_heap } (산적용량)
                    </span> × 1500 (토사 표준 비중) = <span id="">
                        { bucket_exca_capa }㎏
                    </span> </p>

      </Paper>
      <table width="100%">
                    <thead>
                        <tr>
                            <th colspan="5">
                                <img src="/images/HEX_maxReach.png" alt="maxReach" width="90%" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>항목</th>
                            <th>기호</th>
                            <th>단위</th>
                            <th>제원</th>
                            <th>비고</th>
                        </tr>
                        <tr>
                            <td>장비 총 중량</td>
                            <td><strong><i>W<sub>T</sub> </i></strong></td>
                            <td>㎏</td>
                            <td>
                                { values.grossWeight }
                            </td>
                            <td>운전자 65kg</td>
                        </tr>
                        <tr>
                            <td>선회중심에서 장비 무게 중심 간 거리</td>
                            <td><strong><i>X<sub>T</sub> </i></strong></td>                            
                            <td>㎜</td>
                            <td>
                                { COG_longitudinal }
                            </td>
                            <td>-값: 작업장치 방향</td>
                        </tr>
                        <tr>
                            <td>선회중심에서 버켓 (최대굴착거리) 간 거리</td>                            
                            <td><strong><i>X<sub>0</sub> </i></strong></td>
                            <td>㎜</td>
                            <td>
                                { values.COG?.bucket_COS }
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>선회중심에서 장비 전도지선 간 거리</td>
                            <td><strong><i>L<sub>1</sub> </i></strong></td>
                            <td>㎜</td>
                            <td>
                                { values.COG?.tipping_line }
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>굴착 용량 (장착한 버켓 기준)</td>
                            <td></td>
                            <td>㎥</td>
                            <td>
                                { values.attachments?.bucket_heap * 1500 }
                            </td>
                            <td>산적</td>
                        </tr>
                    </tbody>


                </table>
                <p>측방굴착자세 굴착용량 계산</p>
                <table  width="100%">
                    <thead>
                        <tr>
                            <th colspan="2">산식</th>
                            <th>굴착한계(㎏)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td><MathJax>{`$$W_L = W_T\\frac{L_1 + X_T}{L - L_1}$$`}</MathJax></td>
                          <td><MathJax>{`$$ ${values.grossWeight} \\times \\frac{ ${values.COG?.tipping_line} + ${COG_longitudinal} }{${values.COG?.bucket_COS} - ${values.COG?.tipping_line}}$$`}</MathJax></td>
                            <td>{ excavating_limit } </td>
                        </tr>
                    </tbody>
                </table>

      </Grid>
          </table>
        </div>
        </MathJaxContext>
    </>
  );
};

export default StabilityHX;
