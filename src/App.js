import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Hero from './components/Hero';
import Tours from './components/Tours';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
};

export default App;
