import { Box, CircularProgress, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import parse from "html-react-parser";
import { Edit as EditIcon } from "@mui/icons-material/";


const TCFPrev = ({data}) => {

  if (!data) return <CircularProgress />;

  return (
    <div>

  <Paper elevation= {2} style= {{
    padding: "10px"
  }}>

    <table>
<thead>
  <tr>
    <th colSpan="2">Title: {data.item} <IconButton href={"/TCF/edit/" + data._id}>
                <EditIcon />
              </IconButton></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td><Box sx={{fontFamily: 'Arial'}}>Models</Box>{data.models.map((model) => (<span key={model}>{model},</span>))}</td>
  </tr>
  <tr>
    <td>2</td>
    <td><Box sx={{fontFamily: 'Arial'}}>Reference</Box>{data.reference}</td>
  </tr>
  <tr>
    <td>3</td>
    <td><Box sx={{fontFamily: 'Arial'}}>Risk Reduction</Box></td>
  </tr>
  <tr>
    <td>4</td>
    <td> <Box sx={{fontFamily: 'Arial'}}>Compliance Statement</Box> {data.complyStatements}</td>
  </tr>
  <tr>
    <td>5</td>
    <td>{parse(data.riskReduct || '')}</td>
  </tr>
</tbody>
</table>

  </Paper>

    </div>
  );
};

export default TCFPrev;
