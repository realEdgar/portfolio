import { Project } from '../components/ProjectComponent/Project'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiSass, SiReact, SiWebpack } from 'react-icons/si'
import { Tech } from '../components/Tech/Tech'
import batata from '../assets/batata.png'
import googleClone from '../assets/googleclone.png'
import landing from '../assets/landing.png'
import crowfund from '../assets/crowfund.png'
import portfolio from '../assets/portfolio.png'
import './styles/projects.css'

export const Projects = () => {
    return (
        <section className="ProjectsContainer">
            <h1 className="ProjectsTitle">Projects</h1>
            <section className="ProjectContainer">
                <div className="ItemsContainer">
                    <Project
                        title="My Portfolio"
                        src={portfolio}
                        description="descripcion del project"
                    >
                        <Tech Component={SiReact} nameClass="iconReact" title="ReactJS" />
                    </Project>
                    <Project
                        title="Crowdfunding Page"
                        src={crowfund}
                        description="descripcion del project"
                    >
                        <Tech Component={FaHtml5} nameClass="iconHtml" title="HTML 5" />
                        <Tech Component={FaCss3Alt} nameClass="iconCss" title="CSS 3" />
                        <Tech Component={SiJavascript} nameClass="iconJs" title="JavaScript" />
                        <Tech Component={SiSass} nameClass="iconSass" title="Sass" />
                        <Tech Component={SiWebpack} nameClass="iconWebpack" title="Webpack" />
                    </Project>
                    <Project
                        title="Landing Page"
                        src={landing}
                        description="descripcion del project"
                    >
                        <Tech Component={FaHtml5} nameClass="iconHtml" title="HTML 5" />
                        <Tech Component={FaCss3Alt} nameClass="iconCss" title="CSS 3" />
                        <Tech Component={SiJavascript} nameClass="iconJs" title="JavaScript" />
                    </Project>
                    <Project
                        title="Batatabit"
                        src={batata}
                        description="descripcion del project"
                    >
                        <Tech Component={FaHtml5} nameClass="iconHtml" title="HTML 5" />
                        <Tech Component={FaCss3Alt} nameClass="iconCss" title="CSS 3" />
                    </Project>
                    <Project
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
