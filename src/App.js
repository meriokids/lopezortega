import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLight from './components/Navbar/Navbar';
import CarouselHead from './components/CarouselHead/CarouselHead';
import AboutUs from './containers/About/About';
import ParallaxCTA from './containers/ParallaxCTA/ParallaxCTA';
import Service from './containers/Service/Service';
import CallAction from './containers/CallAction/CallAction';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';
import Blog from './components/Blog/blog';



function App() {
  return (
    <div className="App">
       <NavbarLight />
       <CarouselHead />
       <AboutUs />
       <ParallaxCTA />
       <Service />
       <CallAction />
       <Contact />
       <Footer />
       <Blog></Blog>
    </div>
  );
}

export default App;
