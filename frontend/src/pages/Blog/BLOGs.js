import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../actions/Blogs";
import {
  Grid,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from "@mui/material";
import Post from './Post'






const BLOGs = () => {

  const Posts = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBlogs());
    console.log("🚀 ~ file: BLOG.js ~ line 28 ~ BLOG ~ Posts", Posts)
  }, [dispatch, Posts]);

  const theme = createTheme();

  return (
    <div>


        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                {/* <Header /> */}
                <main> 
                    <Grid container spacing={4} sx={{mt:3}}>
                      <Grid item sx={6}>
                    {Posts.map((post) => (
                      <Post post={post} key={post._id} />
                      ))}

                      </Grid>

                    </Grid>
                </main>
            </Container>

        </ThemeProvider>


    </div>
  );
};

export default BLOGs;
