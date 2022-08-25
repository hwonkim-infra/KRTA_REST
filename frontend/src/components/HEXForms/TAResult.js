import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {Box,  Tab, Tabs, Typography } from '@mui/material';
import { Form, Field } from "react-final-form";
import { Editor } from '@tinymce/tinymce-react';


const TAResult = () => {
  


  return (
    <>

<Field name='approval_result'>
        {({ input: {onChange, value}}) => (
          <Editor tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
          value={value} init={{height: "960",
          resize: true, menubar: false,
        }} onEditorChange = {(e) => onChange(e)} />
        )}
      </Field>
             

        
    </>

  );
};

export default TAResult;
