import React, {Component} from 'react';
import * as firebase from "firebase";
import config from './firebase-config';

class App extends Component {
  constructor() {
    super();
    // Initialize Firebase
    firebase.initializeApp(config);
  }
  state = {
    posts: [],
    loading: true
  };
  componentWillMount() {
    let postsRef = firebase
      .database()
      .ref('posts');
    let _this = this;
    postsRef.on('value', function (snapshot) {
      console.log(snapshot.val());
      _this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
      <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Reddit Clone</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">All Posts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/add-post">Add a Post</a>
      </li>
     
    </ul>
  </div>
</nav>
      </div>
       {this.props.children && React.cloneElement(this.props.children, {
firebase: firebase.database(),
posts: this.state.posts,
loading: this.state.loading
})}
      </div>
    );
  }
}

export default App;
