import { Grid, Paper } from "@mui/material";
import { TextField } from "mui-rff";
import { Editor } from '@tinymce/tinymce-react';
import { Field } from "react-final-form";
import React from "react";

const TCFHead = () => {
  
  const formFields = [
    {
      size: 5,
      field: <TextField label="ITEM" name="item" margin="none" disabled />,
    },
    {
      size: 7,
      field: <TextField label="Reference" name="reference" margin="none" />,
    },
    {
        size: 12,
        field: <TextField multiline label="models" name="models" margin="none" />,
      },
    {
      size: 12,
      field: <TextField multiline label="requirements" name="requirements" margin="none" />,
    },
    {
      size: 12,
      field: <TextField multiline label="Compliance Statement" name="complyStatements" margin="none" />,
    },
        
  ];
  
  return (
    <>
      <div>
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            {formFields.map((item, idx) => (
              <Grid item xs={item.size} key={idx}>
                {item.field}
              </Grid>
            ))}
            
          </Grid>

          <Field name='riskReduct'>
        {({ input: {onChange, value}}) => (
          <Editor tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
          value={value + ''} init={{height: "640",
          resize: true, menubar: false,
        }} onEditorChange = {(e) => onChange(e)} />
        )}
      </Field>
             

        </Paper>

      </div>
    </>
  );
};

export default TCFHead;
