import React from "react";

const WEXSpec = (values ) => {


  return (
    <div className="pages">
        

        [별지 제3호의2서식]
      <table style={{height: "270mm"}}>
      <thead>
        <tr>
          <th colSpan="6" height="50px" style={{ textAlign: "center"}}>건설기계 (타이어식 등) 제원표</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2" width="25%">형식승인(신고)자</td>
          <td colSpan="4">현대건설기계㈜</td>
        </tr>
        <tr>
          <td colSpan="2">건설기계명</td>
          <td width="25%">굴착기</td>
          <td colSpan="2" width="30%">제작회사(제작국)</td>
          <td>현대건설기계 <br/> (대한민국) </td>
        </tr>
        <tr>
          <td colSpan="2">형식</td>
          <td> { values.model_name }</td>
          <td colSpan="2">규격</td>
          <td>{ values.machine_grade }</td>
        </tr>
        <tr>
          <td colSpan="2">자체중량 (㎏)</td>
          <td>{ values.operating_weight }</td>
          <td colSpan="2">변속기</td>
          <td>{ values.gearbox }</td>
        </tr>
        <tr>
            <td colSpan="2">최고속도</td>
            <td> {values.travel?.travel_speed} </td>
            <td rowSpan="12" width="4%" className="vertical_cell">타이어식</td>
            <td>회전반경</td>
            <td> {values.travel?.turning_radius} </td>
          </tr>
          <tr>
            <td colSpan="2">등판능력</td>
              <td> {values.travel?.greadability} </td>
            <td>제동거리</td>
              <td> {values.travel?.braking_distance_max} </td>
          </tr>
          <tr>
            <td rowSpan="4" width="4%" className="vertical_cell">외 관</td>
            <td>길이 (㎜)</td>
          <td id="">{ values.overall_length }</td>
            <td>축거(1)&nbsp;&nbsp;(㎜)</td>
          <td id="">{ values.undercarriage?.wheel_base }</td>
          </tr>
          <tr>
            <td>너비 (㎜)</td>
          <td id="">{ values.overall_width } </td>
            <td>윤거(1)/(2)(㎜)</td>
          <td id="">{ values.undercarriage?.axle_track_front } / { values.undercarriage?.axle_track_rear } </td>
          </tr>
          <tr>
            <td>높이 (㎜)</td>
          <td id="">{ values.overall_height } </td>
            <td>타이어(1축)</td>
          <td id="">{ values.undercarriage?.tire_frontAxle }</td>
            
          </tr>
          <tr>
            <td>최저지상고 (㎜)</td>
          <td id="">{ values.undercarriage?.ground_clearance } </td>
            <td>타이어(2축)</td>
          <td id="">{ values.undercarriage?.tire_rearAxle }</td>
          
          </tr>
          <tr>
            <td rowSpan="6" className="vertical_cell">엔 진</td>
            <td>엔진 형식</td>
            <td>{ values.engine?.engine_name }</td>
            <td>공차 하중 (1축)</td>
              <td>{values.undercarriage?.axle_weight_front_unload} </td>
          </tr>
          <tr>
            <td>출력 (정격)</td>
            <td>{ values.engine?.power }ps @ { values.engine?.nominal_rev }rpm</td>
            <td>공차 하중 (2축)</td>
              <td>{values.undercarriage?.axle_weight_rear_unload} </td>
          </tr>
          <tr>
            <td>최대 토크</td>
            <td>{ values.engine?.torque }㎏m @ { values.engine?.torque_rev }rpm</td>
            <td>적재 하중 (1축)</td>
              <td>{values.undercarriage?.axle_weight_front_load} </td>
          </tr>
          <tr>
            <td>기통수</td>
          <td id="">{ values.engine?.cylinder }기통</td>
            <td>적재 하중 (2축)</td>
            <td>{values.undercarriage?.axle_weight_rear_load} </td>
          </tr>
          <tr>
            <td>연료 종류</td>
            <td>디젤</td>
            <td>한계 하중 (1축)</td>
            <td id="">{ values.undercarriage?.axle_weight_front_limit }</td>

          </tr>
          <tr>
            <td>제작사</td>
          <td id="">{ values.engine?.supplier } </td>
            <td>한계 하중 (2축)</td>
            <td id="">{ values.undercarriage?.axle_weight_rear_limit }</td>
            
          </tr>
          <tr>
            <td rowSpan="6" className="vertical_cell">작업장치</td>
            <td>버켓용량(평적)</td>
          <td id="">{ values.attachments?.bucket_struck } </td>
            <td colSpan="2">버켓용량(산적)</td>
          <td id="">{ values.attachments?.bucket_heap } </td>
          </tr>
          <tr>
            <td>붐의 길이</td>
          <td id="">{ values.attachments?.boom_length }</td>
            <td colSpan="2">암의 길이</td>
          <td id="">{ values.attachments?.arm_length } </td>
          </tr>
          <tr>
            <td>선회속도</td>
          <td id="">{ values.swivel?.swing_rev } </td>
            <td colSpan="2">최대굴착반지름</td>
            <td id="">{ values.attachments?.digging_reach } </td>
            
          </tr>
          <tr>
            <td>최대굴착깊이</td>
          <td id="">{ values.attachments?.digging_depth }</td>
            <td colSpan="2">최대덤프높이</td>
          <td id="">{ values.attachments?.loading_height } </td>
          </tr>
          <tr>
            <td>배토판너비 높이</td>
            <td colSpan="3"></td>
            <td></td>
          </tr>
          <tr>
            <td>퀵 커플러</td>
          <td colSpan="2" id="">{ values.attachments?.quick_coupler_1 } <br/> { values.attachments?.quick_coupler_2 }</td>
          <td >중량</td>
          <td id="">{ values.attachments?.quick_coupler_weight_1 } <br/> { values.attachments?.quick_coupler_weight_2 }</td>
          </tr>
          <tr>
            <td colSpan="2">비고</td>
          <td colSpan="4" id="">{ values.ETC }</td>
          </tr>
          <tr>
            <td colSpan="2">형식승인연월일</td>
            <td></td>
            <td colSpan="2">형식승인번호</td>
            <td></td>
          </tr>

      </tbody>
      </table>
    </div>
  );
};

export default WEXSpec;
