
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContext } from './context/AppContext.jsx';
import AppContextProvider from "./context/AppContext";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <AppContextProvider>
      <App />    
    </AppContextProvider>
    </BrowserRouter>



)
