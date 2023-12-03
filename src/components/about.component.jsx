import React, {useState} from 'react';
import styled from 'styled-components'

const Container = styled.div`
    min-height: 500px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
`

const TitleWithIcon = styled.span`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    font-size: 14px;
    width: 100%;
    border: 1px solid white;
    margin-right: none;
    padding: 15px 0px 15px 0px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    @media (min-width: 768px) {
        font-size: 16px;
        flex-direction: row;
    }

    &:hover {
        opacity: 0.5;
        color: var(--contrast);
    }
`

const CategoryContainer = styled.div`
    position: relative;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.05em;
    background-color: black;
    min-height: 400px;

    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 10px 30px;
    border: 1px solid white;
    border-radius: 20px;
    border-top-left-radius: 0px;

    @media (min-width: 480px) {
        font-size: 16px;
    }

`

const OptionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const InnerContainer = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: 60px 1fr;

    @media (min-width: 480px) {
        grid-template-columns: 90px 1fr;
    }

    @media (min-width: 768px) {
        grid-template-columns: 130px 1fr;
    }

    @media (min-width: 1080px) {
        grid-template-columns: 160px 1fr;
    }
`

const CategoryTitle = styled.span`
    margin: 0 auto;
    font-size: 24px;
    font-weight: bold;
    text-decoration: underline;
`

const TechList = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    font-weight: bold;
    row-gap: 10px;
    column-gap: 20px;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    
    @media (min-width: 480px) {
        font-size: 14px;
    }
`

const categories = {
    TECH: "Tech",
    EDUCATION: "Education",
    WORK: "Work"
}

const stack = [
    {"title": "Cloud Technologies", "tech": ["Azure Services (including AKS)", "Kubernetes", "Docker", "Helm", "AWS (S3, Lambda)"]},
    {"title": "DevOps & Monitoring", "tech": ["Prometheus", "Grafana", "Graylog", "ArgoCD", "Azure DevOps Pipelines", "Black Duck"]},
    {"title": "Front-end", "tech": ["TypeScript", "JavaScript", "React", "Redux", "Next.js", "Gatsby.js", "CSS", "SASS", "Styled-Components"]},
    {"title": "Back-end", "tech": ["C# (.Net Core, .Net Framework)", "Python (Flask)", "Node.js (Express.js)", "REST APIs", "GraphQL", "Socket.IO", "Solidity", "Hardhat", "Ethers.js"]},
    {"title": "Databases", "tech": ["SQL", "MarkLogic", "Firebase", "Airtable", "Redis", "MongoDB"]},
    {"title": "Other", "tech": ["Python for ML (Scikit-learn, TensorFlow)", "Mathematica", "Octave", "Selenium", "Wordpress", "Moralis"]},
]

