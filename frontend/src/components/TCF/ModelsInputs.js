import { Grid, Paper } from '@mui/material';
import { Checkboxes } from 'mui-rff';
import React from 'react';

const Models1 = ['HX30A', 'HX60A', 'HX85A'];
const Models2 = ['HX140A', 'HX150A', 'HX220A'];

const ModelsInput = () => {
  const checkboxDatas = Models1.map((model) => {
    return { label: model, value: model };
  });

  const checkboxDatas2 = Models2.map((model) => {
    return { label: model, value: model };
  });

  return (
    <>
      <div>
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems='flex-start' spacing={2}>
            <Checkboxes
              name='Models'
              data={checkboxDatas}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
            />

            <Checkboxes
              label=''
              name='Models'
              data={checkboxDatas2}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
            />
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default ModelsInput;
