import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog, createBlog, deleteBlog, getBlog } from "../actions/Blogs";
import { useNavigate, useParams } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

import { Form, Field } from "react-final-form";
import { TextField } from "mui-rff";

import { Grid, Button, Stack } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

const BlogEdit = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const blogdata = useSelector(state => state.productDetails);

  

    useEffect(() => {
      dispatch(getBlog(id));
    }, [id]);

  let navigate = useNavigate();

  const onSubmit = (values) => {
    if (!id) {
      return create(values);
    }
    return update(id, values);
  };

  const create = async (values) => {
    await dispatch(createBlog(values))
      .then((response) => {
        console.log(response);
        navigate("/Blog");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  const update = async (id, values) => {
    await dispatch(updateBlog(id, values))
      .then((response) => {
        console.log(response);
        navigate("/Blog");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };


  const remove = async () => {
    if (window.confirm("이 포스트를 삭제하시겠습니까")) {
      await dispatch(deleteBlog(id))
        .then((response) => {
          console.log(response);
          navigate("/Blog");
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    }
  };

  const formFields = [

    {
      size: 6,
      field: <TextField label="제목" name="title" margin="none" />,
    },
    {
      size: 2,
      field: <TextField label="작성자" name="creator" margin="none" />,
    },
    
  ];

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={blogdata}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            {formFields.map((item, idx) => (
              <Grid item xs={item.size} key={idx}>
                {item.field}
              </Grid>
            ))}
            <Field name='description'>
        {({ input: {onChange, value}}) => (
          <Editor tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
           value={value} init={{height: "960",
          resize: true, menubar: false,
        }} onEditorChange = {(e) => onChange(e)} />
        )}
      </Field>
            <Button variant="outlined" startIcon={<SaveIcon />} type="submit">
              저장
            </Button>
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              onClick={remove}
            >
              삭제
            </Button>
          </form>
        )}
      />
    </div>
  );
};

export default BlogEdit;
