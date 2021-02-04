import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { AppContextProvider } from './Components/AppContextProvider'
import { Provider } from 'react-redux';
import store from "./Redux/store"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

