import photo from '../../assets/photo.png'
import { Button } from '../Button'
import './styles.css'

export const Introduction = () => {
    return (
        <section className="Intro">
            <figure className="Pic-part">
                <img src={photo} alt="Edgar" />
            </figure>
            <div className="Text-part">
                <h1>Hello, I am <strong>Edgar</strong></h1>
                <em>Frontend Developer</em>
                <p>
                    I have worked with HTML, CSS, CSS Preprocessors,
                    JavaScript, React.js, Webpack, Git and GitHub.
                </p>
            </div>
            <Button
                titleOfTheClass="Button-See-More" 
                title="More About Me"
                direction="/aboutme"
            />
        </section>
    )
}