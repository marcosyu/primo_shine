import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
      <div className="row">
        <div className="col-2 offset-1">
      
            <a href= "https://www.google.com/maps?cid=2092153982843956458">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="ico_title">Cavite branch</span>
              <p className="ico_desc">B56 L26 Madrid cor. Faura Town and Country West Molino<br/>
              Bacoor, Cavite, Philippines 4102</p>
            </a>
          <span className="ico_title"><FontAwesomeIcon icon={faMobileAlt} /> Contact Us</span>
          <p>0908 152 7539
          </p>
        </div>
        <div className="col-4 offset-1 text-center">
          <h3>Primo Shine</h3>
          <p>Auto Paint Protection</p>
          <span className="social_link">
            <a href="https://www.facebook.com/primoshine">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </span>
          <span className = "social_link" >
            <a href= "https://www.instagram.com/primoshine">
            <FontAwesomeIcon icon={faInstagram} />
            </a> 
          </span>
      </div>
      <div className="col-2 offset-1">
        <h3>
          <a href= "https://www.google.com/maps?cid=2092153982843956458">
  
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="ico_title">Bulacan branch</span>
          </a>
        </h3>
        <p>B56 L26 Madrid cor. Faura Town and Country West Molino<br/>
        Bacoor, Cavite, Philippines 4102</p>
        <span className="ico_title"><FontAwesomeIcon icon={faMobileAlt} /> Contact Us</span>
        <p>0908-152-7539 / 0977-097-2067</p>
      </div>
    </div>
  </footer>

    );
  }
}
export default Footer;