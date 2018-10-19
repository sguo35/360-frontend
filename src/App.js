import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DraggablePane from './DraggablePane';

class App extends Component {
  render() {
    return (
      <BrowserRouter style={{width : '100%', height : '100%'}}>
        <Switch>
          <Route path="/" component={DraggablePane} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
