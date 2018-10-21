import React, { Component } from 'react';
import Prompt from './components/Prompt/Prompt'

class HelloWorld extends Component {
  render() {
    return (
      <div style={{margin : 20, display:'flex', flexFlow : 'row wrap'}}>
        <Prompt gradedName='Bobert'></Prompt>
        <Prompt gradedName='Bobert'></Prompt>
      </div>
    );
  }
}

export default HelloWorld;
