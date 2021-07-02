import { Project } from '../components/ProjectComponent/Project'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript, SiSass, SiReact, SiWebpack } from 'react-icons/si'
import { Tech } from '../components/Tech/Tech'
import batata from '../assets/batata.png'
import googleClone from '../assets/googleclone.png'
import landing from '../assets/landing.png'
import crowfund from '../assets/crowfund.png'
import portfolio from '../assets/portfolio.png'
import pokedex from '../assets/pokedex.png'
import atm from '../assets/atm.png'
import solver from '../assets/solver.png'
import './styles/projects.css'

export const Projects = () => {
    return (
        <section className="ProjectsContainer" id="projects">
            <h1 className="ProjectsTitle">Projects</h1>
            <section className="ProjectContainer">
                <div className="ItemsContainer">
                    <Project
                        link="https://amaizing-pokedex.netlify.app"
                        title="Amaizing Pokedex"
                        src={pokedex}
                    >
                        <Tech Component={SiReact} nameClass="iconReact" title="ReactJS" />
                    </Project>
                    <Project
                        link="/"
                        title="My Portfolio"
                        src={portfolio}
                    >
                        <Tech Component={SiReact} nameClass="iconReact" title="ReactJS" />
                    </Project>
                    <Project
                        link="https://crowfund.netlify.app/"
                        title="Crowdfunding Page"
                        src={crowfund}
                    >
                        <Tech Component={FaHtml5} nameClass="iconHtml" title="HTML 5" />
                        <Tech Component={FaCss3Alt} nameClass="iconCss" title="CSS 3" />
                        <Tech Component={SiJavascript} nameClass="iconJs" title="JavaScript" />
                        <Tech Component={SiSass} nameClass="iconSass" title="Sass" />
                        <Tech Component={SiWebpack} nameClass="iconWebpack" title="Webpack" />
                    </Project>
                    <Project
                        link="https://realEdgar.github.io/landingpage"
                        title="Landing Page"
                        src={landing}
                    >
                        <Tech Component={FaHtml5} nameClass="iconHtml" title="HTML 5" />
                        <Tech Component={FaCss3Alt} nameClass="iconCss" title="CSS 3" />
                        <Tech Component={SiJavascript} nameClass="iconJs" title="JavaScript" />
                    </Project>
                    <Project
                        link="https://realEdgar.github.io/ATM/"
                        title="ATM simulator"
                        src={atm}
                    >
                        <Tech Component={FaHtml5} nameClass="iconHtml" title="HTML 5" />
                        <Tech Component={FaCss3Alt} nameClass="iconCss" title="CSS 3" />
                        <Tech Component={SiJavascript} nameClass="iconJs" title="JavaScript" />
                    </Project>
                    <Project
                        link="https://realEdgar.github.io/integralesdefinidas/"
                        title="Integral Solver"
                        src={solver}
                    >
                        <Tech Component={FaHtml5} nameClass="iconHtml" title="HTML 5" />
                        <Tech Component={FaCss3Alt} nameClass="iconCss" title="CSS 3" />
                        <Tech Component={SiJavascript} nameClass="iconJs" title="JavaScript" />
                    </Project>
                    <Project
                        link="https://realEdgar.github.io/batata/"
                        title="Batatabit"
                        src={batata}
                    >
                        <Tech Component={FaHtml5} nameClass="iconHtml" title="HTML 5" />
                        <Tech Component={FaCss3Alt} nameClass="iconCss" title="CSS 3" />
                    </Project>
                    <Project
                        link="https://realEdgar.github.io/googleClone"
                        title="Google Clone"
                        src={googleClone}
                        description="descripcion del project"
                    >
                        <Tech Component={FaHtml5} nameClass="iconHtml" title="HTML 5" />
                        <Tech Component={FaCss3Alt} nameClass="iconCss" title="CSS 3" />
                    </Project>
                    
                </div>
            </section>
        </section>
    )
}
