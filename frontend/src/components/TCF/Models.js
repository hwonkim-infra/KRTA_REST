import { FormGroup, Paper } from "@mui/material";
import { Checkboxes } from "mui-rff";
import React from "react";
import CheckboxLabel from "../../components/CheckboxLabel";

const modelNames = ["HX60A", "HX85A", /* "HX150A", "HX220A", */ ];

const modelNamesObj = modelNames.map((name) => ({label: name, value: name}))

const checkModel = modelNamesObj.map((model)=>({
    label: <CheckboxLabel label={model.label} size={4} />,
    value: model.value
}))

const Models = (values = {}) => {
  

  return (
    <>
      <div>
        <Paper style={{ padding: 16 }}>
          <FormGroup>
            <Checkboxes name="models" label="select relevant models" data={checkModel} />
          </FormGroup>
        </Paper>
      </div>
    </>
  );
};

export default Models;
