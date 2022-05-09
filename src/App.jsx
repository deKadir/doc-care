//import reset.css always on top
import './assets/styles/reset.css';
import './assets/styles/components.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
