import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {Box, Button, ButtonGroup, Modal } from '@mui/material';
import { Form, Field } from "react-final-form";
import { addDrawings } from "../../../actions/HEXs";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 12,
    p: 4,
  };

const AddDrawings = (values) => {
  const editorRef = useRef(null);
  const [openExt, setOpenExt] = React.useState(false);
  const handleExteriorOpen = () => setOpenExt(true);
  const handleExteriorClose = () => setOpenExt(false);

    const navigate = useNavigate();
    
    /* const [formData, setFormData] = useState({
        exterior: '',
        boom: ''
    });

    const { exterior, boom } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    } */

    const RenderTinyMCE = (field) => {
      let initialValue = field.input.value;
      const [value, setValue] = useState('');
      const handleUpdate = (value, editor) => {
        setValue(value);
        console.log("🚀 ~ file: AddDrawings.js ~ line 45 ~ handleUpdate ~ value", value)
      };
    
      
        return (<Editor
        
          apiKey=''
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={initialValue}
          textareaName="drawings.exterior"
          // onBlur = {(e) => {field.input.onChange(e.target.getContent)}}
          name="drawings.exterior"
          value={value}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}

          onEditorChange={handleUpdate}




        />);
      }

  return (
    <>
    <Field
        component={RenderTinyMCE  }
        className="form-control"
        name="drawings.exterior"
        placeholder=""
      />

    </>

  );
};

export default AddDrawings;
