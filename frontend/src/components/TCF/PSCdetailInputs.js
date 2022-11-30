import { Button, Grid, Paper } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { TextField } from "mui-rff";
import React from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const PSCdetailInput = (values = {}) => {
  return (
    <>
      <Paper elevation={2} style={{ padding: "5px" }}>
        <FieldArray name="actions">
          {({ fields }) =>
            fields.map((name, index) => (
              <div key={name}>
                {/* <label>Sub Item #{index + 1}</label> */}
                {/* <Field name={`${name}.subItem`} component="input" placeholder="sub Item" />  */}
          <Grid container alignItems="flex-start" spacing={2}>

                <Grid item xs={11}>
                  <TextField name={`${name}.subItem`} label="Sub Item" />
                </Grid>
                <Grid item xs={1}
                  // style={{ cursor: "pointer" }}
                >
                  <DeleteForeverIcon fontSize="large" style={{ cursor: "pointer" }} onClick={() => fields.remove(index)} />                  
                </Grid>
          </Grid>
                <Field name={`${name}.subAction`}>
                  {({ input: { onChange, value } }) => (
                    <Editor
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      value={value + ""}                      
                      init={{ height: "320", resize: true, menubar: false }}
                      onEditorChange={(e) => onChange(e)}
                    />
                  )}
                </Field>
                {/* {console.trace()} */}
                
              </div>
            ))
          }
        </FieldArray>
      </Paper>
    </>
  );
};

export default PSCdetailInput;
