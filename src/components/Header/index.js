import { useState } from 'react'
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
            <li><a href="/">Home</a></li>
              <li><a href="#aboutme">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        }
        <nav className="Nav-Bar2">
            <ul className="List-Nav2">
              <li><a href="/">Home</a></li>
              <li><a href="#aboutme">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>     
      </div>
    </header>
  );
}
