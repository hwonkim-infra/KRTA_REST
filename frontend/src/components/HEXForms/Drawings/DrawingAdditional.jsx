import { Button, } from '@mui/material'
import { TextField } from "mui-rff";
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import { Editor } from "@tinymce/tinymce-react";

const DrawingAdditional = () => {
  return (
    <div>DrawingAdditional
              <FieldArray name="appendix">
          {({ fields }) => (
            <div>
              {fields.map((name, index) => (
                <div key={name}>
                  <TextField name={`${name}.subItem`} label="기타 항목" />

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
                  <Button variant="outlined"
                  size="small" onClick={() => fields.remove(index)}>
                    Remove
                  </Button>
                </div>
              ))}
              
              <Button
                  variant="outlined"
                  size="small"
                onClick={() => fields.push({subItem: '', subDrawing: ''})}
                >
                  Add Action
                </Button>
            </div>
          )}
        </FieldArray>
    </div>
  )
}

export default DrawingAdditional