import React, { Component } from 'react';

class TechList extends Component {
  state = {
    techs: [
      'Node.js',
      'ReactJ',
      'React Native'
    ]
  };
  
  render() {
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJs</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;