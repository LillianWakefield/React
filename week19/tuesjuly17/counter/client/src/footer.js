import React, { Component } from 'react';
import './footer.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import {faWordpress, faLinkedinIn, faGithub} from '@fortawesome/fontawesome-free-brands';
library.add(faEnvelope, faFile)

class Footer extends Component{
    render(){
        return (
            <div className="navbar navbar-default navbar-fixed-bottom">
                <div className="container-fluid">
                    <p className="social">
                        <a target="_blank" rel="noopener noreferrer" href="mailto:lillianwakefield@gmail.com" title="" className="email"><FontAwesomeIcon icon="envelope"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lillian-wakefield-719566101/" title="" className="linkedin"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/LillianWakefield" title="" className="github"><FontAwesomeIcon icon={faGithub}/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://theoffseasoner.wordpress.com/" title="" className="wordpress"><FontAwesomeIcon icon={faWordpress}/></a>
                        <a target="_blank" rel="noopener noreferrer" href="img/LillianWakefield.pdf" title="" className="file"><FontAwesomeIcon icon="file"/></a>
                    </p>
                    <p className="copy">&copy; Lillian Wakefield 2018</p>
                </div>
            </div>
        )
    }
}
export default Footer