const About = () => {

    const [currentCategory, setCurrentCategory] = useState(categories.WORK)

    const studiesTechList = ["C++", "Python", "Mathematica", "Octave", "numerical methods", "data analysis"]
    const independentStudiesTechList = ["web development (HTML, CSS, JavaScript, React)", "machine learning (Scikit-learn)", "web scraping (Selenium)"]
    
    return (
        <Container id="about-me">
            <div style={{display:"inline-flex", alignItems:"center"}}>
                <h2> About Me </h2>
                <lord-icon
                    src="https://cdn.lordicon.com/eszyyflr.json"
                    trigger="hover"
                    colors="primary:#ccd6f6,secondary:#D8A31A"
                    style={{width:"max(4vw, 40px)", height:"max(4vw, 40px)"}}>
                </lord-icon>
            </div>
            <hr/>
            <InnerContainer>
                <OptionsDiv>
                    <TitleWithIcon style={currentCategory === categories.EDUCATION ? {backgroundColor:"black", color: "var(--contrast)"} : null} 
                                   onClick={() => setCurrentCategory(categories.EDUCATION)}>
                        <lord-icon
                            src="https://cdn.lordicon.com/ajyyzcwv.json"
                            trigger="hover"
                            colors="primary:#ccd6f6,secondary:#D8A31A"
                            style={{width:"max(2.5vw, 35px)", height:"max(2.5vw, 35px)"}}>
                        </lord-icon>
                        <span> Studies </span>
                    </TitleWithIcon>
                    <TitleWithIcon style={currentCategory === categories.WORK ? {backgroundColor:"black", color: "var(--contrast)"} : null} 
                                   onClick={() => setCurrentCategory(categories.WORK)}>
                        <lord-icon
                            src="https://cdn.lordicon.com/qhgmphtg.json"
                            trigger="hover"
                            colors="primary:#ccd6f6,secondary:#D8A31A"
                            style={{width:"max(2.5vw, 35px)", height:"max(2.5vw, 35px)"}}>
                        </lord-icon>
                        <span> Work </span>
                    </TitleWithIcon>
                    <TitleWithIcon style={currentCategory === categories.TECH ? {backgroundColor:"black", color: "var(--contrast)",} : null} 
                                   onClick={() => setCurrentCategory(categories.TECH)}>                        
                        <lord-icon
                            src="https://cdn.lordicon.com/rhvlcscg.json"
                            trigger="hover"
                            colors="primary:#ccd6f6,secondary:#D8A31A"
                            style={{width:"max(2.5vw, 35px)", height:"max(2.5vw, 35px)"}}>
                        </lord-icon>
                        <span> Tech </span>
                    </TitleWithIcon>
                </OptionsDiv>
                { currentCategory === categories.EDUCATION &&
                    <CategoryContainer>
                        <CategoryTitle> Education </CategoryTitle>
                        <b> 10.2015 - 09.2020 </b>
                        <span> <b>University of Warsaw</b>, Department of Physics </span>
                        <span> Master's degree in <b>Nanostructure Engineering</b> (with honors) </span>
                        <ul style={{paddingLeft:"15px", marginTop: "0px"}}>
                            <li>As part of studies I learned the basics of: </li>
                            <TechList>
                                {studiesTechList.map((tech) => <span>{tech}</span>)}
                            </TechList>
                            <li>Independently, I started learning and building stuff with: </li>
                            <TechList>
                                {independentStudiesTechList.map((tech) => <span>{tech}</span>)}
                            </TechList>
                            <li>From that point, I finished many courses and built many things, using various technologies. </li>
                        </ul>
                    </CategoryContainer>
                }
                { currentCategory === categories.WORK &&
                    <CategoryContainer>
                        <CategoryTitle> Work </CategoryTitle>
                        <hr style={{width: "200px"}}/>
                        <b> 11.2022 - now </b>
                        <span><b> RD Projekt </b> (for Progress Software) - <b>Full Stack Developer</b></span>
                        <span>Part of a dynamic team, working on a complex cloud project, where I'm involved in:</span>
                        <ul style={{paddingLeft:"15px", marginTop: "0px", marginBottom: "0px"}}>
                            <li>Development of <b>diverse microservices</b>, leveraging a mix of C#, TypeScript, Python and more.</li>
                            <li>Optimization and management of deployments through <b>Kubernetes</b> within Azure Kubernetes Service (AKS) clusters</li>
                            <li>Maintenance and optimization of <b>Docker</b> images.</li>
                        </ul>
                        <span><b><u>Key Achievements:</u></b></span>
                        <ul style={{paddingLeft:"15px", marginTop: "0px"}}>
                            <li>Design and implementation of a <b>comprehensive monitoring solution</b>, encompassing a custom-built microservice for monitoring, Grafana dashboards, and integrated use of Prometheus and Graylog.</li>
                            <li><b>Significant efficiency enhancements of a key integration process</b> (involving document classification and metadata enrichment) between SPO and one of our microservices.</li>
                        </ul>
                        <hr style={{width: "200px"}}/>
                        <b> 11.2020 - 08.2023 </b>
                        <span><b> Tatsu Media, own business </b> (with one associate)</span>
                        <span> Focused on <b> website design and development. </b> </span>
                        <span> Things I did:</span>
                        <ul style={{paddingLeft:"15px", marginTop: "0px"}}>
                            <li>Full development process, from projects to realizations: <b>websites, e-commerce stores and e-learning platforms. </b> </li>
                            <li>Preparing <b>strategies</b> and <b>project valuations</b> for clients.</li>
                            <li>Website <b>performance optimizations</b> and implementation of <b>analytical tools</b> (like GTM or GA).</li>
                            <li><b>Strategy sessions</b> with potential clients, preparing <b>website audits</b>. </li>
                            <li><b>Continous communication</b> and <b>troubleshooting issues</b> on video calls.</li>
                        </ul>
                    </CategoryContainer>
                }
                { currentCategory === categories.TECH &&
                    <CategoryContainer>
                        <CategoryTitle> Tech </CategoryTitle>
                        <span> Technologies I have experience with: </span>
                        <ul style={{paddingLeft:"15px", marginTop: "0px"}}>
                            {stack.map(category => (
                                <>
                                    <li>{category.title}: </li>
                                    <TechList>
                                        {category.tech.map((tech) => <span>{tech}</span>)}
                                    </TechList>
                                </>
                            ))}
                        </ul>
                    </CategoryContainer>
                }
            </InnerContainer>
        </Container>
    )
}

export default About;