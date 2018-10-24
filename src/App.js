import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import Rate from './components/Rate/Rate';
import SelectProject from './components/SelectProject/SelectProject';
import Login from './components/Login/Login';
import Dash from './components/Dash/Dash';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import 'antd/dist/antd.css';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" component={Dash} />
              <Route path="/selectProject/:info" component={SelectProject} />
              <Route path="/project/:projectId" component={Rate} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
