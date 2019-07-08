import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  active_class(page) {
    return page === this.props.location.pathname ? "nav-link active" : "nav-link";
  }
  componentDidMount() {

  }

  render() {
    return (
      <header>
      <div className= "banner">
        <div id="main-banner">
          <div id="logo_container">
            <a className="navbar-brand">
              <img id="logo" src={logo} alt="logo"/>
              <h3>
                <span className="main-title"> Primo Shine Auto Paint Protection </span> <br />
                <span className="sub-title"> Premium Ceramic Coatings | Car Detailing </span>
              </h3>
            </a>
          </ div>
          <ul className="nav float-right">
            <li className= {this.active_class("/")}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className= {this.active_class("/about")}>
              <NavLink to="/About">About</NavLink>
            </li>
            <li className= {this.active_class("/partner")}>
              <NavLink to="/partner">Partner</NavLink>
            </li>
          </ul>
        </div>
      
         
      </div>
    </header>
    );
  }
}

export default withRouter(Header);