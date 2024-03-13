import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link as MaterialLink,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { NavLink, Link as RouterLink, useParams } from "react-router-dom";
import Navigation from "../../Shared/Header/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import projectImgOne from "./../../../../assets/projects/mern_project_1.png";
import projectImgOneOne from "./../../../../assets/projects/mern_project_1_1.png";
import projectImgOneTwo from "./../../../../assets/projects/mern_project_1_2.png";
import projectImgTwo from "./../../../../assets/projects/mern_project_2.png";
import projectImgTwoOne from "./../../../../assets/projects/mern_project_2_1.png";
import projectImgTwoTwo from "./../../../../assets/projects/mern_project_2_2.png";
import projectImgThree from "./../../../../assets/projects/mern_project_3.png";
import projectImgThreeOne from "./../../../../assets/projects/mern_project_3_1.png";
import projectImgThreeTwo from "./../../../../assets/projects/mern_project_3_2.png";
import projectImgFour from "./../../../../assets/projects/laravel_project_1.png";
import projectImgFourOne from "./../../../../assets/projects/laravel_project_1_1.png";
import projectImgFourTwo from "./../../../../assets/projects/laravel_project_1_2.png";
import projectImgFive from "./../../../../assets/projects/laravel_project_2.png";
import projectImgFiveOne from "./../../../../assets/projects/laravel_project_2_1.png";
import projectImgFiveTwo from "./../../../../assets/projects/laravel_project_2_2.png";
import projectImgSix from "./../../../../assets/projects/core_php_project_1.png";
import projectImgSixOne from "./../../../../assets/projects/core_php_project_1_1.png";
import projectImgSixTwo from "./../../../../assets/projects/core_php_project_1_2.png";
import projectImgSeven from "./../../../../assets/projects/live_project_frontsite.png";
import projectImgSevenOne from "./../../../../assets/projects/live_project_admindashboard.png";
import projectImgSevenTwo from "./../../../../assets/projects/live_project_projectdashboard.png";
import projectImgSevenThree from "./../../../../assets/projects/live_project_projectcreate.png";
import projectImgSevenFour from "./../../../../assets/projects/live_project_editproject.png";
import MuiButton from "../../../../StyledComponent/MuiButton";
// import StarIcon from '@mui/icons-material/Star';
import StarBorder from "@mui/icons-material/StarBorder";

