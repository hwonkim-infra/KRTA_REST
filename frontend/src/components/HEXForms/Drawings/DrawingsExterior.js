import { Field } from "react-final-form";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const DrawingsExterior = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <div className="">
        <span className="input-group-text"> 외관도 </span>
        <Editor
          name="drawings.exterior"
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>This is the initial content of the editor.</p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
        {/* <Editor
    value={"drawings.exterior"}
    init={{
      height: 500,
      menubar: false
    }}
    onEditorChange={this.handleChange}
  />  */}
   <Field
        component="input"
        className="form-control"
        name={"drawings.exterior"}
        placeholder="외관도"
      />
      </div>
    </>
  );
};

export default DrawingsExterior;
