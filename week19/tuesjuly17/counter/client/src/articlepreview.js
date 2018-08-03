import React, {Component} from 'react';
import './App.css';
import { Column } from 'simple-flexbox';

class ArticlePreview extends Component {
    
render() {
  var year = this.props.post.date.slice(0,4);
  var month = this.props.post.date.slice(5,7);
  var day = this.props.post.date.slice(8,10);
  var ExcerptIn= this.props.post.excerpt;
  var excerptOut= ExcerptIn.replace("<p>","").replace("[&hellip;]</p>","").replace("&#8217;","'"); 
  
    if (this.props.post) {
      return (
        <div>
          <Column className="col-lg-6 box">
            {this.props.post.featured_image ? (
              <img className="img-responsive" alt="article header" src={this.props.post.featured_image}/>
            ) : (
              ""
            )}
          </Column>
          <Column className="col-lg-6">
            <h5>{this.props.post.title}</h5>
            <p className="lead">{month}/{day}/{year}</p>
            <p>{excerptOut} <a target="_blank" rel="noopener noreferrer" href={this.props.post.URL}>[continue reading]</a></p>
         </Column> 
        </div>
      );
    } else {
      return null;
    }
  }
}
export default ArticlePreview