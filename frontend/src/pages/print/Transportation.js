import { Box } from "@mui/material";
import React from "react";

// 퀵커플러 탈착

const Transportation = ({ values }) => {
  const trailer_weight = 15;
  const trailer_length = 16.37;
  const trailer_width = 2.49;
  const trailer_height = 0.7;


  // const transport = values.keys(transport).map(keys =>  )

  /* 적재중량 */
  const trailer_1 = trailer_weight + (values.transport?.transport_1_weight/1000  || '') ;
  const trailer_2 = trailer_weight + (values.transport?.transport_2_weight/1000  || '');
  const trailer_3 = trailer_weight + (values.transport?.transport_3_weight/1000  || '');
  const trailer_4 = trailer_weight + (values.transport?.transport_4_weight/1000  || '');
  const trailer_5 = trailer_weight + (values.transport?.transport_5_weight/1000  || '');
  const trailer_6 = trailer_weight + (values.transport?.transport_6_weight/1000  || '');
  const trailer_7 = trailer_weight + (values.transport?.transport_7_weight/1000  || '');

  return (
    <>
        <div className="pages" id="Transportation">
          <table className="bordertable">
            <thead>
            <tr className="borderheader">
              <td height="30mm">도로에서의 수송</td>
            </tr>
            </thead>
            <tbody>

            <tr>
              <td className="head_description">
      <Box justifyContent="center" padding="10px" sx={{ width:"100%"}}>
              전체 운송 제원
                <table className="innertable" width="90%">
                  <thead>
                    <tr>
                    <th></th>
                    <th>건설기계</th>
                    <th>운송차량</th>
                    <th>운송제원</th>
                    <th>규제치</th>
                    <th>적합여부</th>
                    </tr>
                  </thead>
                  
                  <tbody>
              <tr>
                <td>길이(m)</td>
                <td>{ (values.overall_length/1000) }</td>
                <td>15.3</td>
                <td>{ (values.overall_length/1000 > 15.3) ?  values.overall_length/1000  : 15.3  }</td>
                <td>16.7</td>
                <td>{ (values.overall_length/1000 > 16.7) ? "초과"  :"적합" }</td>
              </tr>
              <tr>
                <td>너비(m)</td>
                <td>{ (values.overall_width/1000) }</td>
                <td>2.5</td>
                <td>{ (values.overall_width/1000 > 2.5) ? values.overall_width/1000 : 2.5  }</td>
                <td>2.5</td>
                <td>{ (values.overall_width/1000 > 2.5) ? "초과" :"적합" }</td>
              </tr>
              <tr>
                <td>높이(m)</td>
                <td>{ (values.overall_height/1000) }</td>
                <td>{ 0.7 } </td>
                <td>{ (values.overall_height/1000+0.7) }</td>
                <td>4.0</td>
                <td>{ (values.overall_height/1000 + 0.7 > 4.0) ? "초과" : "적합"  }</td>
              </tr>
              <tr>
                <td>총중량(ton)</td>
                <td>{ (values.operating_weight/1000) }</td>
                <td> { trailer_weight } </td>
                <td>{ (values.operating_weight/1000+trailer_weight) }</td>
                <td>40</td>
                <td>{ (values.operating_weight/1000 + trailer_weight > 40) ? "초과" : "적합"  }</td>
              </tr>
            </tbody>                 
                </table>
                </Box>
                <Box justifyContent="center" padding="10px" sx={{ width:"100%"}}>

 분리 운송 제원
                <table className="innertable" width="90%">
                  <thead>
                    
                  </thead>
                  
                  <tbody>
                  <tr>
                      <td colSpan="7">①트레일러({trailer_weight}ton) + {values.transport?.transport_1}</td>
                    </tr>
                    <tr>
                      <td>구분</td>
                      <td>단위</td>
                      <td>트레일러</td>
                      <td>적재</td>
                      <td>전체</td>
                      <td>규제기준</td>
                      <td>적합여부</td>
                    </tr>
                    
                    <tr>
                      <td>중량</td>
                      <td>ton</td>
                      <td>{trailer_weight}</td>
                      <td>{values.transport?.transport_1_weight/1000 || ''}</td>
                      <td>{trailer_1}</td>
                      <td>40</td>
                      <td>{trailer_1 > 40 ? '초과': '적합'}</td>
                    </tr>

                    <tr>
                      <td>길이</td>
                      <td rowSpan="3">m</td>
                      <td>{trailer_length} </td>
                      <td> - </td>
                      <td>{trailer_length}</td>
                      <td>16.7</td>
                      <td>{trailer_length > 16.7 ? '초과': '적합'}</td>
                    </tr>
                    
                    <tr>
                      <td>너비</td>
                      <td>{trailer_width} </td>
                      <td>{values.overall_width/1000 || ''}  </td>
                      <td>{Math.max(trailer_width, (values.overall_width/1000 || ''))}</td>
                      <td>2.5</td>
                      <td>{Math.max(trailer_width, (values.overall_width/1000 || '')) > 2.5 ? '초과': '적합'}</td>
                    </tr>

                    <tr>
                      <td>높이</td>
                      <td>{trailer_height} </td>
                      <td>{values.transport?.transport_1_height || ''}  </td>
                      <td>{(trailer_height + (values.transport?.transport_1_height || 0)).toFixed(1)}</td>
                      <td>4.0</td>
                      <td>{(trailer_height +  (values.transport?.transport_1_height || 0)) > 4.0 ? '초과': '적합'}</td>
                    </tr>
              
              
            </tbody>

                 
                </table>
                </Box>

                <Box justifyContent="center" padding="10px" sx={{ width:"100%"}}>

                <table className="innertable" width="90%">
                  <thead>
                    
                  </thead>
                  
                  <tbody>
                  <tr>
                      <td colSpan="7">②트레일러({trailer_weight}ton) + {values.transport?.transport_2}</td>
                    </tr>
                    <tr>
                      <td>구분</td>
                      <td>단위</td>
                      <td>트레일러</td>
                      <td>적재</td>
                      <td>전체</td>
                      <td>규제기준</td>
                      <td>적합여부</td>
                    </tr>
                    
                    <tr>
                      <td>중량</td>
                      <td>ton</td>
                      <td>{trailer_weight}</td>
                      <td>{values.transport?.transport_2_weight/1000  || ''}</td>
                      <td>{trailer_2}</td>
                      <td>40</td>
                      <td>{trailer_2 > 40 ? '초과': '적합'}</td>
                    </tr>

                    <tr>
                      <td>길이</td>
                      <td rowSpan="3">m</td>
                      <td>{trailer_length} </td>
                      <td> - </td>
                      <td>{trailer_length}</td>
                      <td>16.7</td>
                      <td>{trailer_length > 16.7 ? '초과': '적합'}</td>
                    </tr>
                    
                    <tr>
                      <td>너비</td>
                      <td>{trailer_width} </td>
                      <td>-  </td>
                      <td>-</td>
                      <td>2.5</td>
                      <td>{trailer_width > 2.5 ? '초과': '적합'}</td>
                    </tr>

                    <tr>
                      <td>높이</td>
                      <td>{trailer_height} </td>
                      <td>{values.transport?.transport_2_height || '-'}  </td>
                      <td>{(trailer_height + (values.transport?.transport_2_height || 0)).toFixed(1)}</td>
                      <td>4.0</td>
                      <td>{(trailer_height +  values.transport?.transport_2_height) > 4.0 ? '초과': '적합'}</td>
                    </tr>
              
              
            </tbody>

                 
                </table>
                </Box>

                

              </td>
            </tr>
            
            </tbody>
          </table>
        </div>


    </>
  );
};

export default Transportation;
