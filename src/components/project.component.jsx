import React from 'react';
import Modal from 'react-modal'
import styled from 'styled-components'
import Icons from "./icons.component.jsx"

const MainProjectImage = styled.img`
    width: 100%;
    justify-self: center;
    border: 1px solid black;
`

const TechContainer = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
`

const TechStack = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    font-weight: bold;
    row-gap: 10px;
    column-gap: 20px;
`

const ShortDescription = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    line-height: 1.4em;
    margin: 25px 0;
`

const LongDescriptionContainer = styled.div`
    width: 100%;
    font-size: 15px;
    line-height: 1.5em;
    font-family: 'Montserrat', sans-serif;

    @media (min-width: 768px) {
        grid-column: span 2;
    }
`

const TechCategory = styled.span`
    margin-top: 25px;
    margin-bottom: 5px;
    font-size: 16px;
`

const CloseButton = styled.span`
    position: absolute;
    font-size: 25px;
    right: 7px;
    cursor: pointer;
`

Modal.setAppElement(`#___gatsby`);

const Project = ({isOpen, closeModal, project}) => {

    const {shortDescription, title, githubLink, websiteLink, techList, deployedWith, apiList, longDescription, secondImageName} = project;
    const Image = require(`../images/${secondImageName}`)

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal-overlay"
            contentLabel="Project Modal"
        >
            <CloseButton onClick={closeModal}>&#10006;</CloseButton>
            <div style={{width:"100%"}}> 
                <div style={{display: "inline-flex", alignItems:"center"}}>
                    <h3>{title}</h3>
                    <Icons inverted={false} firstLink={githubLink} secondLink={websiteLink}/>
                </div>
                <ShortDescription>
                    {shortDescription()}
                </ShortDescription>
                <TechContainer>
                    <TechStack>
                        {techList.map((tech, index) => <span key={index}>{tech}</span>)}
                    </TechStack>
                    <TechCategory>Deployed with:</TechCategory>
                    <TechStack>
                        <b>{deployedWith}</b>
                    </TechStack>
                    {(apiList && apiList.length) ? <TechCategory>APIs:</TechCategory> : null}
                    {(apiList && apiList.length) ?
                        <TechStack>
                            {apiList.map((api, index) => <span key={index}>{api}</span>)}
                        </TechStack>
                        : null
                    }
                </TechContainer>
            </div>
            <div style={{margin: "auto"}}>
                <MainProjectImage src={Image.default}></MainProjectImage>
            </div>
            <LongDescriptionContainer>
                <h4>Features:</h4>
                {longDescription()}
            </LongDescriptionContainer>
        </Modal>
    )
}

export default Project;