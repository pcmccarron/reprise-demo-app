/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom/client.js';
import {withLDProvider} from 'launchdarkly-react-client-sdk';
import App from './app';
import './index.css';

// eslint-disable-next-line @typescript-eslint/naming-convention
const LDProvider = withLDProvider({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/naming-convention
	clientSideID: import.meta.env.VITE_CLIENT_ID,
})(App);

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<LDProvider />
	</React.StrictMode>,
);
