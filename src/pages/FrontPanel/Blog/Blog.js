import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Navigation from '../Shared/Header/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const Blog = () => {
        const useStyles = makeStyles({
        blogBox: {
            width: "100%",
            // height: "100vh",
            marginTop: "80px"
        },
        leftGridContent: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        rightGridContent: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

    });
    const {blogBox, leftGridContent, rightGridContent} = useStyles();

    return (
        <>
            <Navigation></Navigation>

            <Box className={blogBox}>
                <Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} >
                                <Paper sx={{ p: 3 }}>
                                    <Typography variant="h4" gutterBottom component="div">
                                        <span style={{ fontWeight: "bold", textAlign: "center" }}>My Blog Content</span> Coming Soon ... ...
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Footer></Footer>
        </>
    );
};

export default Blog;