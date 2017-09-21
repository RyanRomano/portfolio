import React, { Component } from 'react';
import {Container} from 'theme/grid';
import {Hero, RevealP, Navbar} from './Home.style';
import WhenInView from 'components/WhenInView/WhenInView';
export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: 0
  //   };
  // }

  // increment(){
  //   this.setState({
  //     data: this.state.data + 1
  //   });
  // }
    // <p>{this.state.data}</p>
          // <button onClick={this.increment.bind(this)}>increment</button>
  

  // static propTypes = [];
  render(){
    return(
      <Container>
        <div className="App">
          <div className="App-header">
            <Navbar>
              <h1 className="App-logo" alt="logo">rr</h1>
              <ul>
                <li><a href="/">home</a></li>
                <li><a href="/projects">projects</a></li>
                <li><a href="/about">about</a></li>
              </ul>
            </Navbar>
          </div>

  
          <Hero>
            <h1>ryan romano</h1>
            <h1>front end web developer</h1>

          </Hero>
          <WhenInView>
            {({isInView}) => 
              <RevealP hide={!isInView}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</RevealP>
            }
          </WhenInView>
        </div>
      </Container>
    );
  }
}

