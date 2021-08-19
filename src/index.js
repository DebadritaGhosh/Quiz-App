import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-quill/dist/quill.snow.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// react-router-dom
import { BrowserRouter } from 'react-router-dom';

// context
import { SettingsProvider } from 'context/SettingsContext';

// redux
import { Provider } from 'react-redux';
import store from 'reducers/store';

// utils
import { restoreSettings } from 'utils/settings';
import initialize from 'utils/initialize';

initialize.initEnv();
initialize.initAxios();

const settings = restoreSettings();

ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider settings={settings}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SettingsProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
