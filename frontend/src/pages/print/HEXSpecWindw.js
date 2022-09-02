import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {getHEX} from "../../actions/HEXs";
import { useDispatch, useSelector } from "react-redux";

const HEXSpecW = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const values = useSelector(state => state.productDetails);
    
    
    useEffect(() => {
      console.log(id);
      dispatch(getHEX(id));
      
  }, [dispatch, id]);
  return (
    <div className="pages">
        

      <table style={{width: "150mm"}}>
      <thead>
        <tr>
          <th colspan="6"  style={{ textAlign: "center", height:"20mm"}}>{values.model_name}</th>
        </tr>
      </thead>
      <tbody>
      <tr>
    <td colspan="2" width="26%">자중</td>
    <td width="24%">{values.operating_weight}㎏</td>

    <td rowspan="5" width="4%">무한궤도식</td>
    <td>슈폭</td>
    <td>{values.undercarriage?.shoe_width}㎜</td>

  </tr>
  <tr>
    <td colspan="2">최고속도</td>
    <td> {values.travel?.travel_speed}㎞/hr </td>
    <td>트랙중심간거리</td>
    <td>{values.undercarriage?.track_gap}㎜ </td>
  </tr>
  <tr>
    <td colspan="2">등판능력</td>
    <td> {values.travel?.greadability} </td>
    <td>텀블러중심간거리</td>
    <td>{values.undercarriage?.tumbler_distance} </td>
  </tr>
  <tr>
    <td rowspan="4" width="4%">외관</td>
    <td>길이</td>
    <td>{values.overall_length}</td>
    <td>트랙높이</td>
    <td>{values.undercarriage?.track_height} </td>
  </tr>
  <tr>
    <td>너비</td>
    <td>{values.overall_width} </td>
    <td>접지압</td>
    <td> {values.undercarriage?.ground_pressure} </td>
  </tr>
  <tr>
    <td>높이</td>
    <td>{values.overall_height} </td>
    <td rowspan="6">작업장치</td>
    <td>버켓(평적)</td>
    <td>{values.attachments?.bucket_struck} </td>
  </tr>
  <tr>
    <td>최저지상고</td>
    <td>{values.undercarriage?.ground_clearance} </td>
    <td>버켓(산적)</td>
    <td>{values.attachments?.bucket_heap} </td>
  </tr>
  <tr>
    <td rowspan="2">엔진</td>
    <td>형식</td>
    <td>{values.engine?.engine_name} </td>
    <td>붐길이</td>
    <td>{values.attachments?.boom_length}</td>
  </tr>
  <tr>
    <td>출력</td>
    <td>{values.engine?.power}ps@{values.engine?.nominal_rev}rpm</td>
    <td>암길이</td>
    <td>{values.attachments?.arm_length} </td>
  </tr>
  <tr>
    <td colspan="2">최대굴착깊이</td>
    <td>{values.attachments?.digging_reach} </td>
    <td>선회속도</td>
    <td> {values.swivel?.swing_rev} </td>
  </tr>
  <tr>
    <td colspan="2">최대굴착반지름</td>
    <td>{values.attachments?.digging_reach} </td>
    <td>배토판(너비x높이)</td>
    <td>{values.undercarriage?.dozer_size}</td>
  </tr>
  <tr>
    <td colspan="6">1. *표시 제원은 표준 장비 (표준 버켓, 퀵커플러 장착) 제원입니다.<br/>2. 규정용량 초과 작업을 삼가십시오<br/>3. 장비의 운전 및 정비시에는 사전에 반드시 취급 설명서를 숙지하십시오.</td>
  </tr>
      </tbody>
      </table>
    </div>
  );
};

export default HEXSpecW;
