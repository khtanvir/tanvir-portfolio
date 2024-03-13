import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Navigation from "../Shared/Header/Navigation/Navigation";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  FormControl,
} from "@mui/material";
import Footer from "../Shared/Footer/Footer";
import MuiButton from "../../../StyledComponent/MuiButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyMap from "../../../components/MyMap";

toast.configure();

const ContactMe = () => {
  const form = useRef();

  const handleContactFormSendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kio744c",
        "template_9t8w8k8",
        form.current,
        "user_yn2Ck377f6Qqvqbh3OdHr"
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast(
            "Your Information Send Successfully Done, Please Wait For Contact With You...",
            {
              position: "top-right",
              type: toast.TYPE.SUCCESS,
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        },
        (error) => {
          // console.log(error.text);
          toast("Something Wrong, Please Try Again Later!!!", {
            position: "top-right",
            type: toast.TYPE.ERROR,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    e.target.reset();
  };

  const useStyles = makeStyles({
    contactMeBox: {
      marginTop: "60px",
    },
    leftGridContent: {
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
    },
    rightGridContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const { contactMeBox, leftGridContent, rightGridContent } = useStyles();

  return (
    <>
      <Navigation></Navigation>

      <section id="contact-me" style={{ marginTop: "80px" }}>
        <Box className={contactMeBox}>
          <Container>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} className={leftGridContent}>
                  <Paper
                    elevation={24}
                    sx={{ p: 1 }}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Typography
                      variant="h3"
                      gutterBottom
                      component="div"
                      style={{ padding: "30px 30px 5px 30px" }}
                    >
                      <span style={{ fontWeight: "bold" }}>Contact</span>{" "}
                      Details
                    </Typography>
                    <Box sx={{ p: 5 }}>
                      <Typography variant="h6" component="h6">
                        <span style={{ fontWeight: "bold" }}>
                          Mobile Number:
                        </span>{" "}
                        +880 1689785499
                      </Typography>
                      <Typography variant="h6" component="h6">
                        <span style={{ fontWeight: "bold" }}>Address:</span>{" "}
                        House: 32, Road: 06, Sector: 12, Uttara, Dhaka-1230
                      </Typography>
                      <Typography variant="h6" component="h6">
                        <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                        Khandokartanvirahmed@gmail.com
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={rightGridContent}>
                  <Paper
                    sx={{
                      color: "#000",
                      border: "1px solid #fff",
                      borderRadius: "10px",
                      p: 5,
                    }}
                  >
                    <Typography variant="h3" gutterBottom component="div">
                      <span style={{ fontWeight: "bold" }}>Contact</span> Me
                    </Typography>

                    <Box
                      sx={{
                        "& .MuiTextField-root": { width: "50ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <form ref={form} onSubmit={handleContactFormSendEmail}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            type="text"
                            name="name"
                            size="large"
                            id="standard-basic"
                            label="Your Name"
                            variant="standard"
                            placeholder="Your Name"
                            required
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            type="email"
                            name="email"
                            size="large"
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            placeholder="Your Email"
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            type="text"
                            name="subject"
                            size="large"
                            id="standard-basic"
                            label="Your Subject"
                            variant="standard"
                            placeholder="Your Subject"
                            required
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            type="text"
                            name="phone"
                            size="large"
                            id="standard-basic"
                            label="Your Phone"
                            variant="standard"
                            placeholder="Your Phone"
                            required
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            type="text"
                            name="message"
                            size="large"
                            multiline
                            rows={4}
                            id="filled-multiline-flexible"
                            label="Your Message"
                            variant="standard"
                            placeholder="Your Message"
                            required
                          />
                        </FormControl>

                        <MuiButton type="submit">Submit</MuiButton>
                      </form>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>

      <Footer></Footer>
    </>
  );
};

export default ContactMe;
