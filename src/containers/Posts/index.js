import React, {Component} from 'react';
class Posts extends Component {
    render() {
        let posts = this.props.posts;
        if (this.props.loading) {
            return (
                <div>
                    Loading...
                </div>
            );
        }
        return (
            <div className="container">
            <h1>All Posts</h1>
            <div className="Posts row">
                {Object
                    .keys(posts)
                    .map(function (key) {
                        return (
                            <div className="card col-4">
                            <div className="card-body">
                              <h4 className="card-title"><div key={key}> {posts[key].title} </div></h4>
                             
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a  className="card-link">read more...</a>
                            </div>
                          </div>
                        );
                    })}
            </div>
            </div>
        );
    }
}
export default Posts;


