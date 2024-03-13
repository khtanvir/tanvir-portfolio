import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import ContactMe from './pages/FrontPanel/ContactMe/ContactMe';
import Home from './pages/FrontPanel/Home/Home/Home';
import { makeStyles } from '@mui/styles';
import Blog from './pages/FrontPanel/Blog/Blog';
import Error404 from './pages/FrontPanel/ErrorPage/Error404/Error404';
import ProjectDetail from './pages/FrontPanel/Home/ProjectDetail/ProjectDetail';


function App() {
    const useStyles = makeStyles({
        siteWrapper: {
          width: "100%",
          minHeight: "100vh",
          background: "linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% )",            
        }

      });
    const {siteWrapper} = useStyles();

  return (

    <>
      <Box className={siteWrapper}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="home" element={<Home />} />
            <Route exact path="contact-me" element={<ContactMe />} />
            <Route exact path="/projects/project-detail/:id" element={<ProjectDetail />} />
            <Route exact path="blogs" element={<Blog />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>

  );
}


export default App;
