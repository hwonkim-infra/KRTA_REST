import React, { useEffect } from "react";
import parse from "html-react-parser";
import { CircularProgress, Grid } from "@mui/material";

// 작업반경

const AppendixDrawings = ({ values }) => {
  const appendix = values.appendix;
  console.log("🚀 ~ file: AppendixDrawings.js ~ line 8 ~ AppendixDrawings ~ values", appendix)
  // const subDrawing = values.drawings?.exterior || "";
  
  if (!appendix) return <CircularProgress />;

  return (
    <>
    {appendix.map((values) => (

      <div className="pages">
        <table className="bordertable">
          <thead>
            <tr className="borderheader">
              <td height="30mm">{values?.subItem}</td>
            </tr>
          </thead>
          <tbody>
              <td height="30mm">{parse(values?.subDrawing)}</td>
            {/* <tr>{parse(exterior)}</tr> */}
            {/* <tr>subDrawing</tr> */}
          </tbody>
        </table>
      </div>
    ))}

    </>
  );
};

export default AppendixDrawings;
