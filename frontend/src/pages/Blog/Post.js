import React, { useEffect, useState } from "react";
import {
  Grid,
  CardActionArea,
  Card, CardHeader, CardMedia, CardContent, CardActions, Collapse,
  Typography,
  Box,
  Button,
  styled,
  IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import parse from "html-react-parser";

/* const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({theme, expand})=> ({
  transform: !expand ? ''
})) */

const Post = ({ post }) => {
  return (
    <div>
      <CardActionArea  href={"/Blog/" + post._id}>
        <Card /* sx={{ display: "flex" }} */>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              {new Date(post.date).toLocaleDateString("Ko-kr")}
              {" by "}
              {post.creator}
            </Typography>

            <Typography component="div">
              <div>{parse(post.description || "")}</div>
            </Typography>
          </CardContent>
          <Box>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              href={"/Blog/edit/" + post._id}
            >
              수정
            </Button>
          </Box>
        </Card>
      </CardActionArea>
    </div>
  );
};

export default Post;
