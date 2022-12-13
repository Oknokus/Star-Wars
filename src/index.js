import cn from "classnames";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Containers/App/App';
import styles from '../src/Containers/App/App.module.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  
    <h1 className={cn(styles.header, styles.text)}>Index Hello!!</h1> 
  </React.StrictMode>
);

