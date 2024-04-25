import { render } from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { createContext } from 'react';
import {allOper} from './store/store'
import ThemeContext from './store/context';

render(
  <ThemeContext.Provider value={allOper}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeContext.Provider>,
  document.getElementById('root'),
);
