import React from "react";
import styled from 'styled-components';
import './global.css';
import Navigation from '../components/navigation.component';
import About from '../components/about.component';
import Contact from '../components/contact.component';
import Intro from '../components/intro.component';
import Projects from "../components/projects.component";
import Helmet from "react-helmet";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background);
  color: var(--text-primary);
`

const StyledMain = styled.main`
  padding: 0px 25px;

  @media (min-width: 480px) {
      padding: 0px 50px;
  }

  @media (min-width: 768px) {
    padding: 0px 80px;
  }

  @media (min-width: 1080px) {
    padding: 0px 200px;
  }
`;

const IndexPage = () => {
  return (
    <AppContainer>
      <Helmet>
        <title>PJ Portfolio</title>
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
      </Helmet>
      <Navigation/>
      <StyledMain>
        <Intro/>
        <About/>
        <Projects/>
        <Contact/>
      </StyledMain>
    </AppContainer>
  )
}

export default IndexPage
