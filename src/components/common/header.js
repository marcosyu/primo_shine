import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

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
            <div>
              <ul className="nav float-right">
                <li className= {this.active_class("/")}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className= {this.active_class("/about")}>
                  <NavLink to="/Aboutt">About</NavLink>
                </li>
                <li className= {this.active_class("/partner")}>
                  <NavLink to="/partner">Partner</NavLink>
                </li>
              </ul>

              <hr />
            </div>
        </div>
      </div>
    </header>
    );
  }
}

export default withRouter(Header);