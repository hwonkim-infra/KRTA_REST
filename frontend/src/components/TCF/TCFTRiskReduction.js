import { Editor } from '@tinymce/tinymce-react';
import React from "react";
import { Field } from "react-final-form";


const TCFTRiskReduction = () => {

  return (
    <>

<Field name='riskReduct'>
        {({ input: {onChange, value}}) => (
          <Editor tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
          value={value + ''} init={{height: "640",
          resize: true, menubar: false,
        }} onEditorChange = {(e) => onChange(e)} />
        )}
      </Field>
             

        
    </>

  );
};

export default TCFTRiskReduction;
