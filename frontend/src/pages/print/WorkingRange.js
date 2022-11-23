import React from "react";

// 작업반경

const WorkingRange = ({ values }) => {
  return (
    <div className="pages">
      
      <table className="bordertable">
      <thead>
        <tr className="borderheader">
          <td height="30mm">작업반경</td>
        </tr>

      </thead>
      <tbody>


        <tr>
          <td>
            <img src={process.env.PUBLIC_URL + "/images/workingRange_HX.png"} alt="workingRange" srcSet="" />
            <table className="innertable" height="20%" width="60%">
              <thead></thead>
              <tbody>
              <tr>
                  <td></td>
                  <td>퀵 커플러 장착</td>
                  <td>퀵 커플러 미장착</td>
                </tr>
                <tr>
                  <td>최대덤프높이 E </td>
                  <td id="">{values.attachments?.loading_height}</td>
                  <td id="">{values.attachments?.loading_height_woqc}</td>
                </tr>
                <tr>
                  <td>최대굴착반지름 A </td>
                  <td id="">{values.attachments?.digging_reach}</td>
                  <td id="">{values.attachments?.digging_reach_woqc}</td>
                </tr>
                <tr>
                  <td>최대굴착깊이 B </td>
                  <td id="">{values.attachments?.digging_depth}</td>
                  <td id="">{values.attachments?.digging_depth_woqc}</td>
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

export default WorkingRange;
