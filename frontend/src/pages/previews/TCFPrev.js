import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import React from "react";
import parse from "html-react-parser";


const TCFPrev = ({data}) => {

  if (!data) return <CircularProgress />;

  return (
    <div>

  <Paper elevation= {2} style= {{
    padding: "10px"
  }}>
    <Box> {data.item} </Box>
    <Box> {data.requirements} </Box>
    <Box> {data.models} </Box>
    {/* {console.log(data)} */}
    <table>
<thead>
  <tr>
    <th colSpan="2">Title: {data.item}</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>{data.models.map((model) => (<span key={model}>{model},</span>))}</td>
  </tr>
  <tr>
    <td>2</td>
    <td>{data.reference}</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Risk Reduction</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Compliance Statement{data.complyStatements}</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Risk Reduction{parse(data.riskReduct || '')}</td>
  </tr>
</tbody>
</table>

  </Paper>

    </div>
  );
};

export default TCFPrev;
