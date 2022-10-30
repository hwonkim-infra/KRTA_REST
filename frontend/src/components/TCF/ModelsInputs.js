import { Grid, Paper } from "@mui/material";
import { Checkboxes } from "mui-rff";
import React from "react";
import { useState } from "react";
import { Form, Field } from 'react-final-form'
import TextField from "./TextFieldComponent"
import Checkbox from "./CheckboxComponent"

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
        <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component={TextField}
              type="text"
              label="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component={TextField}
              type="text"
              label="Last Name"
            />
          </div>
          <div>
            <label>Email</label>
            <Field
              name="email"
              component={TextField}
              type="email"
              label="Email"
            />
          </div>
          <div>
            <label>Employed?</label>
            <Field name="employed" component={Checkbox} type="checkbox" />
          </div>

          <div>
            <label>Sauces</label>
            <div>
              <label>
                <Field
                  name="sauces"
                  component={Checkbox}
                  type="checkbox"
                  value="ketchup"
                />{' '}
                Ketchup
              </label>
              <label>
                <Field
                  name="sauces"
                  component={Checkbox}
                  type="checkbox"
                  value="mustard"
                />{' '}
                Mustard
              </label>
              <label>
                <Field
                  name="sauces"
                  component={Checkbox}
                  type="checkbox"
                  value="salsa"
                />{' '}
                Salsa
              </label>
              <label>
                <Field
                  name="sauces"
                  component={Checkbox}
                  type="checkbox"
                  value="guacamole"
                />{' '}
                Guacamole 🥑
              </label>
            </div>
          </div>
          <div>
            <label>Notes</label>
            <Field
              name="notes"
              component={TextField}
              multiline
              label="Notes"
            />
          </div>
      </div>
    </>
  );
};

export default ModelsInput;
