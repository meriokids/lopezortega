
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLight from './components/Navbar/Navbar';
import Blog from './components/Blog/blog';
import SingleBlog from './containers/SingleBlog/SingleBlog';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavbarLight />
     
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/noticias" element={<Blog />}></Route>
          <Route exact path="/:id" element={<SingleBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
