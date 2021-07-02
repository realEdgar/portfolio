import './styles.css';

export const Project = ({link, title, src, children}) => {
  return (
    <article className="ProjectCard" >
      <figure className="ProjectImage">
        <img src={src} alt={title} />
      </figure>
      <section className="ProjectDetails">
        <h3 className="ProjectTitle">Title: {title}</h3>
        <h4 className="ProjectTech">Technologies used</h4>
        <div className="TechIconConteiner">
          {children}
        </div>
      </section>
      <a href={link} target="blank">Go to the project</a>
    </article>
  );
};
