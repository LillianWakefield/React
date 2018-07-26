import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link} from 'react-router-dom';

class ArticlePreview extends Component {
    constructor(props) {
        super(props);
    }
render() {
    if (this.props.post) {
      return (
        <div className="article">
          <a href={"/blog/" + this.props.post.ID} className="blackLink">
            {this.props.post.featured_image ? (
              <img
                className="img-responsive webpic"
                alt="article header"
                src={this.props.post.featured_image}
              />
            ) : (
              ""
            )}
            <h1 className="text-center">{this.props.post.title}</h1>
            
          </a>
         
        </div>
      );
    } else {
      return null;
    }
  }
}
export default ArticlePreview