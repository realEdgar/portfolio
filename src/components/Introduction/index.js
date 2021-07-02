import photo from '../../assets/photo.png'
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
        </section>
    )
};
