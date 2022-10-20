
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLight from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import SingleBlog from './containers/SingleBlog/SingleBlog';
import Home from './Home';



function App() {
  return (
    <div className="App">
      <HashRouter >
      <NavbarLight />
      <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/noticias" exact component={Blog}></Route>
          <Route path="/:id" exact component={SingleBlog} ></Route>
        </Switch>
        </HashRouter >
    </div>
  );
}

export default App;
