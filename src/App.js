import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './HelloWorld';

import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HelloWorld} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
