import React from 'react';
import './Navbar.css';


export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  renderNav(){
    if(this.state.isOpen){
        return(
          <div className="nav overlay">
            <a className="menuItem" id="homeLink" href="/">home</a>
            <a className="menuItem" id="aboutLink" href="/about">about</a>
            <a className="menuItem" id="projectsLink" href="/projects" >projects</a>
            <span href="javascript:void(0)" className="closeX" onClick={this.closeNav.bind(this)}>x</span>
          </div>
        );
    }
    return(
      <div className="nav normal">
        <h1>rr</h1>
        <a href="/">home</a>
        <a href="/about">about</a>
        <a href="/projects" >projects</a>
        <span href="javascript:void(0)" className="hamburgerIcon" onClick={this.openNav.bind(this)}>&#9776;</span>
      </div>
    );
  }


  render() {
    return (
      <div className="navContainer">
        {this.renderNav()}
      </div>
    );
  }


  openNav() {
    this.setState({ isOpen: true });
  }
  closeNav() {
    this.setState({ isOpen: false });    
  }
}
