import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CounterContextProvider } from './context/CounterContext';
import { TitleColorContextProvider } from './context/TitleColorContext';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faBook, faCartShopping, faMobilePhone, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faBook, faCartShopping, faMobilePhone, faSearch);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterContextProvider>
        <TitleColorContextProvider>
          <App />
        </TitleColorContextProvider>
      </CounterContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
