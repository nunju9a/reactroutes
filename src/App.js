import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route  path ="/" component={Index} exact/>
          <Route exact path ="/about" component={About}/>
          <Route exact path ="/contact" component={Contact}/>
          <Error/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App; 




 



















// import Index from "./components/Home";


// import Navigation from "./components/Navigation";


