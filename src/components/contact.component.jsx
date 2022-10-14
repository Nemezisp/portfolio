import React from 'react';
import styled from 'styled-components';
import resume from '../assets/pj-cv.pdf' 

const Container = styled.div`
    min-height: 200px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    margin-top: 150px;
    padding-bottom: 50px;
`
const StyledButton = styled.a`
    border: 1px solid white;
    cursor: pointer;
    font-size: clamp(0.875rem, 0.8512rem + 0.119vw, 1rem);
    font-weight: bold;
    padding: 10px;
    background-color: transparent;
    color: var(--links);
    width: 120px;
    text-align: center;

    &:hover {
        color: var(--contrast);
        border-color: var(--contrast);
    }
`

const InnerContainer = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    font-size: 17px;
    font-family: "Montserrat", sans-serif;
    grid-gap: 50px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`

const Icon = styled.svg`
    cursor: pointer;
    filter: invert(100%);

    &:hover {
        opacity: 0.5;
    }
`

const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    grid-row: 1;
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    grid-row: 2;

    @media (min-width: 768px) {
        grid-row: 1;
    }
`

const Contact = () => {
    return (
        <Container id="contact">
            <div style={{display:"inline-flex", alignItems:"center"}}>
                <h2> Contact </h2>
                <lord-icon
                    src="https://cdn.lordicon.com/nocovwne.json"
                    trigger="hover"
                    colors="primary:#ccd6f6,secondary:#D8A31A"
                    style={{width:"max(4vw, 40px)", height:"max(4vw, 40px)", marginLeft:"10px"}}>
                </lord-icon>
            </div>
            <hr/>
            <InnerContainer>
                <ContactContainer>
                    <span>Any questions or ideas? Want to work together? </span>
                    <span> I'm always happy to talk:</span>
                    <div style={{display: "inline-flex", gap: "20px", alignItems: "center"}}>
                        <a style={{height: "24px"}} href={"mailto:p.jarmula7@gmail.com"} target="_blank" rel="noreferrer">
                            <Icon width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/>
                            </Icon>
                        </a>
                        <a style={{height: "24px"}} href={"https://github.com/Nemezisp"} target="_blank" rel="noreferrer">
                            <Icon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </Icon>
                        </a>
                        <a style={{height: "24px"}} href={"https://www.linkedin.com/in/pawe%C5%82-jarmu%C5%82a-3aa88720a/"} target="_blank" rel="noreferrer">
                            <Icon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </Icon>
                        </a>
                    </div>
                    <span style={{fontSize: "14px"}}>
                        p.jarmula7@gmail.com
                    </span>
                </ContactContainer>
                <ResumeContainer>
                    <span>Download my resume in pdf:</span>
                    <StyledButton href={resume} download="pj-cv.pdf">Download</StyledButton>
                </ResumeContainer>
            </InnerContainer>
        </Container>
    )
}

export default Contact;