import {
  CircularProgress, Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React from "react";

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
                  <TableCell scope="row">{row?.subItem}</TableCell>
                  <TableCell>{row?.subAction}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PSCDetailPrev;
