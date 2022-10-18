import React, { useEffect, useState } from 'react';

import { Edit as EditIcon, Queue as QueueIcon } from '@mui/icons-material/';
import { Box, Button, CircularProgress, Grid, IconButton, Paper, Stack } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTCFs } from '../../actions/TCFs';

const TCFList = ({currentID}) => {
  const [TCFwindow, setTCFwindow] = useState(false);
  const [currentTCF, setCurrentTCF] = useState({});

  console.log(currentID)

  const TCFs = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTCFs());
  }, [dispatch]);

  const TCFedit = (currentTCF) => (
    <IconButton href={'/TCF/edit/' + currentTCF._id}>
      <EditIcon />
    </IconButton>
  );

  if (!TCFs) return <CircularProgress />

  const handleDeleteRow = () => {
    window.alert('Delete row!');
  };

  const handleAddRow = () => {
    window.alert('Add row!');
  };
  ;

  return (
    <div>
            <Box sx={{ width: '100%' }}>

            {currentID}
            {TCFs.map((data) => {
                return (
                    <li key ={data._id}>
                    {data.item}

                    </li>
                )
            })}

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
                setCurrentTCF(selectedRowData[0]);
              }}
            />
          </div> */}
        


    </div>
  );
};

export default TCFList;
