import React, { useEffect, useState } from "react";
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import PrintIcon from "@mui/icons-material/Print";
import DeleteIcon from "@mui/icons-material/Delete";
import QueueIcon from "@mui/icons-material/Queue";
import parse from "html-react-parser";

const Post = ({post}) => {

    
    return (
        <div>

                <Card sx={{display: 'flex'}}>
                    <CardContent sx={{flex: 1}}>
                        <Typography component="h2" variant="h5">{post.title}</Typography>
                        <Typography variant="subtitle1" color="text.secondary">{post.date}</Typography>
                        <Typography variant="subtitle1" paragraph>{parse(post.description)}</Typography>
                    </CardContent>
                    <Box >
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  href={"/Blog/" + post._id}
                >
                  수정
                </Button>
                
              </Box>
                </Card>
        </div>
    )
}

export default Post

