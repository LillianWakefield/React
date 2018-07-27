import React, {Component} from 'react';



class ArticlePreview extends Component {
    
render() {
    if (this.props.post) {
      return (
        <div className="article">
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
            <div className="content">{this.props.post.excerpt}</div>
            <a href={"/blog/" + this.props.post.ID} className="blackLink"><button className="btn">Read More</button></a>
         
        </div>
      );
    } else {
      return null;
    }
  }
}
export default ArticlePreview