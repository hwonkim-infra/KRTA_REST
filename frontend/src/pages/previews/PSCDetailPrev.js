import { Box, CircularProgress, IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Edit as EditIcon, Queue as QueueIcon, } from "@mui/icons-material/";
import React from "react";
import parse from "html-react-parser";

const PSCDetailPrev = ({ currentPSC }) => {
  if (!currentPSC) return <CircularProgress />;

  return (
    <div>
      <TableContainer  sx={{'table, tr, td, th': {border: 0}}}>
        <Table  size="small">
          <TableHead>
          <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box component="span" sx={{ fontSize: "h5.fontSize" }}>
                {currentPSC.item}
                <IconButton href={"/PSC/edit/" + currentPSC._id}>
          <EditIcon />
        </IconButton>
              </Box>
              <Box component="span" sx={{ fontSize: "h8.fontSize" }}>
                {currentPSC.reference}
              </Box>
            </Stack>
          </TableHead>
          <TableBody>
            <TableCell>{currentPSC.requirements}</TableCell>
            {currentPSC.actions?.map((row) => (
                <TableRow key={row?.subItem}  >
                  {/* <details><summary><TableCell scope="row" width="20%">{row?.subItem}</TableCell></summary> */}
                  <details><summary>{row?.subItem}</summary>
                  {parse(row?.subAction || '')}</details>
                </TableRow>
              ))}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PSCDetailPrev;
