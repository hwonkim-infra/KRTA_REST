import React, { useEffect, useState } from "react";

import { Edit as EditIcon, Queue as QueueIcon, } from "@mui/icons-material/";
import { Box, Button, CircularProgress, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getPSCs } from "../../actions/PSCs";
import PSCDetailPrev from "../previews/PSCDetailPrev";
import TCFList from "./TCFList";
import { Link } from "react-router-dom";

const PSCList = () => {
  const [currentPSC, setCurrentPSC] = useState({});

  const PSCs = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPSCs());
  }, [dispatch]);

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "ITEM", headerName: "ITEM", width: 200 },
    { field: "reference", headerName: "reference", width: 200 },
    { field: "requirements", headerName: "requirements", flex: 1, minWidth: 400 },
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
        <Grid item xs={6}>
          {/* <Paper elevation={2} style={{ padding: "5px" }}> */}
            <Box sx={{ width: "100%", height: 900}}>
              <Stack direction="row" spacing={1}>
                <Button size="small" component="a" href={"/PSC/new"}>
                  Add
                </Button>
              </Stack>
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
          {/* </Paper> */}
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={2} style={{ padding: "5px", m:1 }}>
{/*             <Stack
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
            </Stack> */}

            <PSCDetailPrev currentPSC={currentPSC}/>
          </Paper>

          <Typography component="h3">

          </Typography>
          <Box>
            <Button
              variant='compromised'
              startIcon={<QueueIcon />}
              psc_id={currentPSC}
            >
              <Link
                to={{
                  pathname: `/PSC/` + currentPSC._id + '/newTCF',
                }}
              >
                Add TCF
              </Link>
            </Button>
          </Box>

          <Paper elevation={2} style={{ padding: "5px" }}>
            <TCFList currentID={currentPSC._id} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PSCList;
