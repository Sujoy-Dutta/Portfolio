import {BrowserRouter,Route,Switch} from "react-router-dom";

import Home from './Component/Home';
import About from './Component/About';
import Singlepost from'./Component/Singlepost';
import Post from './Component/Post';
import Project from './Component/Project';
import Navbar from "./Component/Navbar";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={About} path="/about"/>
        <Route component={Singlepost} path="/post/:slug"/>
        <Route component={Post} path="/post"/>
        <Route component={Project} path="/project"/>
      </Switch>
    </BrowserRouter>
  )

}

export default App;
