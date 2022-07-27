import React, { useEffect } from "react";
import parse from "html-react-parser";
import { Grid } from "@mui/material";

// 작업반경

const Drawings = ({ values }) => {
  const exterior = values.drawings?.exterior || "";
  const boom = values.drawings?.boom;
  const arm = values.drawings?.arm || "";
  const bucket = values.drawings?.bucket || "";
  const Qcouplr = values.drawings?.Qcouplr;
  const dozer = values.drawings?.dozer;

  return (
    <>
      <div className="pages">
        <table className="bordertable">
          <thead>
            <tr className="borderheader">
              <td height="30mm">외관도</td>
            </tr>
          </thead>
          <tbody>
            <tr>{parse(exterior)}</tr>
          </tbody>
        </table>
      </div>

      <div className="pages">
        <table className="bordertable">
          <thead>
            <tr className="borderheader">
              <td height="30mm">외관 제원</td>
            </tr>
          </thead>
          <tbody>
      <Grid container justifyContent="center" padding="10px">
        <Grid item xs={10}> 
            {parse(exterior)}
            </Grid>
        <Grid item xs={2}> 

            <table className="table table-striped" width="90px"> 
            <tbody>
            <tr>
    <td>길이</td>
  </tr>
  <tr align="right">
    <td>{ values.overall_length }</td>
  </tr>
  <tr>
    <td>너비</td>
  </tr>
  <tr align="right">
    <td>{ values.overall_width }</td>
  </tr>
  <tr>
    <td>높이</td>
  </tr>
  <tr align="right">
    <td>{ values.overall_height }</td>
  </tr>
  <tr>
    <td>트랙높이</td>
  </tr>
  <tr align="right">
    <td>{ values.undercarriage?.track_height }</td>
  </tr>
  <tr>
    <td>최저지상고</td>
  </tr>
  <tr align="right">
    <td>{ values.undercarriage?.ground_clearance }</td>
  </tr>
  <tr>
    <td>후방선회반경</td>
  </tr>
  <tr align="right">
    <td>{ values.rear_swing_radius }</td>
  </tr>
  <tr>
    <td>텀블러 간격</td>
  </tr>
  <tr align="right">
    <td>{ values.undercarriage?.tumbler_distance }</td>
  </tr>
  <tr>
    <td>트랙 길이</td>
  </tr>
  <tr align="right">
    <td>{ values.undercarriage?.track_length }</td>
  </tr>
  <tr>
    <td>트랙 간격</td>
  </tr>
  <tr align="right">
    <td>{ values.undercarriage?.track_gap }</td>
  </tr>
  <tr>
    <td>슈 폭</td>
  </tr>
  <tr align="right">
    <td>{ values.undercarriage?.shoe_width }</td>
  </tr>
            </tbody>
            </table>
            </Grid>

      </Grid>
          </tbody>
        </table>
      </div>

      {boom && (
        <div className="pages">
          <table className="bordertable">
            <thead>
              <tr className="borderheader">
                <td height="30mm">붐</td>
              </tr>
            </thead>
            <tbody>
              <tr>{parse(boom)}</tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="pages">
        <table className="bordertable">
          <thead>
            <tr className="borderheader">
              <td height="30mm">암</td>
            </tr>
          </thead>
          <tbody>
            <tr>{parse(arm)}</tr>
          </tbody>
        </table>
      </div>

      <div className="pages">
        <table className="bordertable">
          <thead>
            <tr className="borderheader">
              <td height="30mm">버켓</td>
            </tr>
          </thead>
          <tbody>
            <tr>{parse(bucket)}</tr>
          </tbody>
        </table>
      </div>

      {Qcouplr && (
        <div className="pages">
          <table className="bordertable">
            <thead>
              <tr className="borderheader">
                <td height="30mm">퀵 커플러</td>
              </tr>
            </thead>
            <tbody>
              <tr>{parse(Qcouplr)}</tr>
            </tbody>
          </table>
        </div>
      )}

      {dozer && (
        <div className="pages">
          <table className="bordertable">
            <thead>
              <tr className="borderheader">
                <td height="30mm">도저</td>
              </tr>
            </thead>
            <tbody>
              <tr>{parse(dozer)}</tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Drawings;
