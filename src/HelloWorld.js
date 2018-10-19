import React, { Component } from 'react';
import PromptUI from './PromptUI'

class HelloWorld extends Component {
  render() {
    return (
      <div style={{margin : 20, display:'flex', flexFlow : 'row wrap'}}>
        <PromptUI></PromptUI>
        <PromptUI></PromptUI>
      </div>
    );
  }
}

export default HelloWorld;
