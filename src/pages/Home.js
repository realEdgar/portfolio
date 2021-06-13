import { Introduction } from '../components/Introduction/index'
import { Projects } from './Projects.js'
import './styles/home.css'

export const Home = () => {
  return (
    <main className="HomeMain">
      <Introduction />
      <Projects />
    </main>
  );
};
