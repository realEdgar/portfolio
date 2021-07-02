import { SiLinkedin } from 'react-icons/si'
import { FaGithubAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import './styles/styles.css'

export const Footer = () => {
  return(
    <footer className="footer" id="contact">
      <section className="section__social-media">
        <h2 className="social-media__title">Contact</h2>
        <div className="social-media__container">
            <a href="https://github.com/realEdgar" target="blank" ><FaGithubAlt className="iconGithubTwo"/>GitHub</a>
            <a href="https:/www.linkedin.com/in/dev-edgar-lopez" target="blank" ><SiLinkedin className="iconLinked" />LinkedIn</a>
            <a href="mailto: edg.lop.arr@gmail.com" ><MdEmail className="iconMail" />Email</a>
        </div>
      </section>
      <section className="SectionSkillLevel">
        <h2 className="SkillsTitle">Skills</h2>
        <table className="SkillsContainer">
          <thead>
            <tr>
              <th>Languages</th>
              <th>Level</th>
            </tr>              
          </thead>
          <tbody>
            <tr>
              <td>HTML 5</td>
              <td>4/5</td>
            </tr>
            <tr>
              <td>CSS 3</td>
              <td>4/5</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>3/5</td>
            </tr>
            <tr>
              <td>ReactJS</td>
              <td>3/5</td>
            </tr>
            <tr>
              <td>C/C++</td>
              <td>2/5</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>2/5</td>
            </tr>
          </tbody>
        </table>
      </section>
    </footer>
  )
}
