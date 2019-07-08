import React, { Component } from 'react'
import '../assets/css/home.scss'
import '../assets/css/home.scss'
import slide1 from '../assets/images/main_carousel/pic1.jpg'
import slide2 from '../assets/images/main_carousel/pic2.jpg'
import slide3 from '../assets/images/main_carousel/pic3.jpg'
import slide4 from '../assets/images/main_carousel/pic4.jpg'
import slide5 from '../assets/images/main_carousel/pic5.jpg'
import art1_pic1 from '../assets/images/home/people1.jpg'
import art1_pic2 from '../assets/images/home/people2.jpg'
import art1_pic3 from '../assets/images/home/people3.jpg'
import art1_pic4 from '../assets/images/home/people4.jpg'
import art1_pic5 from '../assets/images/home/people5.jpg'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {

  }

  render() {
      return (
          <div id="home">
        <section id="main">
        <div className="carousel-single">
              
              <input type="checkbox" className="faux-ui-facia" /> 
              <div className="slide" slide="5" annot="This is the fifth slide title. Photo by David Marcu.">
                <img src={slide5} alt="Slide 5"/>
              </div>
              
              <input type="checkbox" className="faux-ui-facia" /> 
              <div className="slide" slide="4" annot="This is the fifth slide title. Photo by David Marcu.">
                <img src={slide4} alt="Slide 4"/>
              </div>
              
              <input type="checkbox" className="faux-ui-facia" /> 
              <div className="slide" slide="3" annot="This is the fifth slide title. Photo by David Marcu.">
                <img src={slide3} alt="Slide 3"/>
              </div>

              <input type="checkbox" className="faux-ui-facia" /> 
              <div className="slide" slide="2" annot="This is the fifth slide title. Photo by David Marcu.">
                <img src={slide2} alt="Slide 2"/>
              </div>
              
              <input type="checkbox" className="faux-ui-facia" /> 
              <div className="slide" slide="1" annot="This is the fifth slide title. Photo by David Marcu.">
                <img src={slide1} alt="Slide 1"/>
              </div>
              
               
              <div className="counter" count="5"/>
              </div>
        </section>
        <article>
          <div className="row">
            <div className="col-6">
              <div className="grid">
                <div className="item pic4" style={{backgroundImage: `url(${art1_pic4})`}}/>
                <div className="item pic5" style={{backgroundImage: `url(${art1_pic5})`}}/>
                <div className="item pic3" style={{backgroundImage: `url(${art1_pic3})`}}/>
                <div className="item pic2" style={{backgroundImage: `url(${art1_pic2})`}}/>
                <div className="item pic1" style={{backgroundImage: `url(${art1_pic1})`}}/>
              </div>
            </div>
            <div className="col-4 offset-1">
              <h2>Your Satisfaction Is Our Priority</h2>
              <p>
                Primo Shine Auto Paint Protection has been providing the best services to Bacoor and NCR areas since 2015. Fair prices, superior quality and exceptional customer service are guaranteed when you work with us.
              </p>
            </div>
          </div> <
      /article> <
      article >
      <div className="container">
            <h2>Reliable Car Detailing Service</h2>
            <p>
              Over the years, we’ve learned that great service begins and ends with experienced and friendly professionals, which explains our rigorous hiring process. We believe that our team is the best in the business, and have complete and total confidence in every person providing our services. 
              Primo Shine Auto Paint Protection finishes each project on schedule and with the highest level of quality. With a focus on personalized service, competitive rates and customer satisfaction, we’re always striving to meet and exceed expectations.
            </p>
          </div> <
      /article>

      <
      /div>
    )
  }
}

export default Home;