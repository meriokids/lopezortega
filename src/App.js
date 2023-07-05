
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog/Blog';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SingleBlog from './containers/SingleBlog/SingleBlog';
import Home from './Home';
import Layout from "./containers/Layout/Layout";
import AboutUs from "./containers/About/About";
import Service from "./containers/Service/Service";
import Contact from "./containers/Contact/Contact";









function App() {
  return (
    <div className="App">
      <Router >
      <Layout />
      <Switch>
          <Route exact path="/" component={Home}></Route> 
          <Route exact path="/aboutus" component={AboutUs}></Route>
          <Route exact path="/servicios" component={Service}></Route>
          <Route exact path="/contacto" component={Contact}></Route>
          <Route exact path="/noticias" component={Blog}></Route>
          <Route exact path="/:id" component={SingleBlog} ></Route>
      </Switch>
      
        </Router >
    </div>
  );
}

export default App;
