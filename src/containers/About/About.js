import React, { Component } from 'react';

class About extends Component {

  openNav() {
      document.getElementById("menuOverlay").style.height = "100%";
  }

  closeNav() {
      document.getElementById("menuOverlay").style.height = "0%";
  }



  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default About;
