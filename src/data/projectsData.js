import React, {Fragment} from "react";

export const ProjectsData = [
    
    {
        title: "Chess WDA",
        githubLink: "https://github.com/Nemezisp/chess-wda",
        websiteLink: "https://chess-wda.herokuapp.com/",
        techList: ["React", "Redux", "Express.js", "Node.js", "Firebase", "Socket.IO", "CSS"],
        deployedWith: "Heroku",
        mainTech: "React + Express.js",
        apiList: [],
        mainImageName: "ChessWDA.png",
        secondImageName: "ChessWDA-2.png",
        shortDescription: () => <span>App built with <b>React</b> and <b>Express.js</b>. Play <b>Chess With Different Armies</b> (more complicated chess version with 12 additional pieces and additional rules) <b>locally or online</b>.</span>,
        longDescription: () => {
            return (
                <Fragment>
                    <ul>
                        <li> Game built from scratch (all the typical chess rules and pieces + additional ones from chess WDA). </li>
                        <li> Choose one of the default armies or compose your own out of all available pieces. </li>
                        <li> Game notation with ability to look at all the previous positions (also during the game), a help popup showing how different pieces move.</li>
                        <li> Play <b>locally</b> or <b>online</b> with other users (server built with <b>Express.js</b> and <b>Socket.io</b>)</li>
                        <li> Online user profiles and authentication with <b>Firebase</b>. </li> 
                        <li> Online lobby, where users can challenge other users to a game. </li>
                        <li> Online mode supports time control. </li>
                        <li> This app is a <b>PWA</b> (Progressive Web App).</li>
                        <li> All the new pieces were created in <b>GIMP</b>. </li>
                    </ul>
                </Fragment>
            )
        },
        mainPageDescription: () => {
            return (
                <Fragment>
                    <p>Chess With Different Armies - chess variation with 12 additional pieces!</p>
                    <p>Play locally or online!</p>
                </Fragment>
            )
        }
    },
    {
        title: "Food Picker",
        githubLink: "https://github.com/Nemezisp/food-picker",
        websiteLink: "https://food-picker-ult.vercel.app/",
        techList: ["Next.js", "Context API", "AirTable", "CSS"],
        mainTech: "Next.js",
        deployedWith: "Vercel",
        apiList: ["Foursquare", "OpenStreetMap", "Edamam", "TheCocktailDB"],
        mainImageName: "food-picker-2.png",
        secondImageName: "food-picker.png",
        shortDescription: () => <span>App, built with <b>Next.js</b>, helping to find ideal restaurants, recipes and cocktails for the user!</span>,
        longDescription: () => {
            return (
                <Fragment>
                    <ul>
                        <li> Users can find restaurants close to them or answer a few questions to get an ideal restaurant for their situation. (<b>Foursquare API</b>) </li> 
                        <li> Restaurant subpages with basic restaurant info, popular reviews and a map showing restaurant's location (<b>OpenStreetMap API</b>). </li>
                        <li> Users can give rating to restaurants (stored in <b>AirTable</b>), <b>cookies</b> are used to check if user voted on the specific restaurant already. </li>
                        <li> Users can get completely random cocktails or choose from many main ingredients to limit their search. (<b>TheCocktailDB API</b>) </li> 
                        <li> Cocktail subpages with ingredients and recipe. </li>
                        <li> Users can get completely random recipes or choose a cusisine type, meal type, dish type, diet and main ingredient and get ideal recipes for their situation. (<b>Edamam API</b>) </li> 
                    </ul>
                </Fragment>
            )
        },
        mainPageDescription: () => {
            return (
                <Fragment>
                    <p>Don't know where to eat / what to cook / what to drink?</p>
                    <p>This app will help you find an ideal restaurant / recipe / cocktail!</p>
                </Fragment>
            )
        }
    },
    {
        title: "Face Rec",
        githubLink: "https://github.com/Nemezisp/face-rec-app",
        websiteLink: "https://face-rec-app-11.herokuapp.com/",
        techList: ["React", "Express.js", "Node.js", "SQL", "Redis", "CSS", "Docker", "Amazon S3"],
        deployedWith: "Heroku",
        mainTech: "React + Express.js",
        apiList: ["Clarifai"],
        mainImageName: "face-rec.png",
        secondImageName: "face-rec-2.png",
        shortDescription: () => <span>App, built with <b>React</b>, using different machine learning models to predict different things (e.g. what celebrity are you similar to?).</span>,
        longDescription: () => {
            return (
                <Fragment>
                    <ul>
                        <li> Basic version built as a part of the course and then <b>expanded upon</b>. </li>
                        <li> 6 app modes: Face Recognition, Celebrity Detection, Demographics Detection, General Context Detection, Food Detection and Dominant Colors Detection (<b>Clarifai API</b>). </li> 
                        <li> Use pictures <b>found on the web</b> (just paste an URL) or upload your own <b>pictures from your computer</b>. </li>
                        <li> User profiles and authentication (using <b>PostgreSQL</b> and <b>Express.js</b> server). </li>
                        <li> User session management (using <b>JWT tokens</b> and <b>Redis</b>). </li>
                        <li> Change your profile picture (uses <b>Amazon S3</b> for storage). </li> 
                        <li> This app also has a dockerized version (<b>Docker</b>). </li>
                        <li> This app is a <b>PWA</b> (Progressive Web App).</li>
                    </ul>
                </Fragment>
            )
        },
        mainPageDescription: () => {
            return (
                <Fragment>
                    <p>Want to know what celebrity you are similar to? Or find out what type of food is on the picture?</p>
                    <p>This app will tell you that and more!</p>
                </Fragment>
            )
        }
    },
    {
        title: "Doggo Clothing",
        githubLink: "https://github.com/Nemezisp/doggo-clothing",
        websiteLink: "https://poetic-lebkuchen-80c4f8.netlify.app/",
        techList: ["React", "TypeScript", "Redux", "Redux-Saga", "Firebase", "Styled-Components"],
        deployedWith: "Netlify",
        mainTech: "React + TypeScript",
        apiList: ["Stripe"],
        mainImageName: "doggo-clothing.png",
        secondImageName: "doggo-clothing-2.png",
        shortDescription: () => <span>Mockup dog clothing e-commerce shop, built with <b>React</b> and <b>TypeScript</b>.</span>,
        longDescription: () => {
            return (
                <Fragment>
                    <ul>
                        <li> Built alongside a React course, building most things on my own before watching videos. </li>
                        <li> Fully-functional mockup store, with a few categories and some products in each. </li> 
                        <li> Product storage and user authentication with <b>Firebase</b>. </li>
                        <li> App connected to test <b>Stripe API</b>, so mockup payments can be made with a test card. </li>
                        <li> All the styling is handled using <b>Styled-Components</b></li> 
                    </ul>
                </Fragment>
            )
        },
        mainPageDescription: () => {
            return (
                <Fragment>
                    <p>Does your dog need an outfit to be more fashionable?</p>
                    <p>This mockup e-commerce store can help you the perfect clothes!</p>
                </Fragment>
            )
        }
    },
    {
        title: "My Portfolio",
        githubLink: "https://github.com/Nemezisp/portfolio/",
        websiteLink: "https://nemezisp.github.io/portfolio/",
        techList: ["Gatsby.js", "Styled-Components"],
        mainTech: "Gatsby.js",
        deployedWith: "Github Pages",
        mainImageName: "portfolio.png",
        secondImageName: "portfolio-2.png",
        shortDescription: () => <span>Portfolio website you are on right now, built with <b>Gatsby.js</b></span>,
        longDescription: () => {
            return (
                <Fragment>
                    <ul>
                        <li> Not much to say here, just a portfolio website. </li> 
                    </ul>
                </Fragment>
            )
        },
        mainPageDescription: () => {
            return (
                <Fragment>
                    <p>Portfolio website you are on right now.</p>
                </Fragment>
            )
        }
    }
]