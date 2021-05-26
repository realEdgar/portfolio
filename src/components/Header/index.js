import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './styles/styles.css';

export const Header = () => {
  return (
    <header>
      <img src={logo} alt='logo'/>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contacto">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
