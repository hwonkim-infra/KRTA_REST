import React from "react";
import { Box, Card, Divider, Container, Typography, Button } from '@mui/material';

// import Page from 'src/components/Page'
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
      {/* <Page title="Blog: Post Details"> */}
        <Container>
          <Box>
            <Typography variant="h6" sx={{mb: 5}}>
              <div>{parse(post.description || "")}</div>

            </Typography>
            <Divider />
            <Box>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              href={"/Blog/edit/" + post._id}
            >
              수정
            </Button>
          </Box>
          </Box>

        </Container>

      {/* </Page> */}
    </div>
  );
};

export default Post;
