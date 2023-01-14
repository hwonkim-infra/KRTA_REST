import { Button, Grid, Paper, } from '@mui/material'
import { TextField } from "mui-rff";
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import { Editor } from "@tinymce/tinymce-react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const DrawingAdditional = () => {
  return (
              <FieldArray name="appendix">
          {({ fields }) => (
            <div>
              <Paper elevation={2} style={{ padding: "5px" }}>
              {fields.map((name, index) => (
                <div key={name}>
                            <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={11}>

                  <TextField name={`${name}.subItem`} label="자료 제목" />
                </Grid>
                <Grid item xs={1}
                  // style={{ cursor: "pointer" }}
                >
                  <DeleteForeverIcon fontSize="large" style={{ cursor: "pointer" }} onClick={() => fields.remove(index)} />                  
                </Grid>
                  </Grid>

                  <Field name={`${name}.subDrawing`}>
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

                </div>
              ))}
              </Paper>
              
              <Button
                  variant="outlined"
                  size="small"
                onClick={() => fields.push({subItem: '', subDrawing: ''})}
                >
                  도면 추가
                </Button>
            </div>
          )}
        </FieldArray>
  )
}

export default DrawingAdditional