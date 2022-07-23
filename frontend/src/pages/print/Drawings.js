import React, { useEffect } from "react";
import parse from "html-react-parser";

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
