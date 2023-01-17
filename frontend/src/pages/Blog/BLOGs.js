import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogs } from "../../actions/Blogs";
import {
  Grid, Button, 
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from "@mui/material";
import PostCard from './PostCard'


import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import Iconify from '../../components/Iconify'





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
            <HeaderBreadcrumbs
          heading="인증규제 정보 블로그 "
          links={[
            { name: 'Blog', },
          ]}
          sx={{m:2}}
          action={
            <Button
              variant="contained"
              component={Link}
              to={"/Blog/new"}              
              startIcon={<Iconify icon={'eva:plus-fill'} />}
            >
              New File
            </Button>
          }
        />
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
