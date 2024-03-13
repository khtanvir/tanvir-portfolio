import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Header/Navigation/Navigation";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import { makeStyles } from "@mui/styles";
import MySlider from "../MySlider/MySlider";
import Marquee from "../../../../components/Marquee";
import Skills from "../Skills/Skills";

const Home = () => {
  // const useStyles = makeStyles({

  // });
  // const {} = useStyles();

  return (
    <>
      {/* <Marquee></Marquee> */}
      <Navigation></Navigation>
      <MySlider></MySlider>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
};

export default Home;
