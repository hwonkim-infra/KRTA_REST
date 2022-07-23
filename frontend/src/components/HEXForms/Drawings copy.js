import { Field } from "react-final-form";
import React, { useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';

const Drawings = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const renderTinyMCE = (field) => {
    console.log(field.input.value); // <p>something</p>

    const props = Object.assign({}, field);
    console.log(props.input.value); // <p>something</p>
  
    return (<Editor
      apiKey=''
      onInit={(evt, editor) => editorRef.current = editor}
      initialValue="<p>This is the initial content of the editor.</p>"
      textareaName="drawings.exterior"
      name="drawings.exterior"

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
    />);
  }


    return (
      <>


    <div className="">
      <span className="input-group-text"> 외관도 </span>
      <Field
        component={renderTinyMCE}
        className="form-control"
        name="drawings.exterior"
        placeholder="외관도"
      />
{/* <Editor
    value={"drawings.exterior"}
    init={{
      height: 500,
      menubar: false
    }}
    onEditorChange={this.handleChange}
  /> */}


    </div>
    </>
    )
};

export default Drawings;
