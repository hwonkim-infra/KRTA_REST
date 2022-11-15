import React from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { TextField } from "mui-rff";
import { Editor } from "@tinymce/tinymce-react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Paper } from "@mui/material";

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
                <TextField name={`${name}.subItem`} label="Sub Item" />
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
                <span
                  onClick={() => fields.remove(index)}
                  style={{ cursor: "pointer" }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => fields.remove(index)}
                  >
                    Remove Action
                  </Button>
                  {/* <DeleteIcon /> */}
                </span>
              </div>
            ))
          }
        </FieldArray>
      </Paper>
    </>
  );
};

export default PSCdetailInput;
