import React, { Component } from "react";
import '../assets/css/common.scss';
import { Route, HashRouter } from "react-router-dom";

import Header from "./common/header";
import Footer from "./common/footer";
import Home from './Home';
import About from './About';
import Partner from './Partner';
// import Portfolio from './portfolio';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>

        <Header />
          <div className="content">
             <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Partner" component={Partner}/>
          </div>
          <Footer / >
        
      </HashRouter>

    );
  }
}


export default App;