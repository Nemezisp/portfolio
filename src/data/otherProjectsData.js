import React from "react";

export const OtherProjectsData = [
    {
        title: "Set of Web3 projects",
        mainTech: "Solidity + Hardhat + Next.js",
        description: () => {
            return (
                <ul>
                    <li>Built as a part of FCC Web3 course (some of them on my Github).</li>
                    <li>Many different projects, including a lottery, nft marketplace, few different types of NFTs, tokens and a DAO.</li>
                </ul>
            )
        }
    },
    {
        title: "Blockchain token sniping bot",
        mainTech: "Ethers.js",
        description: () => {
            return (
                <ul>
                    <li>Can quickly buy/sell tokens on many different chains and monitor price continously to sell at the right moment.</li>
                    <li>Can also monitor specific pairs to buy the token immediately after liquidity is added or continously watch all the new created pairs on the chosen AMM.</li>
                </ul>
            )
        }
    },
    {
        title: "Web design lead finding bot",
        mainTech: "Selenium",
        description: () => {
            return (
                <ul>
                    <li>Creates bases of websites in the specific niches.</li>
                    <li>Gets many different parameters of the website and business (e.g. what it's built with, h tags (important for SEO), is it responsive, contact info, website screenshot and so on). </li>
                </ul>
            )
        }
    },
    {
        title: "A series of ML sport bettting models",
        mainTech: "scikit-learn",
        description: () => {
            return (
                <ul>
                    <li>As can be expected, not working that well, as it's pretty much an open system.</li>
                    <li>Uses a very big database with a lot of different data points on football games scraped with another Selenium bot.</li>
                </ul>
            )
        }
    },
    {
        title: "Many websites",
        mainTech: "Wordpress and other CMS systems",
        description: () => {
            return (
                <ul>
                    <li style={{lineHeight: "2em"}}>Example websites:
                        <div><a href="https://lukaszjarmula.com" target="_blank" rel="noreferrer">https://lukaszjarmula.com</a> - my brother's, a chess grandmaster, website; </div>
                        <div><a href="https://niezalezni.waw.pl" target="_blank" rel="noreferrer">https://niezalezni.waw.pl</a> - Warsaw indepenedent theater database; </div>
                    </li>
                    <li><b>Additional functionalities, built with HTML, CSS and JS</b> (e.g. map functionality on the second example website).</li>
                </ul>
            )
        }
    }
]