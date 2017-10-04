import React, { Component } from 'react';
import {Navbar} from '../../theme/globalStyle';
import {Container} from '../../theme/grid';

class App extends Component {

  openNav() {
    document.getElementById("navMenu").classList.add('overlay');
    document.getElementById("navMenu").classList.remove('normal');


  }
  closeNav() {
    document.getElementById("navMenu").classList.remove('overlay');
    document.getElementById("navMenu").classList.add('normal');

  }

  render() {
    return (
      <Container>
        <Navbar id="navMenu" className="normal">
          <h1>rr</h1>
          <a className="menuItem" href="/">home</a>
          <a className="menuItem" href="/about">about</a>
          <a className="menuItem" href="/projects" >projects</a>
          <a href="#" className="icon" onClick={this.openNav.bind(this)}>&#9776;</a>
          <a href="#" className="closeX" onClick={this.closeNav.bind(this)}>x</a>

        </Navbar>
        <div>
          {this.props.children}
        </div>
      </Container>
    );
  }
}

export default App;
