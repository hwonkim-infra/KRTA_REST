import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

// 퀵커플러 탈착

const TravelSpecHW = ({ values, config }) => {

  return (
    <>
      <MathJaxContext version={3} config={config}>
        <div className="pages" id="Travel_Spec">
          <table className="bordertable">
            <thead>
              <tr className="borderheader">
                <td height="30mm">주행 속도</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="head_description">
                  <p>
                    “최고속도”란 평탄하고 건조한 아스팔트 포장노면에서 운전중량
                    상태의 건설기계가 주행할 수 있는 최고속도를 말한다.
                  </p>
                  <p>
                    ▷ 아래 계산 결과에 따라{" "}
                    <strong>
                      {" "}
                      최고 주행 속도는 {values.travel?.travel_speed}㎞/h
                    </strong>
                  </p>
                  <p>○ 주행 성능 관련 사양</p>
                  <table className="innertable" width="80%" height="300px">
                    <thead>
                      <tr>
                        <th>항목</th>
                        <th>기호</th>
                        <th>단위</th>
                        <th>제원</th>
                        <th>비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>주행 펌프 유량</td>
                        <td>
                          <strong>
                            <i>Q</i>
                          </strong>
                        </td>
                        <td>l/min</td>
                        <td>{values.travel?.pump_displacement_travel}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>주행 모터 용적 효율</td>
                        <td>
                          <strong>
                            <i>
                              mu<sub>mv</sub>
                            </i>
                          </strong>
                        </td>
                        <td></td>
                        <td>{values.travel?.motor_eff_travel}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>트랜스미션 감속비</td>
                        <td>
                          <strong>
                            <i>
                              I<sub>t</sub>
                            </i>
                          </strong>
                        </td>
                        <td></td>
                        <td>{values.travel?.TM_reduction}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>액슬 감속비</td>
                        <td>
                          <strong>
                            <i>
                              I<sub>r</sub>
                            </i>
                          </strong>
                        </td>
                        <td></td>
                        <td>{values.travel?.axle_reduction}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>타이어 동하중 반경</td>
                        <td>
                          <strong>
                            <i>
                              R<sub></sub>
                            </i>
                          </strong>
                        </td>
                        <td>㎜</td>
                        <td>{values.travel?.tire_rolling_radius}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <p>○ 주행모터 회전속도에 따른 주행속도 계산</p>
                    <table className="innertable" width="100%" height="200px">
                      <tbody>
                        <tr>
                          <td className="item-headers" colSpan="3">
                            주행모터 축 회전수(rpm)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <MathJax>{`$$SM = \\frac{\\Q \\times \\mu_{mv}}{q} \\times 1,000$$`}</MathJax>
                          </td>
                          <td>
                            <MathJax>{`$$ \\frac{ ${values.travel?.pump_displacement_travel} \\times ${values.travel?.motor_eff_travel}}{${values.travel?.motor_displacement_travel} } \\times 1,000$$`}</MathJax>
                          </td>
                          <td>
                            <MathJax>{`$$${values.travel?.axle_motor_rev}$$`}</MathJax>
                          </td>
                        </tr>

                        <tr>
                          <td className="item-headers" colSpan="3">
                            주행속도 (km/hr)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <MathJax>{`$$V = \\frac {SM \\times 2\\pi R \\times 60}{I_t \\times I_r \\times 10^3}$$`}</MathJax>
                          </td>
                          <MathJax>{`$$V = \\frac {${values.travel?.axle_motor_rev} \\times 2\\pi \\cdot ${values.travel?.tire_rolling_radius} \\times 60}{${values.travel?.TM_reduction} \\times ${values.travel?.axle_reduction} \\times 10^3}$$`}</MathJax>

                          <td>
                            <MathJax>{`$$${values.travel?.travel_speed}$$`}</MathJax>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                </td>
                
              </tr>
            </tbody>
          </table>
        </div>

      </MathJaxContext>
    </>
  );
};

export default TravelSpecHW;
