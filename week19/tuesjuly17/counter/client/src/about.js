import React, { Component } from 'react';
import './App.css';
import img from './img/profile.png';
import { Column, Row } from 'simple-flexbox';

class About extends Component{
    render(){
        return (
            <section id="about" className="text">
                <div className="container">
                    <Row>
                        <div>
                        <Column className="col-lg-6">
                            <p><img src={img} alt="" className="img-responsive"/></p>
                        </Column>
                        <Column className="col-lg-6">
                            <h2 className="heading">Oh, hey world.</h2>
                            <p className="lead">Didn't see you there.</p>
                            <p>But since you found your way here, let's get to know each other a little. I'll go first. I'm Lillian and I like to dance, travel, and write code. I first became interested in programming while working on databases as an environmental consultant.</p>
                            <p>I moved to Mexico City in 2016 to teach and ended up pursuing that initial interest by becoming a part of the <a target="_blank" rel="noopener noreferrer" href="https://www.digitalcrafts.com/">DigitalCrafts</a> team. To better support students as the director of Career Services I decided to take the immersive Full Stack Flex program and haven't looked back since.</p>
                            <p>Want to tell me about you? Just choose your preferred method of contact below.</p>
                        </Column>
                        </div>
                    </Row>
                </div>
            </section>
        )
    }
}
export default About