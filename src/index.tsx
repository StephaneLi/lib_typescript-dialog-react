import React from 'react';
import ReactDOM from 'react-dom/client';
import Dialog from './lib';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Dialog text="message de bienvenue" showDialog={true} />
  </React.StrictMode>
)
