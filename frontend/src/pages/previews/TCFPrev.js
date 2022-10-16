import { Paper } from "@mui/material";
import React from "react";
import parse from "html-react-parser";


const TCFPrev = ({data}) => {

  return (
    <div>

  <Paper elevation= {2} style= {{
    padding: "10px"
  }}>
    {data?.requirements}
    {console.log(data)}

  </Paper>

    </div>
  );
};

export default TCFPrev;
