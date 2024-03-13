import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Box, Grid, Typography } from "@mui/material";
import { Link as MaterialLink } from "@mui/material";
import MuiButton from "../../../../StyledComponent/MuiButton";
import SliderImageOne from "./../../../../assets/slider_image/tanvir-1.jpg";
import SliderImageTwo from "./../../../../assets/slider_image/tanvir-2.jpg";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import cvPdf from "./../../../../assets/cv_file/sonjoybarua_cv.pdf";
import Navigation from "../../Shared/Header/Navigation/Navigation";

const MySlider = () => {
  const useStyles = makeStyles({
    leftGridContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "110px !important",
    },
    rightGridContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "110px !important",
    },
  });
  const { leftGridContent, rightGridContent } = useStyles();

  const handleOpenCV = () => {
    window.open(cvPdf);
  };

  return (
    <>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={leftGridContent}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    textTransform: "uppercase",
                    color: "#FFB32F",
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Welcome
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    textTransform: "capitalize",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "45px",
                    mb: 1,
                  }}
                >
                  I'm Khondoker Tanvir Ahmed,
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textTransform: "capitalize",
                    color: "#fff",
                    fontWeight: 400,
                  }}
                >
                  A Full-Stack Web developer & Digital Marketing Expert.
                </Typography>
                {/* <Box sx={{ display: "flex", textDecoration: "none" }}>
                                    <MaterialLink underline="none" as={HashLink} to="/contact-me">
                                        <MuiButton variant="contained">
                                            Hire Me
                                        </MuiButton>
                                    </MaterialLink>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <MuiButton onClick={handleOpenCV} variant="contained">
                                            Download CV
                                        </MuiButton>
                                </Box> */}
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={rightGridContent}
            >
              <Box
                sx={{
                  backgroundImage:
                    "linear-gradient( 135deg, #FFA8A8 10%, #FCFF00 100%)",
                  borderRadius: "50%",
                }}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    width: "100%",
                    margin: "-8px auto",
                  }}
                  src={SliderImageOne}
                  alt="SliderImageOne"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default MySlider;
