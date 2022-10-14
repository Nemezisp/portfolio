import React from 'react';
import styled from 'styled-components'
import resume from '../assets/pj-cv.pdf' 

const NavContainer = styled.div`
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0px 10px;

    @media (min-width: 480px) {
        padding: 0px 40px;
    }

    @media (min-width: 768px) {
        padding: 0px 50px;
    }

    @media (min-width: 1080px) {
        padding: 0px 60px;
    }
`

const StyledLink = styled.a`
    margin-left: 15px;
    font-size: 14px;
    text-decoration: none;

    @media (min-width: 480px) {
        margin-left: 20px;
        font-size: 16px;
    }

    @media (min-width: 768px) {
        margin-left: 30px;
    }
`

const ResumeButton = styled.a`
    color: var(--links);
    border: 1px solid var(--links);
    background-color: transparent;
    padding: 5px;
    width: 80px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;
    margin-left: 15px;
    text-align: center;

    @media (min-width: 480px) {
        margin-left: 20px;
        font-size: 16px;
    }

    @media (min-width: 768px) {
        margin-left: 30px;
    }

    &:hover {
        color: var(--contrast);
        border-color: var(--contrast);
    }
`

const Navigation = () => {
    return (
        <NavContainer>
            <StyledLink href="#about-me">About Me</StyledLink>
            <StyledLink href="#my-projects">My Projects</StyledLink>
            <StyledLink href="#contact">Contact</StyledLink>
            <ResumeButton href={resume} download="pj-cv.pdf">Resume</ResumeButton>
        </NavContainer>
    )
}

export default Navigation;