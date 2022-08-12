import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogs } from "../actions/Blogs";
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




const BLOG = () => {
  const [currentBlog, setCurrentBlog] = useState({});

  const Posts = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBlogs());
    console.log("🚀 ~ file: BLOG.js ~ line 28 ~ BLOG ~ Posts", Posts)
  }, []);

  const theme = createTheme();

  return (
    <div>
                        {/* {Posts.map((post) => (
                            <Post post={post} />
                        ))} */}

        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                {/* <Header /> */}
                <main>
                    <Grid spacing={4}>
                    {Posts.map((post) => (
                            <Post post={post} key={post._id} />
                        ))}

                    </Grid>
                </main>
            </Container>

        </ThemeProvider>


    </div>
  );
};

export default BLOG;
