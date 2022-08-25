import { Paper } from "@mui/material";
import React from "react";
import parse from "html-react-parser";


const CertPrev = ({values}) => {
  const approval = values.approval_result || '';
  return (
    <div>

  <Paper elevation= {2} style= {{
    padding: "10px"
  }}>
{parse(approval)}
  </Paper>

    </div>
  );
};

export default CertPrev;
