import React, { Component } from 'react';
import './App.css';
import picapup from './img/picapup.png';
import chislango from './img/chislango.png';
import { Column, Row } from 'simple-flexbox';


class Projects extends Component {

    render() {
        return (
            <section>
                <div className="container">
                    <Row horizontal='center'>
                        <h2 className="heading"> Recent Projects</h2>
                    </Row>
                    <Row>
                        <div>
                            <Column className="col-lg-6 box">
                                <img src={picapup} alt="Adorable Puppies Go Here" className="img-responsive"/>
                            </Column>
                            <Column className="col-lg-6">
                                <h5>Pic a Pup</h5>
                                <p className="lead">04/2018</p>
                                <p>Pic a pup is a front end application that utilizes HTML, CSS, Bootstrap, JavaScript, jQuery and the Dog API. The user chooses between two pictures of dogs, deciding which is cuter to be saved to the gallery.</p>
                                <p><a target="_blank"  rel="noopener noreferrer"  href="https://lillianwakefield.github.io/Pic-a-Pup/index.html">Live Demo</a> | <a target="_blank" rel="noopener noreferrer" href="https://github.com/LillianWakefield/Pic-a-Pup">GitHub</a></p>
                            </Column>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <Column className="col-lg-6 box">
                                <img src={chislango} alt="Fun Times Learning Spanish Goes Here" className="img-responsive"/>
                            </Column>
                            <Column className="col-lg-6">
                                <h5>Chislangos</h5>
                                <p className="lead">Coming Soon!</p>
                                <p>Chislangos is a work in progress. It is a language learning game that displays Spanish slang from Mexico City alongside the literal English translation. The user selects from multiple choice options which is the actual meaning of the phrase. It was built using Node.js, PostgreSQL, and Handlebars.js.</p>
                                <p>Live Demo| <a target="_blank"  rel="noopener noreferrer" href="https://github.com/LillianWakefield/language-game">GitHub</a></p>
                            </Column>
                        </div>
                    </Row>
                  
                </div>             
    </section>
      

        )
    }
}
export default Projects