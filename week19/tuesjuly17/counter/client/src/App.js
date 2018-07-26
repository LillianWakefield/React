import React, { Component } from 'react';
import './App.css';
import img from './img/profile.png'
import Counter from './Counter.js';
import BlogPosts from './blogposts';

class App extends Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css"/>

    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Montserrat:400,700|Cardo:400,400italic,700"/>
  
    <link rel="stylesheet" href="vendor/lightbox2/css/lightbox.min.css"/>
 
    <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet"/>
   
    <link rel="shortcut icon" href="img/terminal.ico"/>
     
    <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"/>
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
        
        <div className="blogContainer">
       <BlogPosts/>
          </div>
      </div>
    );
  }
}

export default App;
