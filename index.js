import React from 'react';
import createRoot from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App'



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


