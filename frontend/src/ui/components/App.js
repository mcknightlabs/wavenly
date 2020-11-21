import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from './Navbar'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Footer />
      </div>
    );
  }
}

export default App;