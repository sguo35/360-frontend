import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import Rate from './components/Rate/Rate';
import SelectProject from './components/SelectProject/SelectProject';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import 'antd/dist/antd.css';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Rate} />
            <Route path="/selectProject" component={SelectProject} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
