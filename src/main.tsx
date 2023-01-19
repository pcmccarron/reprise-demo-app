import React from 'react';
import ReactDOM from 'react-dom/client';
import {withLDProvider} from 'launchdarkly-react-client-sdk';
import App from './App';
import './index.css';

// eslint-disable-next-line @typescript-eslint/naming-convention
const LDProvider = withLDProvider({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/naming-convention
	clientSideID: import.meta.env.VITE_CLIENT_ID,
	context: {
		"kind": "newcontext2",
		"key": "newcontext2",
		"name": "Peter"
	}
})(App);

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<LDProvider />
	</React.StrictMode>,
);
