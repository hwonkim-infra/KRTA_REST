import React, { useEffect, useState } from 'react';

import {
  Edit as EditIcon, Queue as QueueIcon
} from '@mui/icons-material/';
import { Box, Button, Grid, IconButton, Paper, Stack } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPSCs } from '../../actions/PSCs';
import { getTCFs } from '../../actions/TCFs';
import TCFPrev from '../previews/TCFPrev'

const PSCList = () => {
  const [currentTCF, setCurrentTCF] = useState(false);
  const [currentPSC, setCurrentPSC] = useState({});

  const PSCs = useSelector((state) => state.productList);
  const TCFs = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPSCs());
    // dispatch(getTCFs());
  }, [dispatch]);

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: 'Item', headerName: 'ITEM', width: 150 },
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

  const rows = PSCs?.map((PSC) => {
    return {
      id: PSC._id,
      Item: PSC.item,
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
              {currentPSC?.item}
            </Box>

            {currentPSC.item && (
              <Box>
                <Button
                  sx={{ m: 1 }}
                  variant='outlined'
                  startIcon={<EditIcon />}
                  href={'/PSC/' + currentPSC?.id}
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
          {currentPSC._id}
          {TCFs.map((datas) => {

            const data = Object.values(datas).filter(datas => {
              return datas.pscID === currentPSC._id
            })
            console.log("🚀 ~ file: PSCList.js ~ line 154 ~ {TCFs.map ~ data", data)
            return (
              <TCFPrev data={datas} key={currentTCF._id}/>
            )
          })}
          {/* {console.log(TCFs)} */}
        </Paper>

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
        </Grid>
      </Grid>
    </div>
  );
};

export default PSCList;