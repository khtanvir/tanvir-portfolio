import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error404.css'
import { Box } from '@mui/system';
import { Button, Container, Grid } from '@mui/material';
import SubdirectoryArrowLeftOutlinedIcon from '@mui/icons-material/SubdirectoryArrowLeftOutlined';
import error404Image from './../../../../assets/error_page/error_404/error_404_1.png'
import { makeStyles } from '@mui/styles';
import MuiButton from '../../../../StyledComponent/MuiButton';

const Error404 = () => {
        const useStyles = makeStyles({
        error404Box: {
            // width: "100%",
            // height: "100vh",
            marginTop: "20px"
        },

    });
    const {error404Box} = useStyles();

    return (
        <Box className={error404Box}>
            <Container >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={10} >
                            <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box>
                                    <img width="100%" sx={{ }} src={error404Image} alt="Error404Image" />
                                </Box>
                                <Box>
                                    <NavLink to="/" >
                                        <MuiButton style={{ minWidth: "200px", backgroundColor: "#fa5624",color: "white", fontWeight: "bold", textDecoration: "none", border: "transparent", outline: "none", padding: "10px 20px" }}>Back To Home &nbsp; <SubdirectoryArrowLeftOutlinedIcon  /></MuiButton>
                                    </NavLink>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>

    );
};

export default Error404;