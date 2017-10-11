import React, { Component } from 'react';
import {Hero} from './Home.style';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };
  }

  increment(){
    this.setState({
      data: this.state.data + 1
    });
  }

  render(){
    return(
        <div className="App">
          <Hero>
            <h1>ryan romano</h1>
            <h1>front end web developer</h1>
          </Hero>
        </div>
    );
  }
}


// <p>{this.state.data}</p>
// <button onClick={this.increment.bind(this)}>Increment</button>
