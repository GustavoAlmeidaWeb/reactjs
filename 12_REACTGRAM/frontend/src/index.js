import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { store } from './store';

import { BrowserRouter } from 'react-router-dom';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faBook, faCartShopping, faMobilePhone, faSearch, faCamera, faUser, faRightFromBracket, faEye, faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faBook, faCartShopping, faMobilePhone, faSearch, faCamera, faUser, faRightFromBracket, faEye, faPencil, faXmark);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

