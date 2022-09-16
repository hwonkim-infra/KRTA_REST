import React from "react";
import { CardActionArea, Card, CardContent, Typography, Box, Button, } from "@mui/material";
import { styled } from "@material-ui/styles";

import EditIcon from "@mui/icons-material/Edit";
import parse from "html-react-parser";

/* const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({theme, expand})=> ({
  transform: !expand ? ''
})) */

const TitleStyle = styled('div')({
    height: 40,
    overflow: 'hidden',
    // display: '-webkit-box',
})

const cardStyle = {
    display: 'block',
    height: '30vw'
}


const PostCard = ({ post }) => {
  return (
    <div>
      <CardActionArea  href={"/Blog/" + post._id}>
        <Card style={cardStyle}>
          <CardContent sx={{ pt: 0, width: 1 }}>
            <TitleStyle color="inherit" variant="subtitle2" underline="hover" sx={{typography: "h4", height:60}}>
              {post.title}

            </TitleStyle>
            <Typography
              gutterBottom
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
            
          </Box>
        </Card>
      </CardActionArea>
    </div>
  );
};

export default PostCard;
