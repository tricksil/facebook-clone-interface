import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostList />
      </div>
    );
  }
}
