import React from "react";

// 퀵커플러 탈착

const GrossWeights = ({ values, config }) => {
  return (
    <div className="pages">
      <table className="bordertable">
        <thead>
          <tr className="borderheader">
            <th height="30mm">자체중량 및 총중량 </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <table className="innertable" height="90%" width="90%">
                <thead></thead>
                <tbody>
                  <tr>
                    <td colSpan="3">
                      ① “자체중량”이란 연료, 냉각수 및 윤활유 등을 가득 채우고
                      휴대 공구, 작업 용구 및 예비 타이어(예비 타이어를
                      장착하도록 한 건설기계에만 해당한다)를 싣거나 부착하고,
                      즉시 작업할 수 있는 상태에 있는 건설기계의 중량을 말한다.
                      이 경우 조종사의 체중은 제외하며, 타워크레인은 보조적인
                      지지ㆍ고정 등의 수단 없이 자체적인 힘으로 서 있을 수 있는
                      상태에서의 중량으로 한다.
                    </td>
                  </tr>
                  <tr>
                    <td width="30%">자체중량</td>
                    <td>{values?.operating_weight} ㎏</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      19. “운전중량”이란 자체중량에 건설기계의 조종에 필요한
                      최소의 조종사가 탑승한 상태의 중량을 말하며, 조종사 1명의
                      체중은 65킬로그램으로 본다.
                    </td>
                  </tr>
                  <tr>
                    <td>“운전중량”</td>
                    <td>{values?.operating_weight} + 65</td>
                    <td>{values.grossWeight} ㎏</td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      21. “총중량”이란 자체중량에 최대적재중량과 조종사를 포함한
                      승차인원의 체중을 합한 것을 말하며, 승차인원 1명의 체중은
                      65킬로그램으로 본다.
                    </td>
                  </tr>
                  <tr>
                    <td>“총중량”</td>
                    <td>
                      {values?.operating_weight} + 65 + 1500 ×{" "}
                      {values.attachments?.bucket_heap}{" "}
                    </td>
                    <td>{values?.grossWeight_load} ㎏</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GrossWeights;
