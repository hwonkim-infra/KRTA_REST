import React, { useEffect, useState } from "react";

import { Edit as EditIcon, PostAdd } from "@mui/icons-material/";
import { Box, Button, CircularProgress, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPSCs } from "../../actions/PSCs";
import PSCDetailPrev from "../previews/PSCDetailPrev";
import TCFList from "./TCFList";

import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import Iconify from '../../components/Iconify'


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
            <HeaderBreadcrumbs
          heading="Product Safety Compliance "
          links={[
            { name: '규제점검리스트', },
          ]}
          action={
            <Button
              variant="contained"
              component={Link}
              to={"/PSC/new"}              
              startIcon={<Iconify icon={'eva:plus-fill'} />}
            >
              New File
            </Button>
          }
        />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={2} style={{ padding: "5px" }}>
            <Box sx={{ width: "100%", height: 900}}>
              <Stack direction="row" spacing={1}>
                <Button size="small" component="a" href={"/PSC/new"}>
                  Add Item
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
          </Paper>
        </Grid>
        <Grid item xs={6}>
        {currentPSC._id && (<><Paper elevation={2} style={{ padding: "5px", m:1 }}>

            <PSCDetailPrev currentPSC={currentPSC}/>
          </Paper>
          <Box>
            <Button
              variant='compromised'
              startIcon={<PostAdd />}
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
          </>)}
        </Grid>
      </Grid>
    </div>
  );
};

export default PSCList;
