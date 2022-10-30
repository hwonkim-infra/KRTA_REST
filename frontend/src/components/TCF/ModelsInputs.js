import { Grid, Paper } from "@mui/material";
import { Checkboxes } from "mui-rff";
import React from "react";
import { useState } from "react";

const MiniModels = ["HX30A", "HX60A", "HX85A"];
const MidModels = ["HX150A", "HX150ACR", "HX220A", "HX235ACR"];
const LargeModels = ["HX300A", "HX330A", "HX380A", "HX480A", "HX520A"];

const ModelsInput = () => {
  const [checked, setChecked] = useState(true)
  const checkboxDatas = (Models) =>
    Models.map((model) => {
      return { label: model, value: model };
    });

  return (
    <>
      <div>
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Checkboxes
              label="mini"
              name="models"
              checked={checked}
              data={checkboxDatas(MiniModels)}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 12 } }}
            />

            <Checkboxes
              label="mid EX"
              name="models"
              data={checkboxDatas(MidModels)}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 12 } }}
            />

            <Checkboxes
              label="large EX"
              name="models"
              data={checkboxDatas(LargeModels)}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 12 } }}
            />
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default ModelsInput;
