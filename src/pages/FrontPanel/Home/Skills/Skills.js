import React, { useState } from "react";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Container, Typography, Grid, Fade } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const Skills = () => {
  const useStyles = makeStyles({
    skillsBox: {
      width: "100%",
      // height: "100vh",
      marginTop: "120px",
    },
    sectionDark: {
      backgroundColor: "",
      padding: "10px 0 8px 0",
    },
  });
  const { skillsBox, sectionDark } = useStyles();
  return (
    <section id="skills" className="projects">
      <Box className={skillsBox}>
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
                    Skills
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ margin: "0 10px" }}>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{ color: "#FFFFFF" }}
                >
                  Digital Marketing :
                </Typography>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "",
                  }}
                  aria-label="contacts"
                >
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Social Media Administrator."
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Social Media Marketing Strategy( Facebook, Instagram, LinkedIn & YouTube)"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Instragram Management Strategy (Organic & Paid)"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="YouTube Management and Strategy"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Google Ads (Search, Banner, Video)"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Facebook Ads Administrator"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Content Marketing & Creation."
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="LinkedIn Marketing (Organic & Paid)"
                    />
                  </ListItem>
                </List>
              </Box>

              <Box sx={{ margin: "0 10px" }}>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{ color: "#FFFFFF" }}
                >
                  IT System Management:
                </Typography>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "",
                  }}
                  aria-label="contacts"
                >
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Hardware & Infrastructure Management.
                    "
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Networking & Troubleshooting."
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="On premises & Virtual Server Management."
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Firewall & Antivirus Management."
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Data Backups & Recovery."
                    />
                  </ListItem>
                </List>
              </Box>

              <Box sx={{ margin: "0 10px" }}>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{ color: "#FFFFFF" }}
                >
                  Web Design & Development:
                </Typography>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "",
                  }}
                  aria-label="contacts"
                >
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color: "#FFFFFF" }} primary="HTML" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color: "#FFFFFF" }} primary="CSS" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Bootstrap"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Javascripts"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color: "#FFFFFF" }} primary="PHP" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="Wordpress"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoneOutlineIcon style={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#FFFFFF" }}
                      primary="MySql"
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default Skills;
