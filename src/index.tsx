import React from 'react';
import ReactDOM from 'react-dom/client';
import Dialog from './lib';
import './style.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <div className="demo">
      <Dialog text="message de bienvenue" showDialog={true} />
    </div>
  </React.StrictMode>
)
