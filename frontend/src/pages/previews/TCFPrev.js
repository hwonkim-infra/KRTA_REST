import { Edit as EditIcon } from "@mui/icons-material/";
import { Box, CircularProgress, IconButton, Paper } from "@mui/material";
import parse from "html-react-parser";
import React from "react";

const TCFPrev = ({ data }) => {
  if (!data) return <CircularProgress />;

  return (
    <>
      <Paper elevation={2} style={{ padding: "10px", }} >
        <table>
          <thead>
            <tr>
              <th colSpan="2">
                Title: {data.title}{" "}
                <IconButton href={"/TCF/edit/" + data._id}>
                  <EditIcon />
                </IconButton>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <Box sx={{ fontFamily: "Calibri", fontWeight: "bold" }}>
                  {data.item}
                </Box>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Box sx={{ fontFamily: "Arial" }}>Models</Box>
                {data.models.map((model) => (
                  <span key={model}>{model},</span>
                ))}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Box sx={{ fontFamily: "Arial" }}>Reference</Box>
                {data.reference}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Box sx={{ fontFamily: "Arial" }}>Risk Reduction</Box>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                {" "}
                <Box sx={{ fontFamily: "Arial" }}>
                  Compliance Statement
                </Box>{" "}
                {data.complyStatements}
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>{parse(data.riskReduct || "")}</td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </>
  );
};

export default TCFPrev;
