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
import PostCard from './PostCard'






const BLOGs = () => {

  const Posts = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBlogs());
    console.log("🚀 ~ file: BLOG.js ~ line 28 ~ BLOG ~ Posts", Posts)
  }, [dispatch]);

  const theme = createTheme();

  return (
    <div>


        {/* <ThemeProvider theme={theme}> */}
            <CssBaseline />
            <Container >
                {/* <Header /> */}
                <main> 
                    <Grid container spacing={4} >
                    {Posts.map((post) => (
                      <Grid key={post._id} item xs={12} sm={6}>
                      <PostCard post={post}  />
                      </Grid>
                      ))}


                    </Grid>
                </main>
            </Container>

        {/* </ThemeProvider> */}


    </div>
  );
};

export default BLOGs;
