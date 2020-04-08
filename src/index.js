import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { withToastProvider } from './components/toast';
import './styles/index.css';
const AppWithToastProvider = withToastProvider(App);

ReactDOM.render(
  <AppWithToastProvider />,
  document.getElementById('root')
);
