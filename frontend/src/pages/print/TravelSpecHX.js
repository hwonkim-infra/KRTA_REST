import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Card } from "@mui/material";

// 퀵커플러 탈착

const TravelSpecHX = ({ values, config }) => {
  const TM_rev_1 =
    Math.round(
      ((values.travel?.pump_displacement * values.travel?.TM_mv) /
        (values.travel?.TM_flow_1 * values.travel?.reduc)) *
        1000 *
        100
    ) / 100;
  const TM_rev_2 =
    Math.round(
      ((values.travel?.pump_displacement * values.travel?.TM_mv) /
        (values.travel?.TM_flow_2 * values.travel?.reduc)) *
        1000 *
        100
    ) / 100;

  const travel_speed_1 =
    Math.round(
      ((TM_rev_1 * 2 * Math.PI * values.travel?.sprocket_radius * 60) /
        10 ** 6) *
        100
    ) / 100;
  const travel_speed_2 =
    Math.round(
      ((TM_rev_2 * 2 * Math.PI * values.travel?.sprocket_radius * 60) /
        10 ** 6) *
        100
    ) / 100;

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
                  ▷ 아래 계산 결과에 따라{" "}
                  <strong>
                    {" "}
                    최고 주행 속도는 {values.travel?.travel_speed}㎞/h
                  </strong>
                </p>
                <p>○ 주행 성능 관련 사양</p>
                <table className="innertable" width="80%" height="50%">
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th></th>
                      <th>단위</th>
                      <th>사양</th>
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
                      <td>{values.travel?.pump_displacement}</td>
                      <td>선회 rpm</td>
                    </tr>
                    <tr>
                      <td>모터 이론 용적(1속)</td>
                      <td>
                        <strong>
                          <i>
                            Q<sub>m1</sub>{" "}
                          </i>
                        </strong>
                      </td>
                      <td>cc/rev</td>
                      <td>{values.travel?.TM_flow_1}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>모터 이론 용적(2속)</td>
                      <td>
                        <strong>
                          <i>
                            Q<sub>m2</sub>{" "}
                          </i>
                        </strong>
                      </td>
                      <td>cc/rev</td>
                      <td>
                        {values.travel?.TM_flow_2 || values.travel?.TM_flow_1}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>스프로켓 반경</td>
                      <td>
                        <strong>
                          <i>
                            R<sub></sub>{" "}
                          </i>
                        </strong>
                      </td>
                      <td></td>
                      <td>{values.travel?.sprocket_radius}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>모터용적효율</td>
                      <td>
                        <strong>
                          <i>
                            μ<sub>mv</sub>{" "}
                          </i>
                        </strong>
                      </td>
                      <td></td>
                      <td>{values.travel?.TM_mv}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr></tbody>
          </table>
        </div>

        <div className="pages" id="Travel_Speed">
          <table className="bordertable">
            <thead>
              <tr className="borderheader">
                <td height="30mm">주행 속도</td>
              </tr>
            </thead>
            <tbody>

            <tr>
              <td className="head_description">
                <p>○ 주행모터 회전속도에 따른 주행속도 계산</p>
                <Card variant="outlined">
                  <table className="innertable" width="100%" height="50%">
                    <tbody>
                      <tr>
                        <td className="item-headers" colSpan="3">
                          주행모터 축 회전 SM(rpm)
                        </td>
                      </tr>
                      <tr>
                        <td>
                          (1속)
                          <MathJax>{`$$SM = \\frac{\Q_{m1} \\times \\mu_{mv}}{q \\times i} \\times 1,000$$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ \\frac{ ${values.travel?.pump_displacement} \\times ${values.travel?.TM_mv}}{${values.travel?.TM_flow_1} \\times ${values.travel?.reduc}} \\times 1,000$$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$${TM_rev_1}$$`}</MathJax>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          (2속)
                          <MathJax>{`$$SM = \\frac{\Q_{m2} \\times \\mu_{mv}}{q \\times i} \\times 1,000$$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ \\frac{ ${values.travel?.pump_displacement} \\times ${values.travel?.TM_mv}}{${values.travel?.TM_flow_2} \\times ${values.travel?.reduc}} \\times 1,000$$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$${TM_rev_2}$$`}</MathJax>
                        </td>
                      </tr>

                      <tr>
                        <td className="item-headers" colSpan="3">
                          주행속도 (km/hr)
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <MathJax>{`$$V_1=\\frac{SM_1 \\times 2\\pi R \\times 60}{10^6} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$\\frac{${TM_rev_1} \\times 2\\pi \\times ${values.travel?.sprocket_radius} \\times 60}{10^6} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$${travel_speed_1}$$`}</MathJax>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <MathJax>{`$$V_2=\\frac{SM_2 \\times 2\\pi R \\times 60}{10^6} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$\\frac{${TM_rev_2} \\times 2\\pi \\times ${values.travel?.sprocket_radius} \\times 60}{10^6} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$${travel_speed_2}$$`}</MathJax>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Card>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </MathJaxContext>
    </>
  );
};

export default TravelSpecHX;
