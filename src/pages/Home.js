import photo from '../assets/photo.png'
import {Link} from 'react-router-dom'
import './styles/home.css'

export const Home = () => {
  return (
    <main className="HomeMain">
      <section className="section-one">
        <aside className="AsideHome">
          <h2>About me</h2>
          <p>
            Hola, Bienvenido a mi portafolio personal. Mi nombre es <strong>Edgar Lopez</strong>, soy <strong>ingeniero en
            electrónica</strong> egresado del TECNM en Celaya. A lo largo e mi carrera profesional y personal
            he podido participar en proyectos interesantes de <strong>desarrollo web</strong>. He trabajado
            en proyectos que puedes ver ahora mismo en la seccion de <Link to="/projects"><u>projects</u></Link>.
            <br/><br/>
            Personalmente me considero una persona creativa, competitiva, honesta, responsable y analitica. Capaz
            de resolver problemas cotidianos y dentro de la industria. Tengo expreinecia en la industria automotriz.
          </p>
        </aside>
        <img className="Photo" src={photo} alt="Foto de Edgar" />
      </section>
      <section className="section-two">
        <h2>Skills</h2>
        <div className="containerOne"></div>
        <div className="containerTwo"></div>
        <div className="containerThree"></div>
        <div className="containerFour"></div>
      </section>
    </main>
  );
};
