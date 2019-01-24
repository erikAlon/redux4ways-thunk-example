import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import Appers from './Appers';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Appers />
      </Provider>
    );
  }
}
