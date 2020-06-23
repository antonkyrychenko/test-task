import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { CssBaseline, ThemeProvider, ThemeOptions, createMuiTheme } from '@material-ui/core';
import { lightGreen, green, red } from '@material-ui/core/colors';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './i18n';

const themeOptions: ThemeOptions = {
  palette: {
    type: "dark",
    primary: lightGreen,
    secondary: green,
    error: red
  }
};

const theme = createMuiTheme(themeOptions);

const Root = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Router>
  </ThemeProvider>

);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
