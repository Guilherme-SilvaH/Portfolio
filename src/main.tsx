import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../src/Components/Header/sass/style.sass'
import './index.sass'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
