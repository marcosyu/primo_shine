import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col-2 offset-1">
          <h3>
            <a href= "https://www.google.com/maps?cid=2092153982843956458">
              <i className="fas fa-map-marker-alt" />
              Cavite branch
            </a>
          </h3>
          <p>B56 L26 Madrid cor. Faura Town and Country West Molino</p>
          <p>Bacoor, Cavite, Philippines 4102</p>
          <p>0908 152 7539</p>
        </div>
        <div className="col-4 offset-1 text-center">
          <h3>Primo Shine</h3>
          <p>Auto Paint Protection</p>
          <span className="social_link">
          <a href= "https://www.facebook.com/primoshine/">
            <i className="fab fa-facebook-square"/>
          </a>
        </span>
        <span className="social_link">
          <a href= "https://www.instagram.com/primoshine">
          <i className="fab fa-instagram"/>
          </a>
        </span>
      </div>
      <div className="col-2 offset-1">
        <h3>
          <a href= "https://www.google.com/maps?cid=2092153982843956458">
            <i className="fas fa-map-marker-alt"/>
            Bulacan branch
          </a>
        </h3>
        <p>B56 L26 Madrid cor. Faura Town and Country West Molino</p>
        <p>Bacoor, Cavite, Philippines 4102</p>
        <p>0908-152-7539 / 0977-097-2067</p>
      </div>
    </div>
  </footer>

  );
}

export default Footer;