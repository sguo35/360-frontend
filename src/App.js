import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import Rate from './components/Rate/Rate';

import { Provider } from 'react-redux';
import {store} from './redux/store';

import 'antd/dist/antd.css';
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
