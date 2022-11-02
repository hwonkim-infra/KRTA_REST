import {
  CircularProgress, Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React from "react";
import parse from "html-react-parser";

const PSCDetailPrev = ({ currentPSC }) => {
  if (!currentPSC) return <CircularProgress />;

  return (
    <div>
      <TableContainer  sx={{'table, tr, td, th': {border: 0}}}>
        <Table  size="small">
          <TableHead>
            <TableCell>{currentPSC.requirements}</TableCell>
          </TableHead>
          <TableBody>
            {currentPSC.actions &&
              currentPSC.actions?.map((row) => (
                <TableRow key={row?.subItem}  >
                  <TableCell scope="row" width="20%">{row?.subItem}</TableCell>
                  <TableCell><details><summary>detail</summary> {parse(row?.subAction || '')}</details></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PSCDetailPrev;
