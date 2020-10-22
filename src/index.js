import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router  } from 'react-router-dom'
import './index.scss';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux'
i

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={ store } >
      <Router>
        <App />
      </Router>,
    </ReduxProvider>,
  document.getElementById('root')
);

