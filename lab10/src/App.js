import React, { Component } from 'react';
import classes from './App.css';
import Posts from './containers/Posts/Posts';

class App extends Component {
  render() {
    return (<div className={classes.App}>
          <h1>Blog de ejemplo</h1>
        <Posts />
        
      </div>);
  }
}

export default App;
