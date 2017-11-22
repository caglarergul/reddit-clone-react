import React, {Component} from 'react';

class AddPost extends Component {
  constructor() {
    super();

    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  state = {
    title: ''
  };

  handleChange = (e) => {
    this.setState({title: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this
      .props
      .firebase
      .ref('posts')
      .push({title: this.state.title, upvote: 0, downvote: 0});

    this.setState({title: ''});
  }

  render() {
    return (
      <div className="AddPost">
        <div className="container">
          <h1>Add a New Post</h1>
          <div class="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Write the title of your post"
              onChange={this.handleChange}
              value={this.state.title}/>
            <span class="input-group-btn">
              <button className="btn btn-secondary" type="submit" onClick={this.handleSubmit}>
                Add
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;
