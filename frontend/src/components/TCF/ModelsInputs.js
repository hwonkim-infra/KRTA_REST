import { Grid, Paper } from "@mui/material";
import { Checkboxes } from "mui-rff";
import React from "react";
const Models = ["HX60A", "HX85A", "HX140A"];

const ModelsInput = () => {
  const checkboxDatas = Models.map((model) => {
    return { label: model, value: model };
  });

  return (
    <>
      <div>
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Checkboxes
              label="Relevant Models"
              name="Models"
            //   required={true}
              data={checkboxDatas}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
            />
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default ModelsInput;
