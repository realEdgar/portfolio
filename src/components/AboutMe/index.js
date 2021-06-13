import './styles.css'
import logoPlatzi from '../../assets/logo-platzi.png';
import logoTecNM from '../../assets/logo-tecno.jpg';
import chessImage from '../../assets/chess-image.jpeg';
import reading from '../../assets/reading.jpg'
import correr from '../../assets/correr.jpg';
import series from '../../assets/seriesandmovies.jpg';
import { FaHtml5, FaCss3Alt, FaGitSquare, FaGithubAlt } from 'react-icons/fa';
import { SiJavascript, SiSass, SiReact, SiWebpack } from 'react-icons/si'

export const AboutMe = () => {
    return (
        <section className="About-Me-Section">
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
                        <p>Play Chess: I have won some regional tournaments</p>
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
                    <div className="Item-Tech">
                        <FaHtml5 className="iconHtml"/>
                        <p>HTML 5</p>
                    </div>
                    <div className="Item-Tech">
                        <FaCss3Alt className="iconCss"/>
                        <p>CSS 3</p>
                    </div>
                    <div className="Item-Tech">
                        <SiSass className="iconSass"/>
                        <p>Sass</p>
                    </div>
                    <div className="Item-Tech">
                        <SiJavascript className="iconJs"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="Item-Tech">
                        <SiReact className="iconReact"/>
                        <p>ReactJS</p>
                    </div>
                    <div className="Item-Tech">
                        <FaGitSquare className="iconGit"/>
                        <p>Git</p>
                    </div>
                    <div className="Item-Tech">
                        <FaGithubAlt className="iconGithub"/>
                        <p>GitHub</p>
                    </div>
                    <div className="Item-Tech">
                        <SiWebpack className="iconWebpack"/>
                        <p>Webpack</p>
                    </div>
                </div>                
            </div>
        </section>
    )
} 