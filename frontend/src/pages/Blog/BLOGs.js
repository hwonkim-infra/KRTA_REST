import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../actions/Blogs";
import {
  Grid,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import Page from '../../components/Page'
// import Post from './Post'
import { Link as RouterLink } from "react-router-dom";
import POSTS from '../../mock/blog';
import { BlogPostCard } from '../../sections/blog';





const BLOGs = () => {

  /* const Posts = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBlogs());
    console.log("🚀 ~ file: BLOG.js ~ line 28 ~ BLOG ~ Posts", Posts)
  }, [dispatch, Posts]); */

  const theme = createTheme();

  return (
    <div>
      <Page title="Blog">
        <Container>
          <Stack direction="row">
            <Typography variant="h4" gutterBottom>Blog</Typography>
            <Button variant="contained" component={RouterLink} to="#">New Post</Button>
          </Stack>
          <Stack mb={5} direction="row"></Stack>
          <Grid container spacing={3}>
            {POSTS.map((post, index)=> (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        </Container>

      </Page>


    </div>
  );
};

export default BLOGs;
