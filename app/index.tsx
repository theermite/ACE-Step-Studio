import React from 'react';
import ReactDOM from 'react-dom/client';
// Self-hosted Inter font (offline) — replaces the Google Fonts @import.
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
// Locally compiled Tailwind + custom styles — replaces the Tailwind Play CDN.
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ResponsiveProvider } from './context/ResponsiveContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ResponsiveProvider>
        <App />
      </ResponsiveProvider>
    </AuthProvider>
  </React.StrictMode>
);