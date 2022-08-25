import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTCFs } from "../actions/TCFs";
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




const TCFLIST = () => {
  const [currentTCF, setCurrentTCF] = useState({});

  const Posts = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTCFs());
    console.log("🚀 ~ file: TCFLIST.js ~ line 28 ~ TCFLIST ~ Posts", Posts)
  }, []);

  const theme = createTheme();

  return (
    <div>


        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxwidth="lg">
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

export default TCFLIST;
