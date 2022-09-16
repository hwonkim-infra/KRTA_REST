import { Box, Card, Container, Divider, Typography } from "@mui/material";
import axios from "../../utils/axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../../components/Page";
import useIsMountedRef from "../../hooks/useIsMountedRef";
import SkeletonPost from '../../components/skeleton'
import BlogPostHero from "../../sections/blog";

export default function BlogPost() {
    const isMountedRef = useIsMountedRef();

    const { title } = useParams();

    const [post, setPost] = useState(null);

    const [error, setError] = useState(null);

    const getPost = useCallback(
        async () => {
            try {
                const response = await axios.get('/api/blog/post', { 
                    params: { title},
                });

                if(isMountedRef.current){
                    setPost(response.data.post);
                }
            } catch (error) {
                console.error(error);
                setError(error.message);                
            }
        },
        [isMountedRef, title],
    )

    useEffect(() => {
        getPost();
    }, [getPost]);

    return (
        <Page title="Blog:Post Details">
            <Container maxWidth="lg">
                {post && (
                    <Card>
                        <BlogPostHero post={post} />
                        <Box sx={{ p: {xs:3, md:5}}}>
                            <Typography variant="h6" sx={{md: 5}}>
                                {post.description}
                            </Typography>

                            <Box sx={{ my:5 }}>
                                <Divider />
                                Tags
                            </Box>
                            <Box sx={{}}>Comments</Box>
                        </Box>
                    </Card>
                )}
            </Container>

            {!post && !error && <SkeletonPost /> }

            {error && <Typography variant="h6">404 {error}!</Typography> }

        </Page>
    )
};
