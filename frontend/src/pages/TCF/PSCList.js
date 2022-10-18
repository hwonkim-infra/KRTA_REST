import React, { useEffect, useState } from 'react';

import {
  Edit as EditIcon, Queue as QueueIcon
} from '@mui/icons-material/';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Stack
} from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPSCs } from '../../actions/PSCs';
import TCFList from './TCFList';

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
    { field: 'ITEM', headerName: 'ITEM', width: 150 },
    { field: 'reference', headerName: 'reference', width: 200 },
    { field: 'requirements', headerName: 'requirements', width: 200 },
    {
      field: 'Edit',
      headerName: 'EDIT',
      width: 50,
      renderCell: () => (
        <IconButton href={'/PSC/edit/' + currentPSC._id}>
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  const PSCedit = (currentPSC) => (
    <IconButton href={'/PSC/edit/' + currentPSC._id}>
      <EditIcon />
    </IconButton>
  );

  if (!PSCs) return <CircularProgress />

  const rows = PSCs.map((PSC) => {
    return {
      id: PSC._id,
      ITEM: PSC.item,
      reference: PSC.reference,
      requirements: PSC.requirements,
      ...PSC,
    };
  });

  const handleDeleteRow = () => {
    window.alert('Delete row!');
  };

  const handleAddRow = () => {
    window.alert('Add row!');
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Paper elevation={2} style={{ padding: '5px' }}>
            <Box sx={{ width: '100%' }}>
              <Stack direction='row' spacing={1}>
                <Button size='small' onClick={handleDeleteRow}>
                  Delete a row
                </Button>
                <Button size='small' component='a' href={'/PSC/new'}>
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
        <Grid item xs={5}>
        <Paper elevation={2} style={{ padding: "5px" }}>

          <Stack
            direction='row'
            spacing={3}
            alignItems='flex-end'
            justifyContent='space-between'
          >
            <Box component='span' sx={{ fontSize: 'h6.fontSize' }}>
              {' '}
              {currentPSC.item}
            </Box>

            {currentPSC.item && (
              <Box>
                <Button
                  sx={{ m: 1 }}
                  variant='outlined'
                  startIcon={<EditIcon />}
                  href={'/PSC/' + currentPSC.id}
                >
                  수정
                </Button>
                <IconButton href={'/PSC/edit/' + currentPSC._id}>
                  <EditIcon />
                </IconButton>
              </Box>
            )}
          </Stack>
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
          </Paper>

        <Paper elevation={2} style={{ padding: "5px" }}>
          TCF Preview
          <TCFList currentID= {currentPSC._id}/>
        </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PSCList;
