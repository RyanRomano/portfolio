import React from 'react';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpen: false
    };
  }
  
  renderLink(){
    if(this.props.websiteLink !== ''){
      return (
        <a href={this.props.websiteLink}>{this.props.websiteLink}</a>
      );
    }
  }

  renderSection(){


    if(this.state.isOpen){
      return (
        <div className="projectExpand">
          <img src={this.props.projectUrl} alt={this.props.description} className="actualImg"/>
          <p>{this.renderLink()}</p>
          <p className="description">{this.props.description}</p>
          <span className="closeShowCaseButton" onClick={this.closeShowcase.bind(this)}>x</span>
        </div>
      );
    } else {
      return (
        <div className="projectPreview">
          <img src={this.props.projectUrl} alt={this.props.description} onClick={this.openShowcase.bind(this)}/>
        </div>
      );
    }
  }

  openShowcase(){
    this.setState({ isOpen: true });
  }
  closeShowcase(){
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div className="image">
        {this.renderSection()}
      </div>
    );
  }
}
