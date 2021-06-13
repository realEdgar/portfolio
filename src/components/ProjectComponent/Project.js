import './styles.css';

export const Project = ({title, src, description, children}) => {
  return (
    <article className="ProjectCard">
      <figure className="ProjectImage">
        <img src={src} alt={title} />
      </figure>
      <section className="ProjectDetails">
        <h3 className="ProjectTitle">{title}</h3>
        <p className="ProjectDescription">{description}</p>
        <h4 className="ProjectTech">Technologies</h4>
        <div className="TechIconConteiner">
          {children}
        </div>
      </section>
    </article>
  );
};
