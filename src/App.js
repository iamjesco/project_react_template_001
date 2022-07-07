import React, { Component } from 'react';
import './assets/css/App.css';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Navigation />
        <Hero />
      </main>
    );
  }
}

export default App;


