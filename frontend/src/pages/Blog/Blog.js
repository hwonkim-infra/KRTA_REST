import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlog } from "../../actions/Blogs";
import { Container, Box, Button, Divider, ThemeProvider, createTheme, CssBaseline, Typography } from "@mui/material";
import parse from "html-react-parser";

// import Post from './Post'

import EditIcon from "@mui/icons-material/Edit";
import PrintIcon from "@mui/icons-material/Print";
import QueueIcon from "@mui/icons-material/Queue";



const Blog = () => {
  const {id} = useParams();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.productDetails);
  
  useEffect(() => {
    dispatch(getBlog(id));
    // console.log("🚀 ~ file: BLOG.js ~ line 28 ~ BLOG ~ Posts", Post)
  }, []);

  const theme = createTheme();

  return (
    <div>


        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
            <Box>
            
            <Typography variant="h4" sx={{mb: 3}}>
              {post.title}
            </Typography>
            <Typography variant="h6" sx={{mb: 5}}>
              <div>{parse(post.description || "")}</div>

            </Typography>
            <Divider />
            <Box>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              href={"/Blog/edit/" + post._id}
            >
              수정
            </Button>
          </Box>
          </Box>
            </Container>

        </ThemeProvider>


    </div>
  );
};

export default Blog;
