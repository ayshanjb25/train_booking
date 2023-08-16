import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthContextProvider from './context/AuthContext';
// import { RegisterContextProvider } from './context/RegisterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <AuthContextProvider>
      {/* <RegisterContextProvider> */}
         <App />
        {/*</RegisterContextProvider> */}
    </AuthContextProvider>
  </React.StrictMode>
);

