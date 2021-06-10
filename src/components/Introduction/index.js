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
                <h1>Edgar Lopez Arroyo</h1>
                <em>Frontend Developer</em>
                <p>
                    Empathic, creative, competitive, honest and 
                    responsible person, I am graduated from the 
                    TECNM in Celaya and ethernal student from the
                    web development technologies.
                </p>
            </div>
            <Button
                titleOfTheClass="Button-See-More" 
                title="More About Edgar"
                direction="/aboutme"
            />
        </section>
    )
}