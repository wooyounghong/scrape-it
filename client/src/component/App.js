import React, { Component } from 'react';
import InputForm from './InputForm';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-header">Scraper-it</div>
        <div className="app-description">
          A place to web scrape from Indeed.com
        </div>
        <InputForm />
      </div>
    );
  }
}

export default App;
