import React from "react";
import {
  Container,
  Grid,
  Box,
  Paper,
  Typography,
  IconButton,
  Avatar,
  Link as MaterialLink,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import aboutImageOne from "./../../../../assets/about_me/tanvir-2.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  const useStyles = makeStyles({
    aboutMeBox: {
      width: "100%",
      // height: "100vh",
      marginTop: "120px",
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
    socialIcon: {
      marginRight: "15px",
    },
    socialBtnStyle: {
      color: "#FF8209",
      padding: "1px",
    },
  });
  const {
    aboutMeBox,
    leftGridContent,
    rightGridContent,
    socialIcon,
    socialBtnStyle,
  } = useStyles();

  return (
    // <section >
    <Box id="aboutMe" className={`${aboutMeBox} aboutMe`}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} className={leftGridContent}>
              <Paper elevation={24} sx={{ p: 1 }}>
                <img
                  src={aboutImageOne}
                  alt=""
                  style={{ borderRadius: "10px", marginBottom: "-5px" }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={rightGridContent}>
              <Box sx={{ color: "#fff" }}>
                <Typography variant="h2" gutterBottom>
                  <span style={{ fontWeight: "bold" }}>About</span> Me
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ fontWeight: "bold", color: "#FFB32F" }}
                >
                  Hello!
                  {/* <span style={{ fontWeight: "bold", color: "#FFB32F" }}>I'M Sonjoy Barua.</span> */}
                </Typography>
                <Typography sx={{ mt: 3 }} gutterBottom component="p">
                  I'm Khondoker Tanvir Ahmed. I have a BSc in Computer Science &
                  Engineering from Daffodil International university(DIU),
                  Dhaka. I'm an IT professional with 4<sup>+</sup> year's of
                  experience. I have extensive knowledge of IT Management
                  system, Web design & development, Digital marketing.{" "}
                </Typography>
                <Typography sx={{ mt: 2 }} gutterBottom component="p">
                  However, I can assure you that I am a quick learner, adaptive
                  as well as an energetic person.
                </Typography>
                <Box sx={{ display: "flex", mt: 4 }}>
                  <MaterialLink
                    underline="hover"
                    href="https://www.linkedin.com/in/khondoker-tanvir-ahmed"
                    target="_blank"
                  >
                    <Avatar className={socialIcon}>
                      <IconButton>
                        <LinkedInIcon className={socialBtnStyle} />
                      </IconButton>
                    </Avatar>
                  </MaterialLink>
                  <MaterialLink
                    underline="hover"
                    href="https://www.facebook.com/profile.php?id=100006300515262&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <Avatar className={socialIcon}>
                      <IconButton className={socialIcon}>
                        <FacebookOutlinedIcon className={socialBtnStyle} />
                      </IconButton>
                    </Avatar>
                  </MaterialLink>
                  <MaterialLink
                    underline="hover"
                    href="https://github.com/khtanvir/"
                    target="_blank"
                  >
                    <Avatar size="small" className={socialIcon}>
                      <IconButton>
                        <GitHubIcon className={socialBtnStyle} />
                      </IconButton>
                    </Avatar>
                  </MaterialLink>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
    // </section>
  );
};

export default About;
