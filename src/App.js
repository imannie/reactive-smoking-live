import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dataJson from './data/data.json';

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount = () => {
    this.onFetch();
  }
  //get data from json
  onFetch = () => {
    console.log('fetch calling');
    fetch("data/data.json")
    .then(response => response.json())
    .then(data => {
      console.log('got data:', data);
      this.setState({

      });
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
