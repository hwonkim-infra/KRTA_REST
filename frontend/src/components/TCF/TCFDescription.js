import { Editor } from '@tinymce/tinymce-react';
import React from "react";
import { Field } from "react-final-form";


const TCFDescription = () => {

  return (
    <>

<Field name='description'>
        {({ input: {onChange, value}}) => (
          <Editor tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
          value={value + ''} init={{height: "960",
          resize: true, menubar: false,
        }} onEditorChange = {(e) => onChange(e)} />
        )}
      </Field>
             

        
    </>

  );
};

export default TCFDescription;
