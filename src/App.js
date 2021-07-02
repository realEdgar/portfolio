import { Header } from './components/Header/index'
import { Footer } from './components/Footer/index'
import { AboutMe } from './pages/AboutMe'
import { Home } from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;