const projectData = [
  {
    id: 6,
    key: "B01DBGVB7K",
    category: "core_php",
    name: "Library Management Admin (Core PHP)",
    shortDesc: ["This site is for books store & rent.", "etc..."],
    longDesc: [
      "This site is for books store & rent.",
      "Stock, store & rent management system.",
    ],
    rating: 5,
    img: projectImgSix,
    imgTwo: projectImgSixOne,
    imgThree: projectImgSixTwo,
    price: 0,
    liveUrl: "",
    gitUrl: "https://github.com/khtanvir/core_lms.git",
  },
  {
    id: 7,
    key: "B01CBEVH7F",
    category: "wordpress",
    name: "Sr Drywall Inc. (WORDPRESS)",
    shortDesc: [
      "This SR DRYWALL INC website is a real state company of construction business With Private House, Real Estate Management, Commercial Building, General Contractors, Property Management, Hotel, Motel, And Religious Establishments etc.",
      "User/Customer/Client from this site to Business-Based Categories, All Category-Based Projects, Site Settings, Will be able to take advantage of communication system etc with the company.",
    ],
    longDesc: [
      "This SR DRYWALL INC website is a real state company of construction business With Private House, Real Estate Management, Commercial Building, General Contractors, Property Management, Hotel, Motel, And Religious Establishments etc.",
      "User/Customer/Client from this site to Business-Based Categories, All Category-Based Projects, Site Settings, Will be able to take advantage of communication system etc with the company",
      "A CMS is typically used for web content management. This site was created by a fully CMS-based system.",
      "This is used to manage the creation and modification of digital content",
      "This website uses an MYSQL database to manage all content.",
      "This content management application(CMA), as the back-end admin user admin panel interface that allows a user, to add, modify, and remove content for the front site website.",
    ],
    rating: 5,
    img: projectImgSeven,
    imgTwo: projectImgSevenOne,
    imgThree: projectImgSevenTwo,
    imgFour: projectImgSevenThree,
    imgFive: projectImgSevenFour,
    price: 0,
    liveUrl: "https://srdrywallinc.net/",
    liveCmsUrl: "https://srdrywallinc.net/login",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});

  useEffect(() => {
    // const url = "/projects.json"
    // fetch(url)
    // .then(res => res.json())
    // .then(data => setProjects(data))
    setProjects(projectData);
  }, []);

  useEffect(() => {
    const matchedProject = projects.find((pj) => pj.id === parseInt(id));
    setProject(matchedProject);
  }, [projects]);

  // console.log(project);

  const useStyles = makeStyles({
    productDetailBox: {
      width: "100%",
      // height: "100vh",
      marginTop: "80px",
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
  const { productDetailBox, leftGridContent, rightGridContent } = useStyles();

  return (
    <>
      <Navigation></Navigation>

      <Box className={productDetailBox}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Paper elevation={16} sx={{ p: 3 }}>
                  <Typography variant="h3" gutterBottom>
                    <span style={{ fontWeight: "bold" }}>Project </span> Detail:
                  </Typography>
                  <hr />
                  <Box sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={6}>
                        <img
                          width="100%"
                          style={{
                            borderRadius: "10px",
                            border: "1px solid #FF840A",
                            padding: "5px",
                          }}
                          src={project?.img}
                          alt=""
                        />
                        <Box sx={{ display: "flex", mt: 3 }}>
                          {project?.imgTwo ? (
                            <img
                              width="50%"
                              style={{
                                marginRight: "10px",
                                borderRadius: "10px",
                                border: "1px solid #FF840A",
                                padding: "5px",
                              }}
                              src={project?.imgTwo}
                              alt="ImageTwo"
                            />
                          ) : (
                            ""
                          )}
                          {project?.imgThree ? (
                            <img
                              width="50%"
                              style={{
                                marginRight: "10px",
                                borderRadius: "10px",
                                border: "1px solid #FF840A",
                                padding: "5px",
                              }}
                              src={project?.imgThree}
                              alt="ImageThree"
                            />
                          ) : (
                            ""
                          )}
                          {project?.imgFour ? (
                            <img
                              width="50%"
                              style={{
                                marginRight: "10px",
                                borderRadius: "10px",
                                border: "1px solid #FF840A",
                                padding: "5px",
                              }}
                              src={project?.imgFour}
                              alt="ImageFour"
                            />
                          ) : (
                            ""
                          )}
                          {project?.imgFive ? (
                            <img
                              width="50%"
                              style={{
                                marginRight: "10px",
                                borderRadius: "10px",
                                border: "1px solid #FF840A",
                                padding: "5px",
                              }}
                              src={project?.imgFive}
                              alt="ImageFive"
                            />
                          ) : (
                            ""
                          )}
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h6">{project?.name}</Typography>
                        <Typography sx={{ mt: 2 }}>
                          <strong>Description:</strong>
                          {project?.longDesc?.map((list, index) => {
                            return (
                              <List key={index}>
                                <ListItem style={{ marginBottom: "-30px" }}>
                                  <ListItemIcon>
                                    <StarBorder style={{ color: "black" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={list} />
                                </ListItem>
                              </List>
                            );
                          })}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          {project?.liveUrl && (
                            <MaterialLink
                              underline="none"
                              href={project?.liveUrl}
                              target="_blank"
                            >
                              <MuiButton
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  textDecoration: "none",
                                  border: "transparent",
                                  outline: "none",
                                  padding: "10px 30px",
                                  marginRight: "20px",
                                }}
                                variant="contained"
                              >
                                Live Demo
                              </MuiButton>
                            </MaterialLink>
                          )}
                          {project?.gitUrl && (
                            <MaterialLink
                              underline="none"
                              href={project?.gitUrl}
                              target="_blank"
                            >
                              <MuiButton
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  textDecoration: "none",
                                  border: "transparent",
                                  outline: "none",
                                  padding: "10px 30px",
                                }}
                                variant="contained"
                              >
                                Git Repo
                              </MuiButton>
                            </MaterialLink>
                          )}
                          {project?.liveCmsUrl && (
                            <MaterialLink
                              underline="none"
                              href={project?.liveCmsUrl}
                              target="_blank"
                            >
                              <MuiButton
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  textDecoration: "none",
                                  border: "transparent",
                                  outline: "none",
                                  padding: "10px 30px",
                                }}
                                variant="contained"
                              >
                                Live CMS Demo
                              </MuiButton>
                            </MaterialLink>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
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

export default ProjectDetail;
