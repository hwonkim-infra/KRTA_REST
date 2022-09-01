import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
// import { Box } from "@mui/material";

// 퀵커플러 탈착

const TravelSlopeWX = ({ values, config }) => {
  const radians_to_degrees = (radians) => {
    return radians * (180 / Math.PI);
  };

  /* const degrees_to_radians = (degrees) => {
    return degrees / (180 / Math.PI);
  }; */

  const noslip_slope = radians_to_degrees(
    Math.atan(values.travel?.friction_surface)
  ).toFixed(1);
  const traction_slope = radians_to_degrees(
    Math.asin(
      (values.travel?.traction_force -
        values.travel?.running_resist * values.grossWeight) /
        values.grossWeight
    )
  ).toFixed(1);
  const min_slope = Math.min(
    values.travel?.engine_slope,
    noslip_slope,
    traction_slope
  ).toFixed();

  return (
    <>
      <MathJaxContext version={3} config={config}>
        <div className="pages" id="Greadability_Spec">
          <table className="bordertable">
            <thead>
              <tr className="borderheader">
                <td height="30mm">경사지 등판 및 제동 능력</td>
              </tr>
            </thead>{" "}
            <tbody>
              <tr>
                <td className="head_description">
                  <p>
                    굴착기는 100분의 25(무한궤도식 굴착기는 100분의 30을 말한다)
                    기울기의 견고한 건조 지면을 올라갈 수 있고, 정지상태를
                    유지할 수 있는 제동장치 및 제동장금장치를 갖추어야 한다.
                  </p>
                  <p>○ 등판능력 관련 제원</p>
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
                            <i>W<sub>t</sub></i>
                          </strong>
                        </td>
                        <td>㎏</td>
                        <td>{values.grossWeight}</td>
                      </tr>
                      <tr>
                        <td>견인력</td>
                        <td>
                          <strong>
                            <i>DP<sub></sub></i>
                          </strong>
                        </td>
                        <td>㎏/㎠</td>
                        <td>{values.travel?.traction_force}</td>
                      </tr>
                      <tr>
                        <td>지면마찰계수</td>
                        <td>
                          <strong>
                            <i>μ<sub></sub></i>
                          </strong>
                        </td>

                        <td>cc/rev</td>
                        <td>{values.travel?.friction_surface}</td>
                      </tr>
                      <tr>
                        <td>주행 저항 계수</td>
                        <td>
                          <strong>
                            <i>ξ<sub></sub></i>
                          </strong>
                        </td>
                        <td></td>
                        <td>{values.travel?.running_resist}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p> </p>
                  <p>○ 등판 및 유지 경사각 계산</p>

                  <table class="innertable" width="90%" height="300px">
<tbody>
    <tr>
        <td colspan="3">미끄러지지 않는 최대 경사각 (마찰력)</td>
    </tr>
    <tr>
        <td><MathJax>{`$$ \\mu \\cdot W_T \\cdot \\cos \\theta_1 = W_T \\cdot \\sin \\theta_1 $$`}</MathJax></td>
        <td><MathJax>{`$$ \\theta_1 = \\tan^{-1} 0.90 $$`}</MathJax></td>
        <td><MathJax>{`$$ ${noslip_slope} $$`}</MathJax></td>
    </tr>
    <tr>
        <td colspan="3">흘러내리지 않는 최대 경사각 (견인력)</td>

    </tr>
    <tr>
        <td><MathJax>{`$$ DP-\\xi W_T = W_T \\cdot \\sin \\theta_2 $$`}</MathJax></td>
        <td><MathJax>{`$$ \\theta_2 = \\sin ^{-1} \\frac{${ values.travel?.traction_force } - ${
                    values.travel?.running_resist } \\cdot ${ values.grossWeight }}{${ values.grossWeight }} $$`}</MathJax></td>

        <td><MathJax>{`$$ ${traction_slope} $$`}</MathJax></td>
        
    </tr>
    <tr>
        <td colspan="3">엔진 오일 팬 기준 경사각</td>

    </tr>
    <tr>
        <td>엔진 제원 사양</td>
        <td>
        </td>
        <td><MathJax>{`$$ ${values.travel?.engine_slope} $$`}</MathJax></td>
    </tr>
    <tr>
        <td colspan="3">최종 경사각</td>
    </tr>
    <tr>
        <td colspan="2" height="100px">위 3 가지 경사각 사양 중 가장 작은 값</td>
        <td><MathJax>{`$$ ${min_slope} $$`}</MathJax></td>
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

export default TravelSlopeWX;
