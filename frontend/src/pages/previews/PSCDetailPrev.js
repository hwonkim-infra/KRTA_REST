import { Edit as EditIcon } from "@mui/icons-material/";
import {
  Box, CircularProgress, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import parse from "html-react-parser";
import React from "react";

const PSCDetailPrev = ({ currentPSC }) => {
  if (!currentPSC) return <CircularProgress />;

  return (
    <div>
      <TableContainer sx={{ "table, tr, td, th": { border: 0 } }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Box sx={{ fontSize: "h5.fontSize" }}>
                  {currentPSC.item}
                  <IconButton href={"/PSC/edit/" + currentPSC._id}>
                    <EditIcon />
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box sx={{ fontSize: "h8.fontSize" }}>
                  {currentPSC.reference}
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{currentPSC.requirements}</TableCell>
            </TableRow>
            {currentPSC.actions?.map((row) => (
              <TableRow key={row?.subItem}>
                {/* <details><summary><TableCell scope="row" width="20%">{row?.subItem}</TableCell></summary> */}
                <TableCell>
                  <details>
                    <summary>{row?.subItem}</summary>
                    {parse(row?.subAction || "")}
                  </details>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PSCDetailPrev;
