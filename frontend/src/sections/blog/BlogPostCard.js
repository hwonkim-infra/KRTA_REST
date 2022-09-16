import { styled } from "@material-ui/styles";
import { Link as RouterLink } from 'react-router-dom';
import { alpha, Avatar, Box, Card, CardContent, createTheme, Grid, Link, Typography } from "@mui/material";
import { fDate } from '../../utils/formatTime'
import React from "react";
import { fShortenNumber } from "../../utils/formatNumber";
import SvgIconStyle from "../../components/SvgIconStyle";

const theme = createTheme();

const CardMediaStyle = styled('div')({
    position: 'relative',
    paddingTop: 'calc(100% * 3/4)',
})

const TitleStyle = styled(Link)({
    height: 44,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical'
})

const AvatarStyle = styled(Avatar)(({}) => ({
    zIndex: 9,
    width: 32,
    height: 32, 
    position: 'absolute',
    left: theme.spacing(3),
    bottom: theme.spacing(-2),
}))

const InfoStyle = styled('div')(({  }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
    color: theme.palette.text.disabled,
}))

const CoverImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
})


const BlogPostCard = ({ post, index }) => {
    const {cover, title, view, comment, share, author, createdAt, } = post;
    const latestPostLarge = index === 0;
    const latestPost = index === 1 || index === 2;

    const POST_INFO = [
        {number: comment, icon: 'eva: message-circle-fill'},
        {number: view, icon: 'eva: eye-fill'},
        {number: share, icon: 'eva: share-fill'},
    ];

  return (
    <Grid>
      <Card sx={{position: 'relative'}}>
        <CardMediaStyle sx={{
            ...((latestPostLarge || latestPost) && {
                pt: 'calc(100% * 4/3)',
                '&: after' : {
                    top: 0,
                    content: "''",
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    bgcolor: () => alpha(theme.palette.grey[900], 0.72),
                }
            }),
            ...(latestPostLarge && {
                pt: {
                    xs: 'calc(100% * 4/3)',
                    sm: 'calc(100% * 3/ 4.66)',
                }
            }),
        }}>

          <CoverImgStyle alt={title} src={cover} />
        </CardMediaStyle>
        <CardContent
        sx={{
            pt: 4, ...((latestPostLarge || latestPost) && {
                botton: 0,
                width: '100%',
                position: 'absolute',
            })
        }}>
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block'}}>
            {fDate(createdAt)}
          </Typography>
          <TitleStyle to="#" color="inherit" variant="subtitle2" underline="hover" component={RouterLink} sx={{
            ...(latestPostLarge && { typography: 'h5', height:60 }), ...((latestPostLarge || latestPost) && {color: 'common.white'}),
          }}>{title}</TitleStyle>

        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogPostCard;
