import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import store from './utilities/store/index';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// wrap the app in React.DOM.render to render the necessary componets to the DOM when there is a change is state
ReactDOM.render(
    // Wrap the app with provider and pass in the store as a prop to make the store available to all components in the application
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
