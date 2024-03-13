import * as React from 'react';
import { Grid, Box, Typography, Fade, List, ListItem, ListItemText, ListItemIcon, Link as MaterialLink } from '@mui/material';
// import Zoom from '@mui/material/Zoom';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MuiButton from '../../../../StyledComponent/MuiButton';
import ProjectDetailModal from '../ProjectDetailModal/ProjectDetailModal';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';


export default function ProjectCard({project}) {
  const {id, key, name, shortDesc, price, img, liveUrl, gitUrl} = project;

  const [openProjectDetail, setOpenProjectDetail] = React.useState(false);
  const handleProjectDetailModalOpen = () => setOpenProjectDetail(true);
  const handleProjectDetailModalClose = () => setOpenProjectDetail(false);

  const theme = useTheme();
  const useStyles = makeStyles({
      imageContainer: {
        position: "relative",
        "&:hover $imageOverlay": {
          opacity: 0.9,
        }
      },
      responsiveImg: {
        width: "100%",
        height: "auto",
        borderRadius: "20px"
      },
      imageOverlay: {
        position: "absolute",
        width: "100%",
        height: "99%",
        top: 0,
        left: 0,
        background: "linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% )",
        color: "#fff",
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0,
        transition: "0.7s",
        borderRadius: "20px"
      },
      overlayTitle: {
        fontSize: "1.5rem",
        marginBottom: "0px",
        [theme.breakpoints.down("xs")]: {
          fontSize: "1rem",
        },
      }

  });
  const {imageContainer, responsiveImg, imageOverlay, overlayTitle } = useStyles();

  return (
    <>
      <Grid item xs={12} sm={12} md={4} lg={4} key={key}>
          <Box className={imageContainer} >
            {/* <Fade> */}
              <img
                  src={img}
                  alt={name}
                  className={responsiveImg}
              />
              <Box className={imageOverlay}>
                  <Typography component="p" sx={{ fontWeight: "bold", marginBottom: "0" }} className={overlayTitle}>
                    {name}
                  </Typography>
                  <Typography component="p" sx={{ textAlign: "justify", mx: "auto" }} className={overlayTitle}>
                    <strong style={{ marginLeft: "15px" }}> Short Description:</strong> 
                                             
                          {
                              shortDesc.map((list, index) => {
                                return (
                                  <List key={index}>
                                    <ListItem style={{ marginBottom: "-30px" }}>
                                      <ListItemIcon>
                                        <DoneOutlineIcon style={{ color: "white" }} />
                                      </ListItemIcon>
                                      <ListItemText primary={ list } />
                                    </ListItem>
                                  </List>
                                )

                            })
                          }   
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "-30px" }}>
                    <MaterialLink  underline="none" component={RouterLink} to={`/projects/project-detail/${id}`} >
                        <MuiButton style={{ color: "white", fontWeight: "bold", textDecoration: "none", border: "transparent", outline: "none", padding: "5px 12px", marginRight: 5 }}  variant='contained'>View Detail</MuiButton>
                    </MaterialLink>
                    {
                      liveUrl 
                      &&
                      <MaterialLink underline="none" href={liveUrl} target="_blank" >
                          <MuiButton style={{ color: "white", fontWeight: "bold", textDecoration: "none", border: "transparent", outline: "none", padding: "8px 12px", marginRight: 5  }} variant='contained'>Live Demo</MuiButton>
                      </MaterialLink> 
                    }
                    {/* {
                      gitUrl 
                      && 
                      <a target="_blank" href={gitUrl}>
                        <MuiButton style={{ color: "white", fontWeight: "bold", textDecoration: "none", border: "transparent", outline: "none", padding: "8px 12px" }} variant='contained'>Git Repo</MuiButton>
                      </a>
                    } */}
                  </Box>
              </Box>
            {/* </Fade> */}
          </Box>
      </Grid>
      {/* MODAL COMPONENT ... */}
      <ProjectDetailModal
        openProjectDetail={openProjectDetail} 
        handleProjectDetailModalClose={handleProjectDetailModalClose}
        project={project} 
      >
      </ProjectDetailModal>

    </>
  );
}
