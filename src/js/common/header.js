import React from 'react';

const active_class = function(link) {
  if (link === "index") {
    return "nav-link active"
  } else {
    return "nav-link"
  }
}

function Header() {
  return (
    <header>
      <div className= "banner">
        <div id="main-banner">
          <ul className ="nav float-right">
            <li className= {active_class("index")}> "index"</li>
            <li className= {active_class("about")}> "about"</li>
            <li className= {active_class("partner")}> "partner"</li>
          </ul>
        </div>
      </div>
    </header>
  );

}

export default Header;