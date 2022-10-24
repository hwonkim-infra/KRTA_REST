import React, { useEffect, useState } from "react";

import { Edit as EditIcon } from "@mui/icons-material/";
import { Box, Button, CircularProgress, Grid, IconButton, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getPSCs } from "../../actions/PSCs";
import TCFList from "./TCFList";

const PSCList = () => {
  const [currentPSC, setCurrentPSC] = useState({});

  const PSCs = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPSCs());
  }, [dispatch]);

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "ITEM", headerName: "ITEM", width: 150 },
    { field: "reference", headerName: "reference", width: 200 },
    { field: "requirements", headerName: "requirements", width: 300 },
    {
      field: "Edit",
      headerName: "EDIT",
      width: 50,
      renderCell: () => (
        <IconButton href={"/PSC/edit/" + currentPSC._id}>
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  if (!PSCs) return <CircularProgress />;

  const rows = PSCs.map((PSC) => {
    return {
      id: PSC._id,
      ITEM: PSC.item,
      reference: PSC.reference,
      requirements: PSC.requirements,
      ...PSC,
    };
  });


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Paper elevation={2} style={{ padding: "5px" }}>
            <Box sx={{ width: "100%" }}>
              <Stack direction="row" spacing={1}>
                <Button size="small" component="a" href={"/PSC/new"}>
                  Add
                </Button>
              </Stack>
              <Box sx={{ height: 400, mt: 1 }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  disableMultipleSelection={true}
                  onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRowData = rows.filter((row) =>
                      selectedIDs.has(row.id.toString())
                    );
                    setCurrentPSC(selectedRowData[0]);
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={2} style={{ padding: "5px" }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box component="span" sx={{ fontSize: "h5.fontSize" }}>
                {currentPSC.item}
              </Box>
              <Box component="span" sx={{ fontSize: "h8.fontSize" }}>
                {currentPSC.reference}
              </Box>

            </Stack>
            <Box  style={{ padding: "3px"}}>
            {currentPSC.requirements}

            </Box>
            <Table sx={{}} size="small">
              <TableHead>
                <TableCell>{currentPSC.requirements}</TableCell>
              </TableHead>
              <TableBody>
                {currentPSC.actions && currentPSC.actions?.map((row) => (
                  <TableRow key={row?.subItem} sx={{'tr, td ': {border: 0}}}>
                    <TableCell>{row?.subItem}</TableCell>
                    <TableCell>{row?.subAction}</TableCell>
                  </TableRow>
                ))} 
              </TableBody>
            </Table>
          </Paper>

          <Typography component="h3">
            TCF Preview

          </Typography>

          <Paper elevation={2} style={{ padding: "5px" }}>
            <TCFList currentID={currentPSC._id} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PSCList;
