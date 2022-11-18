import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

// 퀵커플러 탈착

const TravelBrakingWX = ({ values, config }) => {
  const radians_to_degrees = (radians) => {
    return radians * (180 / Math.PI);
  };

  const braking_speed_standard = Math.max(
    values.travel?.travel_speed * 0.8,
    32
  );
  const braking_force_axle = (
    values.travel?.brake_torque_axle /
    ((9.8 * values.travel?.tire_rolling_radius) / 1000)
  ).toFixed();
  const braking_force_total = (2 * braking_force_axle).toFixed();
  const braking_limit_slope = radians_to_degrees(
    Math.asin(braking_force_total / values.grossWeight)
  ).toFixed(1);

  const idle_running = 0.5;
  const decceleration_rate = (braking_force_total / values.grossWeight).toFixed(
    1
  );
  const decceleration = (decceleration_rate * 9.81).toFixed(1);
  const braking_distance_max = Math.round(
    (values.travel?.travel_speed ** 2 / (2 * decceleration)) *
      (1000 / 3600) ** 2 +
    idle_running * values.travel?.travel_speed * (1000 / 3600)
  *100)/100;
  const braking_distance_norm = Math.round(
    (braking_speed_standard ** 2 / (2 * decceleration)) * (1000 / 3600) ** 2 +
    idle_running * braking_speed_standard * (1000 / 3600)
  *100)/100;

  return (
    <>
      <MathJaxContext version={3} config={config}>
        <div className="pages" id="Braking_capability">
          <table className="bordertable">
            <thead>
              <tr className="borderheader">
                <td height="30mm">주제동장치와 제동능력</td>
              </tr>
            </thead>{" "}
            <tbody>
              <tr>
                <td className="head_description">
                  <p>○ 타이어식 건설기계의 주제동장치</p>

                  <table class="innertable" width="60%" height="250px">
                    <thead>
                      <tr height="20mm">
                        <th>항목</th>
                        <th>기호</th>
                        <th>단위</th>
                        <th>제원</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>장비 총 중량</td>

                        <td>
                          <strong>
                            <i>
                              W<sub>t</sub>
                            </i>
                          </strong>
                        </td>
                        <td>㎏</td>
                        <td>{values.grossWeight}</td>
                      </tr>
                      <tr>
                        <td>브레이크 토크 (per axle)</td>
                        <td>
                          <strong>
                            <i>
                              T<sub>SB</sub>
                            </i>
                          </strong>
                        </td>
                        <td>Nm</td>
                        <td>{values.travel?.brake_torque_axle}</td>
                      </tr>
                      <tr>
                        <td>타이어 동하중 반경</td>
                        <td>
                          <strong>
                            <i>
                              T<sub>R</sub>
                            </i>
                          </strong>
                        </td>

                        <td>cc/rev</td>
                        <td>{values.travel?.tire_rolling_radius / 1000}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p> </p>
                  <p>○ 서비스 브레이크의 제동력 계산</p>

                  <table class="innertable" width="90%" height="300px">
                    <thead>
                      <tr>
                        <th>항목</th>
                        <th>산식</th>
                        <th></th>
                        <th>제원</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Axle 브레이크 제동력</td>
                        <td>
                          <MathJax>{`$$ F'_{SB}=\\frac{T_{SB}}{9.8 \\cdot T_R} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ \\frac{${
                            values.travel?.brake_torque_axle
                          }}{9.8 \\cdot ${
                            values.travel?.tire_rolling_radius / 1000
                          }} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ ${braking_force_axle} $$`}</MathJax>
                        </td>
                      </tr>

                      <tr>
                        <td>총 서비스 브레이크 제동력</td>
                        <td>
                          <MathJax>{`$$ F_{SB}=2 \\times F'_{SB} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ 2 \\times ${braking_force_axle} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ ${braking_force_total} $$`}</MathJax>
                        </td>
                      </tr>

                      <tr>
                        <td>제동 한계 각</td>
                        <td>
                          <MathJax>{`$$ \\theta = \\sin ^{-1} \\frac {F_{SB}}{W} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ \\sin ^{-1} \\frac {${braking_force_total}}{${values.grossWeight}} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ ${braking_limit_slope} $$`}</MathJax>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pages" id="Braking_distance">
          <table className="bordertable">
            <thead>
              <tr className="borderheader">
                <td height="30mm">제동 거리</td>
              </tr>
            </thead>{" "}
            <tbody>
              <tr>
                <td className="head_description">
                  <p>○ 제동거리 산정을 위한 기준 속도 </p>

                  <table class="innertable" width="60%" height="250px">
                    <thead>
                      <tr height="20mm">
                        <th>항목</th>
                        <th>기호</th>
                        <th>단위</th>
                        <th>제원</th>
    <th>비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
    <td>장비 최고 속도</td>

                        <td>
                          <strong><i>V<sub>0</sub></i></strong>
                        </td>
                        <td>㎞/h</td>
                        <td>{values.travel_speed}</td>
    <td></td>
                      </tr>
                      <tr>
    <td>규정 제동 속도</td>
                        <td>
                        <strong><i>V<sub>1</sub></i></strong>
                        </td>
                        <td>㎞/h</td>
                        <td>{ braking_speed_standard }</td>
    <td>32 or 80% (greater)</td>
                      </tr>
                      <tr>
    <td>공주 시간</td>
                        <td>
                        <strong><i>t<sub></sub></i></strong>
                        </td>
                        <td>sec</td>
                        <td>0.5</td>
    <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <p> </p>
            <p>○ 제동력과 감가속도 </p>

            <table class="innertable" width="90%" height="250px">
            <tbody>
                <tr>
                    <td>제동력과 감속도 (감속율)</td>
                <td>
                    <MathJax>{`$$ \\mu = \\frac {F_{SB}}{W} $$`}</MathJax>
                </td>
                <td>
                    <MathJax>{`$$ \\frac {${braking_force_total}}{${values.grossWeight}} $$`}</MathJax>
                </td>
                <td>
                    <MathJax>{`$$ ${decceleration_rate} $$`}</MathJax>
                </td>
                </tr>

                <tr>
                    <td>감속</td>
                <td>
                    <MathJax>{`$$ a= \\mu \\times g $$`}</MathJax>
                </td>
                <td>
                    <MathJax>{`$$ ${decceleration_rate} \\times 9.81 $$`}</MathJax>
                </td>
                <td>
                    <MathJax>{`$$ ${decceleration} $$`}</MathJax>
                </td>
                </tr>


            </tbody>
            </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pages" id="Braking_distance_2">
          <table className="bordertable">
            <thead>
              <tr className="borderheader">
                <td height="30mm">제동 거리</td>
              </tr>
            </thead>{" "}
            <tbody>
              <tr>
                <td className="head_description">
                  <p>○ 제동거리 산정을 위한 기준 속도 </p>
                  <img src="/images/braking_distance_standard.jpg" alt="제동거리"  />


                  <p> </p>
        <p>○ 정지 거리 (최고 속도 / 기준 속도) </p>

            <table class="innertable" width="90%" height="">
            <tbody>
                <tr>
                <td>
                    <MathJax>{`$$ S_{max} = \\frac{{V_0}^2}{2 \\times a} \\times (\\frac{1000}{3600})^2 + t \\times V_0 \\times (\\frac{1000}{3600}) $$`}</MathJax>
                </td>
    <td>정지거리 (최고속도)</td>                
                </tr>
                <tr>
                <td>
                    <MathJax>{`$$ \\frac{${values.travel?.travel_speed}^2}{2 \\times ${decceleration}} \\times (\\frac{1000}{3600})^2 + ${idle_running} \\times ${values.travel?.travel_speed} \\times (\\frac{1000}{3600}) $$`}</MathJax>
                </td>
    <td><strong>{braking_distance_max}</strong> </td>                
                </tr>

                <tr>
                <td>
                    <MathJax>{`$$ S_{ISO} = \\frac{{V_1}^2}{2 \\times a} \\times (\\frac{1000}{3600})^2 + t \\times V_1 \\times (\\frac{1000}{3600}) $$`}</MathJax>
                </td>
    <td>정지거리 (규정속도)</td>                
                </tr>
                <tr>
                <td>
                    <MathJax>{`$$ \\frac{${braking_speed_standard}^2}{2 \\times ${decceleration}} \\times (\\frac{1000}{3600})^2 + ${idle_running} \\times ${braking_speed_standard} \\times (\\frac{1000}{3600}) $$`}</MathJax>
                </td>
    <td><strong>{braking_distance_norm}</strong> </td>                
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

export default TravelBrakingWX;
