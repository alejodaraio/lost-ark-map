import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Map from './components/Map';
import { store } from './store/store';

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Map />
    </Provider>, document.querySelector('#root'));
}

render();