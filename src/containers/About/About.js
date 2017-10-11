import React, { Component } from 'react';
import aboutImage from '../../assets/radishes.jpg';
import './About.css';



class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <img src={aboutImage} className="aboutImg"/>
        <div className="aboutContent"> 
          <p><strong>Hello! My name is Ryan.</strong></p>
          <p>I'm into sustainable food, architecture, and great code.</p>
          <p>Currently, I am seeking opportunities in New York City.</p>
          <p>I specialize in front end development, with a focus on React.</p>
          <p>{"Contact: ryanaromano@gmail.com"}</p>
        </div>
      </div>
    );
  }
}

export default About;
