import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
    
 ,
)
