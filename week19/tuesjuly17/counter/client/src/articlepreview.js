import React, {Component} from 'react';
import './projects.css';
import { Column, Row } from 'simple-flexbox';


class ArticlePreview extends Component {
    
render() {
    if (this.props.post) {
      return (
        <div className="article">
        <Column className="col-lg-6 box">
            {this.props.post.featured_image ? (
              <img
                className="img-responsive webpic"
                alt="article header"
                src={this.props.post.featured_image}
              />
            ) : (
              ""
            )}
            </Column>
            <Column className="col-lg-6">
            <h5>{this.props.post.title}</h5>
            <p className="lead">{this.props.post.date}</p>
            <p>{this.props.post.excerpt}</p>
            <a target="_blank" rel="noopener noreferrer" href={this.props.post.URL}>Continue Reading</a>
         </Column>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default ArticlePreview