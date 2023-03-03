import App from '@app/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '/src/fonts/MavenProRegular/Maven-Pro-Regular.ttf.woff';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
