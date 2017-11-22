import React, {Component} from 'react';
class Posts extends Component {

handleUpvote = (post, key) => {
    this
        .props
        .firebase
        .ref('posts/' + key)
        .set({
            title: post.title,
            upvote: post.upvote + 1,
            downvote: post.downvote
        });
}

handleDownvote = (post, key) => {
    this
        .props
        .firebase
        .ref('posts/' + key)
        .set({
            title: post.title,
            upvote: post.upvote,
            downvote: post.downvote + 1
        });
}

    render() {
let posts = this.props.posts;
let _this = this;
if (!posts) {
    return false;
}
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
                            <div key={key}>
                              <h4 className="card-title"> { posts[key].title } </h4>
                             
                              <p className="card-text">
                                <b>Upvotes: { posts[key].upvote } 
                                    <div>
                                        <button className="btn btn-sm btn-success" onClick={ _this.handleUpvote.bind(this,posts[key], key) } type="button">Upvote</button>
                                    </div> 
                                </b>
                                <br />
                                <b>Downvotes: { posts[key].downvote }
                                    <div>
                                        <button className="btn btn-sm btn-danger" onClick={ _this.handleDownvote.bind(this,posts[key], key) } type="button">Downvote</button>
                                    </div>
                                </b>
                              </p>
                              
                              </div>
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


