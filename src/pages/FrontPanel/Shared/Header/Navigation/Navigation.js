import React, { useEffect, useState, useRef } from "react";
import { scroller } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container, Typography, Link as MaterialLink } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
// import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { HashLink } from "react-router-hash-link";
import { useTheme } from "@mui/material";
import logo from "./../../../../../assets/logo/logo-1.png";
import resumePdf from "./../../../../../assets/resume_file/SonjoyBaruaResume.pdf";
import cvPdf from "./../../../../../assets/cv_file/sonjoybarua_cv.pdf";
import Tooltip from "@mui/material/Tooltip";
import MySlider from "../../../Home/MySlider/MySlider";
import Marquee from "../../../../../components/Marquee";

export default function Navigation() {
  const theme = useTheme();

  const useStyles = makeStyles(() => ({
    headerBanner: {
      minHeight: "100vh",
      background:
        "linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% )",
    },
    appBar: {
      // background: "none !important",
    },
    appBarTransparent: {
      // backgroundColor: 'rgba(67, 129, 168, 0.5)'
      // backgroundImage: "radial-gradient( circle 976px at 51.2% 51%,  rgba(11,27,103,1) 0%, rgba(16,66,157,1) 0%, rgba(11,27,103,1) 17.3%, rgba(11,27,103,1) 58.8%, rgba(11,27,103,1) 71.4%, rgba(16,66,157,1) 100.2%, rgba(187,187,187,1) 100.2% )",
      background: "none !important",
    },
    appBarSolid: {
      // backgroundColor: 'rgba(67, 129, 168)'
      backgroundImage:
        "radial-gradient( circle 976px at 51.2% 51%,  rgba(11,27,103,1) 0%, rgba(16,66,157,1) 0%, rgba(11,27,103,1) 17.3%, rgba(11,27,103,1) 58.8%, rgba(11,27,103,1) 71.4%, rgba(16,66,157,1) 100.2%, rgba(187,187,187,1) 100.2% )",
    },
    appBarWrapper: {
      width: "90%",
      backgroundImage:
        "radial-gradient( circle 976px at 51.2% 51%,  rgba(11,27,103,1) 0%, rgba(16,66,157,1) 0%, rgba(11,27,103,1) 17.3%, rgba(11,27,103,1) 58.8%, rgba(11,27,103,1) 71.4%, rgba(16,66,157,1) 100.2%, rgba(187,187,187,1) 100.2% )",
      borderRadius: "10px",
      margin: "0 auto",
      boxShadow: "2px 3px 7px #0B1B67",
    },
    navMenuBar: {
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
    },
    navLogo: {
      [theme.breakpoints.down("md")]: {
        textAlign: "right",
        lineHeight: 0,
      },
    },
    // logoImg: {
    //   border: "1px dotted #fff",
    //   borderRadius: "5px",
    //   padding: "5px"
    // },
    navItems: {
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
    },
    navItem: {
      // color: "#fff",
      color: "#FFB32F",
      fontWeight: "bolder",
      textDecoration: "none",
      marginRight: "16px",
      fontSize: "14px",
      textTransform: "uppercase",
    },
    navDrawerItem: {
      color: "#000",
      // textDecoration: "none",
    },
  }));
  const {
    headerBanner,
    appBar,
    appBarTransparent,
    appBarSolid,
    appBarWrapper,
    navItem,
    navDrawerItem,
    navLogo,
    logoImg,
    navMenuBar,
    navItems,
  } = useStyles();
  const classes = useStyles();

  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 150;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToProjectSection = () => {
    scroller.scrollTo("projects", {
      duration: 1100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToAboutSection = () => {
    scroller.scrollTo("aboutMe", {
      duration: 1100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToSkillsSection = () => {
    scroller.scrollTo("skills", {
      duration: 1100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  // MUI DRAWER ...
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const navItemLists = () => (
    <Box
      sx={{
        width: 250,
        height: "100%",
        background:
          "linear-gradient( 112.1deg,  rgba(32,38,57,0.8) 11.4%, rgba(63,76,119,0.8) 70.2% )",
      }}
      role="presentation"
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            <MaterialLink
              underline="none"
              component={RouterLink}
              as={HashLink}
              className={navDrawerItem}
              to="/home"
            >
              Home
            </MaterialLink>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AssignmentIndOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            <MaterialLink
              onClick={scrollToAboutSection}
              underline="none"
              component={RouterLink}
              as={HashLink}
              className={navDrawerItem}
              to="/home/#aboutMe"
            >
              About Me
            </MaterialLink>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <CategoryOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            <MaterialLink
              onClick={scrollToSkillsSection}
              underline="none"
              component={RouterLink}
              as={HashLink}
              className={navDrawerItem}
              to="/home/#skills"
            >
              Skills
            </MaterialLink>
          </ListItemText>
        </ListItem>
        <Divider />
        {/* <ListItem button>
          <ListItemIcon>
            <MiscellaneousServicesOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            <MaterialLink
              underline="none"
              component={RouterLink}
              as={HashLink}
              className={navDrawerItem}
              to="/home/#services"
            >
              Services
            </MaterialLink>
          </ListItemText>
        </ListItem>
        <Divider /> */}
        <ListItem button>
          <ListItemIcon>
            <Inventory2OutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            <MaterialLink
              onClick={scrollToProjectSection}
              underline="none"
              component={RouterLink}
              as={HashLink}
              className={navDrawerItem}
              to="/home/#projects"
            >
              Projects
            </MaterialLink>
          </ListItemText>
        </ListItem>
        <Divider />
        {/* <ListItem button>
          <ListItemIcon>
            <BookOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            <MaterialLink
              underline="none"
              component={RouterLink}
              as={HashLink}
              className={navDrawerItem}
              to="/blogs"
            >
              Blogs
            </MaterialLink>
          </ListItemText>
        </ListItem>
        <Divider /> */}
        <ListItem button>
          <ListItemIcon>
            <ContactMailOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            <MaterialLink
              underline="none"
              component={RouterLink}
              as={HashLink}
              className={navDrawerItem}
              to="/contact-me"
            >
              Contact Me
            </MaterialLink>
          </ListItemText>
        </ListItem>
        <Divider />
        {/* <ListItem>
          <ListItemIcon>
            <FileDownloadOutlinedIcon />
          </ListItemIcon>
          <Tooltip title="Download CV" arrow followCursor>
            <ListItemText>
              <Button onClick={handleOpenCV} variant="outlined" color="inherit">
                CV
              </Button>
            </ListItemText>
          </Tooltip>
        </ListItem>
        <Divider /> */}
        {/* <ListItem>
          <ListItemIcon>
            <FileDownloadOutlinedIcon />
          </ListItemIcon>
          <Tooltip title="Download Resume" arrow followCursor>
            <ListItemText>
              <Button
                onClick={handleOpenResume}
                variant="outlined"
                color="inherit"
              >
                Resume
              </Button>
            </ListItemText>
          </Tooltip>
        </ListItem>
        <Divider /> */}
      </List>
    </Box>
  );

  const handleOpenCV = () => {
    window.open(cvPdf);
  };
  const handleOpenResume = () => {
    window.open(resumePdf);
  };

  return (
    <>
      <AppBar
        className={`${appBar} ${classes[navRef.current]}`}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navMenuBar}
            onClick={() => setOpenDrawer(true)}
          >
            <SortOutlinedIcon />
          </IconButton>
          <Box
            className={navLogo}
            component="div"
            sx={{ flexGrow: 1, lineHeight: 0 }}
          >
            <MaterialLink
              underline="hover"
              component={RouterLink}
              as={HashLink}
              to="/"
            >
              {/* <img
                className={logoImg}
                width="80px"
                height="40px"
                src={logo}
                alt="Logo"
              /> */}
              <Typography
                variant="h5"
                sx={{
                  textTransform: "uppercase",
                  color: "#FFB32F",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                KHONDOKER TANVIR AHMED
              </Typography>
            </MaterialLink>
          </Box>
          <Box className={navItems} component="div">
            <MaterialLink
              underline="hover"
              component={RouterLink}
              as={HashLink}
              className={navItem}
              to="/home"
            >
              Home
            </MaterialLink>
            <MaterialLink
              onClick={scrollToAboutSection}
              underline="hover"
              component={RouterLink}
              as={HashLink}
              className={navItem}
              to="/home/#aboutMe"
            >
              About Me
            </MaterialLink>
            <MaterialLink
              underline="hover"
              component={RouterLink}
              as={HashLink}
              className={navItem}
              to="/home/#skills"
            >
              Skills
            </MaterialLink>
            {/* <MaterialLink
              underline="hover"
              component={RouterLink}
              as={HashLink}
              className={navItem}
              to="/home/#services"
            >
              Services
            </MaterialLink> */}
            <MaterialLink
              onClick={scrollToProjectSection}
              underline="hover"
              component={RouterLink}
              as={HashLink}
              className={navItem}
              to="/home/#projects"
            >
              Projects
            </MaterialLink>
            {/* <MaterialLink
              underline="hover"
              component={RouterLink}
              as={HashLink}
              className={navItem}
              to="/blogs"
            >
              Blogs
            </MaterialLink> */}
            <MaterialLink
              underline="hover"
              component={RouterLink}
              as={HashLink}
              className={navItem}
              to="/contact-me"
            >
              Contact Me
            </MaterialLink>
            {/* <Tooltip title="Click to Download Resume" arrow followCursor>
              <Button
                onClick={handleOpenResume}
                variant="outlined"
                color="inherit"
              >
                <FileDownloadOutlinedIcon />
              </Button>
            </Tooltip> */}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Menu Bar Drawer ... */}
      <div>
        <React.Fragment>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            {navItemLists()}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
