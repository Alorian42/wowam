import * as ReactDOMClient from 'react-dom/client';
import * as React from 'react';
import App from './app';

const render = () => {
	const root = ReactDOMClient.createRoot(document.getElementById('root'));

	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

render();
