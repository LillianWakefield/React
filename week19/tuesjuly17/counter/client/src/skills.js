import React, { Component } from 'react';
import './skills.css';
import { Row } from 'simple-flexbox';

class Skills extends Component {
    render() {
        return (
    <section id="skills">
      <div className="container">
        <Row horizontal='center'>
          <h2 className="heading">Skills</h2>
        </Row>
            <div className="row">
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-html5-plain"></i></div>
                  <p className="lead">HTML5</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-css3-plain"></i></div>
                  <p className="lead">CSS3</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-bootstrap-plain"></i></div>
                  <p className="lead">Bootstrap</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-javascript-plain"></i></div>
                  <p className="lead">JavaScript</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-jquery-plain"></i></div>
                  <p className="lead">jQuery</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-react-original"></i></div>
                  <p className="lead">React</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-postgresql-plain"></i></div>
                  <p className="lead">PostgreSQL</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-express-original"></i></div>
                  <p className="lead">Express</p>
                </div>
              </div> 
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-nodejs-plain"></i></div>
                  <p className="lead">Node.js</p>
                </div>
              </div> 
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-amazonwebservices-original"></i></div>
                  <p className="lead">AWS</p>
                </div>
              </div> 
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-python-plain"></i></div>
                  <p className="lead">Python</p>
                </div>
              </div> 
              <div className="col-md-3">
                <div className="box">
                  <div className="icon"><i className="devicon-go-plain"></i></div>
                  <p className="lead">Golang</p>
                </div>
              </div> 
            </div>
          </div>
    </section>
        )
    }
}
export default Skills