import React, { Component } from 'react';
import InputForm from './InputForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Scraper-it</div>
        <div>A place to web scrape from Indeed</div>
        <InputForm />
      </div>
    );
  }
}

export default App;
