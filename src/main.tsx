import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import './index.css'

const LDProvider = withLDProvider({
  clientSideID: import.meta.env.VITE_CLIENT_ID,
})(App);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LDProvider />
  </React.StrictMode>
)
