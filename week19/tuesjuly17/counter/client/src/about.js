import React, { Component } from 'react';
import './about.css';
import img from './img/profile.png';

class About extends Component{
    render(){
        return (
<section id="about" className="text">
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <p><img src={img} alt="" className="img-fluid"/></p>
              </div>
          <div className="col-lg-6">
            <h2 className="heading">Oh, hey world.</h2>
            <p className="lead">Didn't see you there.</p>
            <p>But since you found your way here, let's get to know each other a little. I'll go first. I'm Lillian and I like to dance, travel, and write code. I first became interested in programming while working on databases as an environmental consultant.</p>
            <p>I moved to Mexico City in 2016 to teach and ended up pursuing that initial interest by becoming a part of the <a target="_blank" rel="noopener noreferrer" href="https://www.digitalcrafts.com/">DigitalCrafts</a> team. To better support students as the director of Career Services I decided to take the immersive Full Stack Flex program and haven't looked back since.</p>
            <p>Want to tell me about you? Just choose your preferred method of contact.</p>
            <p className="social"><a target="_blank" rel="noopener noreferrer" href="mailto:lillianwakefield@gmail.com" title="" className="email"><i className="fa fa-envelope"></i></a><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lillian-wakefield-719566101/" title="" className="linkedin"><i className="fa fa-linkedin"></i></a><a target="_blank" rel="noopener noreferrer" href="https://github.com/LillianWakefield" title="" className="github"><i className="fa fa-github"></i></a><a target="_blank" rel="noopener noreferrer" href="https://theoffseasoner.wordpress.com/" title="" className="wordpress"><i className="fa fa-wordpress"></i></a><a target="_blank" rel="noopener noreferrer" href="img/LillianWakefield.pdf" title="" className="file"><i className="fa fa-file"></i></a></p>
          </div>
        </div>
      </div>
    </section>
        )
    }
}
export default About