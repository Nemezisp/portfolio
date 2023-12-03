import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const StyledButton = styled.button`
    border: 1px solid white;
    cursor: pointer;
    font-size: clamp(0.875rem, 0.8274rem + 0.2381vw, 1.125rem);
    font-weight: bold;
    padding: 20px;
    background-color: transparent;
    color: var(--links);
    margin-top: 20px;

    &:hover {
        color: var(--contrast);
        border-color: var(--contrast);
    }
`

const FirstTitleHalf = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

const IntroText = styled.div`
    font-family: 'Montserrat', sans-serif;
    line-height: 2em;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: clamp(0.875rem, 0.8036rem + 0.3571vw, 1.25rem);
    white-space: pre-line;
`

const Intro = () => {
    return (
        <Container>
            <FirstTitleHalf>
                <h1>Hi, I'm Paweł. </h1>
                <lord-icon
                    src="https://cdn.lordicon.com/nobciafz.json"
                    trigger="loop"
                    delay="2500"
                    colors="primary:#ccd6f6,secondary:#D8A31A"
                    style={{width:"max(8vw, 80px)", height:"max(8vw, 80px)"}}>
                </lord-icon>
            </FirstTitleHalf>
            <h1>And I'm a Full Stack Developer.</h1>
            <IntroText>{`I love solving all kinds of problems, particularly in cloud and web development. 
            Eagerly exploring new challenges, I turn ideas into creations and rapidly adapt to new technologies.
            Committed to pushing my skills' boundaries, my journey is about constantly evolving, building, and learning in the dynamic tech landscape.`}
            </IntroText>

            <a href="#my-projects">
                <StyledButton>Check out my projects!</StyledButton>
            </a>
        </Container>
    )
}

export default Intro;