import React, { useState, useEffect } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
// import { Box } from '@mui/system';
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Link as MaterialLink, Box } from "@mui/material";
import footerImg from "./../../../../assets/footer/footer-2.png";
import {
  Typography,
  IconButton,
  Avatar,
  Container,
  Grid,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import MuiButton from "../../../../StyledComponent/MuiButton";

const Footer = () => {
  const [values, setValues] = React.useState();
  const [showTopBtn, setShowTopBtn] = useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const useStyles = makeStyles({
    footerBox: {
      backgroundImage:
        "radial-gradient( circle 976px at 51.2% 51%,  rgba(11,27,103,1) 0%, rgba(16,66,157,1) 0%, rgba(11,27,103,1) 17.3%, rgba(11,27,103,1) 58.8%, rgba(11,27,103,1) 71.4%, rgba(16,66,157,1) 100.2%, rgba(187,187,187,1) 100.2% )",
    },
    socialIcon: {
      marginRight: "15px",
    },
    socialBtnStyle: {
      color: "#FF8209",
      padding: "1px",
    },
    topToBtm: {
      position: "relative",
    },
    iconPosition: {
      position: "fixed",
      bottom: "70px",
      right: "40px",
      zIndex: 20,
    },
    iconStyle: {
      cursor: "pointer",
      animation: "movebtn 3s ease-in-out infinite",
      transition: "all .5s ease-in-out",
    },
    "@keyframes movebtn": {
      "0%": {
        transform: "translateY(0px)",
      },
      "25%": {
        transform: "translateY(20px)",
      },
      "50%": {
        transform: "translateY(0px)",
      },
      "75%": {
        transform: "translateY(-20px)",
      },
      "100%": {
        transform: "translateY(0px)",
      },
    },
  });
  const {
    footerBox,
    socialIcon,
    socialBtnStyle,
    topToBtm,
    iconPosition,
    iconStyle,
  } = useStyles();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollTo = () => {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <footer className={footerBox} style={{ marginTop: "120px" }}>
      {/* <Box sx={{ position: "absolute" }}>
                <img width="100%" height="100%" src={footerImg} alt="FooterImage" />
            </Box> */}
      <Container sx={{ color: "#fff" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{ textAlign: "left", mb: 4 }}
                  variant="h3"
                  gutterBottom
                  component="div"
                >
                  Get In Touch:
                </Typography>
                <form>
                  <Box
                    sx={{
                      width: 400,
                      // maxWidth: '100%',
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FormControl
                      fullWidth
                      variant="standard"
                      id="standard-basic"
                      label="Standard"
                    >
                      <InputLabel
                        sx={{
                          fontSize: "22px",
                          fontWeight: 500,
                          color: "#fff",
                        }}
                        htmlFor="standard-adornment-amount"
                      >
                        Enter Your Email
                      </InputLabel>
                      <Input
                        id="standard-adornment-amount"
                        // value={values.amount}
                        // onChange={handleChange('amount')}
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        style={{ marginTop: "25px" }}
                      />
                    </FormControl>
                  </Box>
                  <MuiButton sx={{ mt: 2, p: "10px 20px" }} size="small">
                    Send Email
                  </MuiButton>
                </form>
              </Box>
              <Box sx={{ display: "flex", margin: "40px 0" }}>
                <Typography
                  sx={{ margin: "6px 0 0 -25px" }}
                  variant="h5"
                  gutterBottom
                  component="div"
                >
                  Social Links:
                </Typography>
                <Box sx={{ display: "flex", ml: 2 }}>
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
        {showTopBtn && (
          <Box
            style={{ display: "flex", justifyContent: "right" }}
            className={`${topToBtm} ${iconPosition}`}
          >
            <Avatar
              size="small"
              className={`${socialIcon}, ${iconStyle}`}
              onClick={scrollToTop}
            >
              <IconButton>
                <KeyboardDoubleArrowUpIcon
                  fontSize="large"
                  className={socialBtnStyle}
                />
              </IconButton>
            </Avatar>
            {/* <MuiButton style={{ color: "white", fontWeight: "bold", textDecoration: "none", border: "transparent", outline: "none", padding: "10px 30px", marginRight: "20px" }} variant='contained'>Go To Top</MuiButton> */}
          </Box>
        )}
      </Container>
      <hr />
      <Box sx={{ textAlign: "center", mx: "auto", color: "#fff", p: 1 }}>
        <Typography variant="h6" gutterBottom component="div">
          Copyright &#169; {new Date().getFullYear()} & Created by Khondoker
          Tanvir Ahmed || <strong>All Rights Reserved</strong>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
