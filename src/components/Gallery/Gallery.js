import React from 'react';
import Project from './Project';
import _ from 'lodash';
/**
* Given a DOM element, searches it for <img> tags and checks if all of them
* have finished loading or not.
* @param  {Element} parentNode
* @return {Boolean}
*/

export default class Gallery extends React.Component {

  renderProjects() {
    const props = _.omit(this.props, 'projects');
    return _.map(this.props.projects, (project, index) => <Project key={index} {...project} {...props} />);
  }

  render() {
    return (
      <div className="gallery" ref="gallery" id="galleryDiv">
        {this.renderProjects()}
      </div>
    );
  }
}
