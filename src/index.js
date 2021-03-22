import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware }  from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import theme from 'common/theme';
import GlobalStyle from 'common/style/global';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
