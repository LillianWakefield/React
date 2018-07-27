import React, { Component } from 'react';
import './projects.css';
import picapup from './img/picapup.png';
import chislango from './img/chislango.png';


class Projects extends Component {

    render() {
        return (
            <section id="projects" class="gallery">
            <div class="container clearfix">
              <div class="row">
                <div class="col-lg-12">
                  <div class="row">
                    <div class="col-md-12 col-lg-8">
                      <h2 class="heading">Projects</h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="box" class="has-border"><img src={picapup} alt="Adorable Puppies Go Here" class="img-fluid"/></div>
                    </div>
                    <div class="col-md-6">
                      <div class="box" class="has-border">
                        <h5>Pic a Pup</h5>
                        <p class="lead">April 2018</p>
                        <p>Pic a pup is a front end application that utilizes HTML, CSS, Bootstrap, JavaScript, jQuery and the Dog API. The user chooses between two pictures of dogs, deciding which is cuter to be saved to the gallery.</p>
                        <p><a target="_blank" href="https://lillianwakefield.github.io/Pic-a-Pup/index.html">Live Demo</a> | <a target="_blank" href="https://github.com/LillianWakefield/Pic-a-Pup">GitHub</a></p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="box" class="has-border"><img src={chislango} alt="Fun Times Learning Spanish Goes Here" class="img-fluid"/></div>
                    </div>
                    <div class="col-md-6">
                      <div class="box" class="has-border">
                        <h5>Chislangos</h5>
                        <p class="lead">Coming Soon!</p>
                        <p>Chislangos is a work in progress. It is a language learning game that displays Spanish slang from Mexico City alongside the literal English translation. The user selects from multiple choice options which is the actual meaning of the phrase. It was built using Node.js, PostgreSQL, and Handlebars.js.</p>
                        <p><a target="_blank" >Live Demo</a> | <a target="_blank" href="https://github.com/LillianWakefield/language-game">GitHub</a></p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
      

        )
    }
}
export default Projects