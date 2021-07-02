import './styles/aboutme.css'
import logoPlatzi from '../assets/logo-platzi.png';
import logoTecNM from '../assets/logo-tecno.jpg';
import chessImage from '../assets/chess-image.jpeg';
import reading from '../assets/reading.jpg'
import correr from '../assets/correr.jpg';
import series from '../assets/seriesandmovies.jpg';
import { FaHtml5, FaCss3Alt, FaGitSquare, FaGithubAlt } from 'react-icons/fa';
import { 
    SiJavascript,
    SiSass,
    SiReact,
    SiWebpack,
    SiStyledComponents,
    SiPython,
    SiRedux 
} from 'react-icons/si'
import { Tech } from '../components/Tech/Tech'

export const AboutMe = () => {
    return (
        <section className="About-Me-Section" id="aboutme">
            <h2 className="About-Title">About me</h2>
            <em>"I am trying to improve my skills every single day of my life."</em>
            <div className="About-Me">
                <h3>Who am I?</h3>
                <p>
                    I am Frontend Developer, Electronic Engineer,
                    Chess Player and Math Lover.
                </p>
                <br/>
                <p>
                    I am creative, competitive, empathic, responsible
                    and honest person.
                </p>
            </div>
            <div className="About-Education">
                <h3>Where did I study?</h3>
                <section className="container-items">
                    <div className="Item">                    
                        <h4 className="Item-title"><img src={logoPlatzi} alt="platzi" /> Platzi</h4>
                        <p>Web Development</p>
                        <p>June 2020 - Now</p>
                    </div>
                    <div className="Item">
                        <h4 className="Item-title"><img src={logoTecNM} alt="Tec Celaya" />TECNM in Celaya</h4>
                        <p>Electronic Engineer</p>
                        <p>2010 - 2015</p>
                    </div>  
                </section>                               
            </div>
            <div className="About-Hobbies">
                <h3>Hobbies</h3>
                <section className="container-items">
                    <div className="Item-Hobby">
                        <img src={chessImage} alt="Board" />
                        <p>Play Chess</p>
                    </div>
                    <div className="Item-Hobby">
                        <img src={reading} alt="Book" />
                        <p>Read</p>
                    </div>
                    <div className="Item-Hobby">
                        <img src={correr} alt="Work Out" />
                        <p>Work Out</p>
                    </div>
                    <div className="Item-Hobby">
                        <img src={series} alt="Movies" />
                        <p>Watch Movies and Series</p>
                    </div>
                </section>                
            </div>
            <div className="About-Technologies">
                <h3>Technologies</h3>
                <div className="icons-container">
                    <Tech
                        Component={FaHtml5}
                        nameClass="iconHtml"
                        title="HTML 5"
                    />
                    <Tech
                        Component={FaCss3Alt}
                        nameClass="iconCss"
                        title="CSS 3"
                    />
                    <Tech
                        Component={SiSass}
                        nameClass="iconSass"
                        title="Sass"
                    />
                    <Tech
                        Component={SiJavascript}
                        nameClass="iconJs"
                        title="JavaScript"
                    />
                    <Tech
                        Component={SiReact}
                        nameClass="iconReact"
                        title="ReactJS"
                    />
                    <Tech
                        Component={FaGitSquare}
                        nameClass="iconGit"
                        title="Git"
                    />
                    <Tech
                        Component={FaGithubAlt}
                        nameClass="iconGithub"
                        title="GitHub"
                    />
                    <Tech
                        Component={SiWebpack}
                        nameClass="iconWebpack"
                        title="Webpack"
                    />
                    <Tech
                        Component={SiStyledComponents}
                        nameClass="iconStyled"
                        title="Styled Components"
                    />
                    <Tech
                        Component={SiPython}
                        nameClass="iconPython"
                        title="Python"
                    />
                    <Tech
                        Component={SiRedux}
                        nameClass="iconRedux"
                        title="Redux"
                    />
                </div>
            </div>
        </section>
    )
} 