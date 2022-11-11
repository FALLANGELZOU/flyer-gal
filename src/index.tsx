import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Dialog } from './Components/Dialog';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const onBlock = () => {
  console.log("finish");
  
}
root.render(
  // <React.StrictMode>
    <Dialog option={{
      name: "Alice",
      message: "我们每天度过的称之为日常的生活，其实是一个个奇迹的连续也说不定。 ———《日常》",
      speed: 50,
      block: onBlock
    }}></Dialog>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
