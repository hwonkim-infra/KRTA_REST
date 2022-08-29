import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlog } from "../../actions/Blogs";
import {
  Grid,
  Box,
  Button,
  Stack,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from "@mui/material";
import Post from './Post'

import EditIcon from "@mui/icons-material/Edit";
import PrintIcon from "@mui/icons-material/Print";
import QueueIcon from "@mui/icons-material/Queue";




const Blog = () => {
  const {id} = useParams();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.productDetails);
  
  useEffect(() => {
    dispatch(getBlog(id));
    console.log("🚀 ~ file: BLOG.js ~ line 28 ~ BLOG ~ Posts", Post)
  }, []);

  const theme = createTheme();

  return (
    <div>


        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                {/* <Header /> */}
                <main> 
                    <Grid container spacing={2} sx={{mt:3}} >
                        <Post post={post} />
                    </Grid>
                </main>
            </Container>

        </ThemeProvider>


    </div>
  );
};

export default Blog;
