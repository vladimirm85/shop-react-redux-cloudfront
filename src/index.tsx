import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'components/App/App';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';

localStorage.setItem(
  'authorization_token',
  'dmxhZGltaXJtODU6VEVTVF9QQVNTV09SRA=='
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const responseData = error?.response?.data;
    const responseStatus = error?.response?.status;

    if (responseStatus === 400) {
      alert(responseData?.data);
    }

    if (responseStatus === 401 || responseStatus === 403) {
      alert(responseData?.message);
    }

    return Promise.reject(error?.response ?? error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
