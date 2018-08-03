import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar';
import Footer from './footer.js'

class App extends Component {
  render() {
    return (
      <div className="App Site">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Montserrat:400,700|Cardo:400,400italic,700"/>
    <link rel="shortcut icon" href="img/terminal.ico"/>
    <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"/>
                <div className="Site-content">
                    <div>
                        <NavBar />
                    </div>
                </div>
                <Footer />
            </div>
    );
  }
}

export default App;
