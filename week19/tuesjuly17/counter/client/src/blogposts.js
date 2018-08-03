import React, {Component} from 'react';
import axios from 'axios';
import ArticlePreview from './articlepreview.js'
import { Row } from 'simple-flexbox';

class BlogPosts extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
posts: []
        }
    }
    componentDidMount() {
        axios.get(`http://public-api.wordpress.com/rest/v1/sites/theoffseasoner.wordpress.com/posts`)
          .then(res => {
            this.setState({ posts: res.data.posts });
          })
          .catch(error=>console.log(error))
    }
   
    render() {
        var blogPosts= this.state.posts.map(post => {
        return <ArticlePreview key={post.id} post= {post}/>
    });
        
        return (
            <section id="skills">
                <div className="container">
                     <Row horizontal='center'>
                        <h2 className="heading">Recent Blog Posts</h2>
                    </Row>
                    <Row>
                        <div>
                            {blogPosts[0]}
                        </div>
                    </Row>
                    <Row>
                        <div>
                            {blogPosts[1]}
                        </div>
                    </Row>
                    <Row>
                        <div>
                            {blogPosts[2]}
                        </div>
                    </Row>
                </div>  
            </section>
        );
    }
}

export default BlogPosts;