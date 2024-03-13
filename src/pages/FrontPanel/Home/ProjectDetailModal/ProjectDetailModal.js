import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Box, Typography, Modal, Fade, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import StarIcon from '@mui/icons-material/DoneOutline';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  minHeight: "100vh",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

const ProjectDetailModal = ({openProjectDetail, handleProjectDetailModalClose, project}) => {
    const {id, key, name, shortDesc, longDesc, price, img, imgTwo, imgThree, liveUrl, gitUrl} = project;

    return (
        <Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openProjectDetail}
                onClose={handleProjectDetailModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openProjectDetail}>
                    <Box sx={style}>
                        <img
                            src={img}
                            alt={name}
                            loading="lazy"
                            style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4, width: "100%", height: "160px" }}
                        />
                        <img
                            src={imgTwo}
                            alt="ImageTwo"
                            loading="lazy"
                            style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4, width: "50%", height: "160px" }}
                        />
                        <img
                            src={imgThree}
                            alt="ImageThree"
                            loading="lazy"
                            style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4, width: "50%", height: "160px" }}
                        />
                        <Typography id="modal-modal-title" component="h2">
                            {name}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <strong>Description:</strong>
                                {
                                    longDesc.map((list, index) => {
                                        return (
                                        <List key={index}>
                                            <ListItem style={{ marginBottom: "-30px" }}>
                                                <ListItemIcon>
                                                    <StarIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={ list } />
                                            </ListItem>
                                        </List>
                                        )

                                    })
                                }
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
      </Box>
    );
};

export default ProjectDetailModal;