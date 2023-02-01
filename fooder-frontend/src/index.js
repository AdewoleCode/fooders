import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
        <ToastContainer
          position='bottom-right'
          autoClose={3000}
          closeOnClick
          draggable
          pauseOnHover
          theme='light'
        />
        <App />
      </BrowserRouter>
  </Provider>

);

