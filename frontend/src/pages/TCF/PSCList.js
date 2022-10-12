import React, { useEffect, useState } from "react";

import { Box, Button, Grid, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import {Edit as EditIcon, Print as PrintIcon, Queue as QueueIcon, TextSnippet }  from "@mui/icons-material/";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPSCs } from "../../actions/PSCs";
import PSCTable from "../../components/TCF/PSCTable";
import { DataGrid } from "@mui/x-data-grid";


const PSCList = () => {
  const [TCFwindow, setTCFwindow] = useState(false);
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
    { field: "requirements", headerName: "requirements", width: 200 },
    { field: "Edit", headerName: "EDIT", width: 50, renderCell: () => <IconButton href={"/PSC/edit/" + currentPSC._id}><EditIcon />
    </IconButton> },
  ];

  const PSCedit = (currentPSC)=> (<IconButton href={"/PSC/edit/" + currentPSC._id}><EditIcon />
  </IconButton>)

  const rows = PSCs?.map((PSC) => {
    return {
      id: PSC._id,
      ITEM: PSC.item,
      reference: PSC.reference,
      requirements: PSC.requirements,
      ...PSC,
    };
  });

  const handleDeleteRow = () => {
    window.alert('Delete row!')
  };

  const handleAddRow = () => {
    window.alert('Add row!')
  };

  return (
    <div>
      <Grid container spacing={2}>
          <Grid item xs={8}>
        <Paper elevation={2} style={{ padding: "5px" }}>
        <Box sx={{ width: '100%' }}>
      <Stack direction="row" spacing={1}>
        <Button size="small" onClick={handleDeleteRow}>
          Delete a row
        </Button>
        <Button size="small" component="a" href={"/PSC/new"}>
          Add a row
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
        
          {/* <div style={{ width: "100%", height: 800 }}>
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
          </div> */}
          </Paper>
          </Grid>
          <Grid item xs={4}>
          <Stack
            direction="row"
            spacing={3}
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <Box component="span" sx={{ fontSize: "h6.fontSize" }}>
              {" "}
              {currentPSC?.item}
            </Box>
            

            {currentPSC.item && (
              <Box>
                <Button
                  sx={{m:1}}
                  variant="outlined"
                  startIcon={<EditIcon />}
                  href={"/PSC/" + currentPSC?.id}                  
                >
                  수정
                </Button>
                <IconButton href={"/PSC/edit/" + currentPSC._id}>
            <EditIcon />
          </IconButton>
                
              </Box>
            )}
          </Stack>
          <Box>
              <Button
                variant="compromised"
                startIcon={<QueueIcon />}
                psc_id={currentPSC}
              >
                <Link to={{
                  pathname: `/PSC/`+currentPSC._id + '/newTCF'
                }}>Add TCF</Link>
                
              </Button>
            </Box>

{/*           {(!currentPSC.ChangeModel && currentPSC.model_name) && (
            <Box>
              <Button
                variant="compromised"
                startIcon={<QueueIcon />}
                
              >
                <Link to={{
                  pathname: `/PSC/addChange/${currentPSC?.id}`,
                  isChangeModel: true,
                }}>변경형식</Link>
                
              </Button>
            </Box>
          )} */}
              {/* <SpecSheet values={currentPSC}></SpecSheet> */}
              {/* <CertPrev values={currentPSC}></CertPrev> */}


            </Grid>
      </Grid>
    </div>
  );
};

export default PSCList;
