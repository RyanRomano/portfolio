import React, { Component } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import './Projects.css';
import aliveNJ from '../../assets/alivenj.png';
import ckr from '../../assets/ckr.png';
import ozark from '../../assets/ozark.png';
import slack from '../../assets/slack-feature.png';
import zine from '../../assets/zine.png';


const projects = [
{
  projectUrl: ckr,
  description: "Redesign for Carl's Jr./Hardee's corporate site. Built with Ruby on Rails, PostgreSQL, & RefineryCMS.",
  websiteLink: 'http://www.ckr.com'
},
{
  projectUrl: ozark,
  description: "Faux tourist site for Netflix's original series Ozark. Built with HTML, CSS, & Javascript.",
  websiteLink: 'https://visitozark.info'
  
},
{
  projectUrl: slack,
  description: 'Lunchbot is a Slack app. It randomly pairs up employees for lunch by grabbing the list of Slack channel members. Built in Golang, utilizes the Slack API.',
  websiteLink: ''
},
{
  projectUrl: aliveNJ,
  description: 'Poster site for a club from a local college. Built with HTML, CSS, & Bootstrap.',
  websiteLink: 'http://alivenj.bitballoon.com'
},
{
  projectUrl: zine,
  description: 'Carrot intern summer project. Built with the turn.js library.',
  websiteLink: 'https://zine.bycarrot.com/index.html'
}
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
        projects
    };
  }

  render() {
    return (
      <div>
        <Gallery projects={this.state.projects}/>
      </div>
    );
  }
}

export default Projects;

