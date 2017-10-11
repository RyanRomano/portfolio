import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {Container} from '../../theme/grid';

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar/>
        <div>
          {this.props.children}
        </div>
      </Container>
    );
  }
}

export default App;
