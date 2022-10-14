import React, { Fragment, useState } from 'react';
import styled from 'styled-components'
import Project from './project.component';
import Icons from "./icons.component";
import { ProjectsData } from '../data/projectsData';
import { OtherProjectsData } from '../data/otherProjectsData';

const Container = styled.div`
    min-height: 800px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    margin-top: 150px;
`

const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 10px;
    align-items: center;
    margin-top: 50px;
    width: 100%;

    @media (min-width: 480px) {
        grid-template-columns 1fr;
    }

    @media (min-width: 768px) {
        grid-template-columns 400px 1fr;
    }

    @media (min-width: 1080px) {
        grid-template-columns 500px 1fr;
    }
`

const ProjectScreen = styled.img`
    width: 100%;
    height: auto;
    opacity: 0.7;
    transition: 0.5s;
    border: 1px solid white;

    &:hover {
        opacity: 1;
    }
`

const StyledButton = styled.button`
    border: 1px solid white;
    cursor: pointer;
    font-size: clamp(0.875rem, 0.8512rem + 0.119vw, 1rem);
    font-weight: bold;
    padding: 10px;
    background-color: transparent;
    color: var(--links);
    margin-bottom: 10px;

    &:hover {
        color: var(--contrast);
        border-color: var(--contrast);
    }
`

const MainProjectTech = styled.p`
    color: var(--contrast);
    font-size: 14px;
    margin-bottom: 5px;
`

const OtherProjects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;`

const OtherProject = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
`

const OtherProjectTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 5px;
`

const OtherProjectDescription = styled.p`
    font-size: 16px;
    margin: 0;
`

const Projects = () => {

    const [projectOpenIndex, setProjectOpenIndex] = useState(undefined)
    const closeModal = () => {
        setProjectOpenIndex(undefined)
    }
    const openModal = (index) => {
        setProjectOpenIndex(index)
    }

    return (
        <Container id="my-projects">
            <div style={{display:"inline-flex", alignItems:"center"}}>
                <h2> My Projects </h2>
                <lord-icon
                    src="https://cdn.lordicon.com/qhgmphtg.json"
                    trigger="hover"
                    colors="primary:#ccd6f6,secondary:#D8A31A"
                    style={{width:"max(4vw, 40px)", height:"max(4vw, 40px)", marginLeft:"10px"}}>
                </lord-icon>
            </div>
            <hr/>
            {
                ProjectsData.map((project, index) => {
                    const Image = require(`../images/${project.mainImageName}`)
                    return(
                        <Fragment key={index}>
                            <ProjectContainer>
                                <a href={project.websiteLink} target="_blank" rel="noreferrer">
                                    <ProjectScreen src={Image.default} alt="app mockup"></ProjectScreen>
                                </a>
                                <div>
                                    <MainProjectTech>
                                        {project.mainTech}
                                    </MainProjectTech>
                                    <div style={{display: "inline-flex", alignItems:"center"}}>
                                        <h3>{project.title}</h3>
                                        <Icons firstLink={project.githubLink} secondLink={project.websiteLink}/>
                                    </div>
                                    {project.mainPageDescription()}
                                    <StyledButton onClick={() => openModal(index)}>More and Tech Stack</StyledButton>
                                </div>
                            </ProjectContainer>
                            <Project isOpen={projectOpenIndex === index} closeModal={closeModal} project={project}/>
                        </Fragment>
                    )
                })
            }
            <h3 style={{marginBottom: "10px", marginTop:"40px", fontWeight:"900"}}>Other Things I Built</h3>
            <OtherProjects>
                {OtherProjectsData.map((project) => {
                    return (
                        <OtherProject>
                            <MainProjectTech>{project.mainTech}</MainProjectTech>
                            <OtherProjectTitle>{project.title}</OtherProjectTitle>
                            <OtherProjectDescription>
                                {project.description()}
                            </OtherProjectDescription>
                        </OtherProject>
                    )
                })}
                <OtherProjectTitle>And more...</OtherProjectTitle>
            </OtherProjects>
        </Container>
    )
}

export default Projects;