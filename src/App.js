import React, { Component } from 'react';
import Sidebar from './containers/Sidebar';
import AddMessagesList from './containers/AddMessagesList';
import AddMessages from "./containers/AddMessages";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <section className="main">
          <AddMessagesList />
          <AddMessages />
        </section>
      </div>
    );
  }
}

export default App;
