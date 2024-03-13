import React, { useState } from "react";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Container, Typography, Grid, Fade } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectImgOne from "./../../../../assets/projects/mern_project_1.png";
import projectImgTwo from "./../../../../assets/projects/mern_project_2.png";
import projectImgThree from "./../../../../assets/projects/mern_project_3.png";
import projectImgFour from "./../../../../assets/projects/laravel_project_1.png";
import projectImgFive from "./../../../../assets/projects/laravel_project_2.png";
import projectImgSix from "./../../../../assets/projects/core_php_project_1.png";
import projectImgSeven from "./../../../../assets/projects/live_project_frontsite.png";
import MuiButton from "../../../../StyledComponent/MuiButton";

const Projects = () => {
  const ProjectData = [
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
      price: 0,
      liveUrl: "",
      gitUrl: "",
    },
    {
      id: 7,
      key: "B01CBEVH7F",
      category: "wordpress",
      name: "Sr Drywall Inc. (Wordpress)",
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
      price: 0,
      liveUrl: "https://srdrywallinc.net/",
      liveCmsUrl: "https://srdrywallinc.net/login",
    },
  ];

  const useStyles = makeStyles({
    projectsBox: {
      width: "100%",
      // height: "100vh",
      marginTop: "120px",
    },
    sectionDark: {
      backgroundColor: "",
      padding: "10px 0 8px 0",
    },
  });
  const { projectsBox, sectionDark } = useStyles();

  const [visibleProject, setVisibleProject] = useState(3);
  // const [show, setShow] = useState(false);

  const handleShowMoreProjects = () => {
    // setShow((prev) => !prev);
    setVisibleProject((preValue) => preValue + 3);
  };

  return (
    <section id="projects" className="projects">
      <Box className={projectsBox}>
        <Container>
          <Box className={sectionDark}>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Grid item xs={12} sm={12} md={2}>
                <Box sx={{ mb: 7, color: "#fff" }}>
                  <Typography
                    sx={{ fontWeight: "bold", textAlign: "center" }}
                    variant="h2"
                    gutterBottom
                  >
                    Projects
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h6"
                    gutterBottom
                  >
                    See All Projects
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Fade in={visibleProject}>
              <Container maxWidth="xl">
                <Grid container spacing={2}>
                  {ProjectData.slice(0, visibleProject).map((project) => {
                    return (
                      <ProjectCard
                        key={project.key}
                        project={project}
                      ></ProjectCard>
                    );
                  })}
                </Grid>
              </Container>
            </Fade>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {visibleProject < ProjectData.length && (
              <MuiButton
                onClick={handleShowMoreProjects}
                sx={{ width: "30%" }}
                size="large"
                variant="contained"
              >
                Load More
              </MuiButton>
            )}
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default Projects;
