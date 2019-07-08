import React, { Component } from 'react'
import '../assets/css/home.scss'

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
        <div class="carousel-single">
              <input type="checkbox" class="faux-ui-facia" /> 
              <div class="slide" slide="5" annot="This is the fifth slide title. Photo by David Marcu.">
                <img src="https://ununsplash.imgix.net/uploads/141223808515744db9995/3361b5e1?q=75&fm=jpg&w=602" alt="Slide 5"/>
              </div>
              
              
              <input type="checkbox" class="faux-ui-facia"/> 
              <div class="slide" slide="4" annot="This is the fourth slide title. Photo by Ryan Lum.">
                <img src="https://unsplash.imgix.net/photo-1415356838286-df6fd593e8b3?q=75&fm=jpg&w=600" alt="Slide 4"/>
              </div>

              <input type="checkbox" class="faux-ui-facia"/> 
              <div class="slide" slide="3" annot="This is the third slide title. Photo by Tomasz Paciorek.">
                <img src="https://ununsplash.imgix.net/reserve/JaI1BywIT5Or8Jfmci1E_zakopane.jpg?q=75&fm=jpg&w=600"  alt="Slide 3"/>
              </div>

              <input type="checkbox" class="faux-ui-facia"/>
              <div class="slide" slide="2" annot="This is the second slide title. Photo by S Charles.">
                <img src="https://ununsplash.imgix.net/uploads/1413387158190559d80f7/6108b580?fit=crop&fm=jpg&q=75&w=600"  alt="Slide 2"/>
              </div>

              <input type="checkbox" class="faux-ui-facia"/>

              <div class="slide" slide="1" annot="First slide title. Photo by Forrest Cavale.">
                <img src="https://ununsplash.imgix.net/uploads/1413399939678471ea070/2c0343f7?q=75&fm=jpg&w=601" alt="Slide 1"/>
              </div>
               
              <div class="counter" count="5"/>
              </div>
        </section>
        <article>
          <div class="row">
            <div class="col-6">
            
             
            
              // <div class="people-pic"></div>
            </div>
            <div class="col-4 offset-1">
              <h2>Your Satisfaction Is Our Priority</h2>
              <p>
                Primo Shine Auto Paint Protection has been providing the best services to Bacoor and NCR areas since 2015. Fair prices, superior quality and exceptional customer service are guaranteed when you work with us.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="container">
            <h2>Reliable Car Detailing Service</h2>
            <p>
              Over the years, we’ve learned that great service begins and ends with experienced and friendly professionals, which explains our rigorous hiring process. We believe that our team is the best in the business, and have complete and total confidence in every person providing our services. 
              Primo Shine Auto Paint Protection finishes each project on schedule and with the highest level of quality. With a focus on personalized service, competitive rates and customer satisfaction, we’re always striving to meet and exceed expectations.
            </p>
          </div>
        </article>

      </div>
    )
  }
}

export default Home;