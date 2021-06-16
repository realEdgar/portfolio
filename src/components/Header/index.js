import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrMenu, GrClose } from 'react-icons/gr'
import { Logo } from '../Logo';
import './styles/styles.css';

export const Header = () => {
  const [show, setShow] = useState(false);

  function handleClick(ev) {
    console.log(ev);
    if(show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <header className="Header">
      <Logo />
      <div className="Menu-Container" onClick={handleClick}>
        {
          show ? <GrClose className="Icon-Style" /> : <GrMenu className="Icon-Style" />
        }
        {
          show && <nav className="Nav-Bar">
            <ul className="List-Nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutme">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contacto">Contact</Link></li>
            </ul>
          </nav>
        }
        <nav className="Nav-Bar2">
            <ul className="List-Nav2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutme">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contacto">Contact</Link></li>
            </ul>
          </nav>     
      </div>
    </header>
  );
}
