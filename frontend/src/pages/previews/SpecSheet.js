import { Paper } from "@mui/material";
import React from "react";


const SpecSheet = ({values}) => {
  
  return (
    <div>
        <style>{`
    table, tr, td {
     border:1px solid black;
    }
  `}</style>

  <Paper elevation= {2} style= {{
    padding: "10px"
  }}>
      <table width="100%">
        <tbody>
          <tr>
            <td width="30%">형식</td>
            <td width="20%"> {values.model_name}</td>
            <td width="30%">규격</td>
            <td>{values.machine_grade}</td>
          </tr>
          <tr>
            <td>자체중량 (㎏)</td>
            <td>{values.operating_weight}</td>
            <td>변속기</td>
            <td>{values.gearbox}</td>
          </tr>
          <tr>
            <td>최고속도 (㎞/hr)</td>
            <td> {values.travel?.travel_speed} </td>
            <td>엔진형식</td>
            <td>{values.engine?.engine_name} </td>
          </tr>
          <tr>
            <td>등판능력 (무부하)</td>
            <td> {values.travel?.greadability} </td>
            <td>출력(정격출력)</td>
            <td>
              {values.engine?.power}ps @ {values.engine?.nominal_rev}
              rpm
            </td>
          </tr>
          <tr>
    <td>길이 (㎜)</td>
    <td>{values.overall_length}</td>
    <td>최대토크(㎏ㆍm/rpm)</td>
    <td>
      {values.engine?.torque}㎏m @ {values.engine?.torque_rev}
      rpm
    </td>
  </tr>
  <tr>
    <td>너비 (㎜)</td>
    <td>{values.overall_width} </td>
    <td>기통수</td>
    <td>{values.engine?.cylinder}기통</td>
  </tr>
  <tr>
    <td>높이 (㎜)</td>
    <td>{values.overall_height} </td>
    <td>연료종류</td>
    <td>디젤 </td>
  </tr>
  <tr>
    <td>최저지상고 (㎜)</td>
    <td>{values.undercarriage?.ground_clearance} </td>
    <td>엔진제작사</td>
    <td>{values.engine?.supplier} </td>
  </tr>

  <tr>
    <td>슈폭 (㎜)</td>
    <td>{values.undercarriage?.shoe_width} </td>
    <td>트랙높이</td>
    <td>{values.undercarriage?.track_height} </td>
  </tr>
  <tr>
    <td>트랙중심간거리 (㎜)</td>
    <td>{values.undercarriage?.track_gap} </td>
    <td>텀블러중심간거리 (㎜)</td>
    <td>{values.undercarriage?.tumbler_distance} </td>
  </tr>
  <tr>
    <td>선회속도 (rpm)</td>
    <td> {values.swivel?.swing_rev} </td>
    <td>접지압(㎏/㎠)</td>
    <td> {values.undercarriage?.ground_pressure} </td>
  </tr>
  <tr>
    <td>버킷용량(평적) (㎥)</td>
    <td>{values.attachments?.bucket_struck} </td>
    <td>버킷용량(산적) (㎥)</td>
    <td>{values.attachments?.bucket_heap} </td>
  </tr>
  <tr>
    <td>붐의길이 (㎜)</td>
    <td>{values.attachments?.boom_length}</td>
    <td>암의길이 (㎜)</td>
    <td>{values.attachments?.arm_length} </td>
  </tr>
  <tr>
    <td>최대굴착반지름 (㎜)</td>
    <td>{values.attachments?.digging_reach} </td>
    <td>최대굴착깊이 (㎜)</td>
    <td>{values.attachments?.digging_depth}</td>
  </tr>
  <tr>
    
    <td>최대덤프높이 (㎜)</td>
    <td>{values.attachments?.loading_height} </td>
    <td>배토판너비x높이 (㎜)</td>
    <td>{values.undercarriage?.dozer_size}</td>
  </tr>
  <tr>
    <td>퀵 커플러 </td>
    <td>{values.attachments?.quick_coupler_1} {Math.max(values.attachments?.quick_coupler_weight_1, values.attachments?.quick_coupler_weight_2)}㎏</td>
    <td> </td>
    <td> </td>
  </tr>
          <tr>
            <td>형식승인연월일</td>
            <td> </td>
            <td>형식승인번호</td>
            <td>4-02-0{values?.registration_no} </td>
          </tr>
        </tbody>
      </table>
  </Paper>

    </div>
  );
};

export default SpecSheet;
