import './styles/styles.css'
export const Footer = () => {
  return(
    <footer className="footer">
      <section className="section__social-media">
        <h2 className="social-media__title">Social Media</h2>
        <div className="social-media__container">
            <a href="/github">Github</a>
            <a href="/linkedin">Linkedin</a>
        </div>
      </section>
    </footer>
  )
}
