import * as ReactDOMClient from 'react-dom/client';
import * as React from 'react';
import App from './app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const render = () => {
	const root = ReactDOMClient.createRoot(document.getElementById('root'));

	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

render();
