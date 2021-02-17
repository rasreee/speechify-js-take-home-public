import './styles.less';

import { enableLogging } from 'mobx-logger';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import {
	ClientProvider,
	DataGeneratorProvider,
	RootStoreProvider
} from './contexts';

enableLogging();

ReactDOM.render(
	<React.StrictMode>
		<DataGeneratorProvider>
			<ClientProvider>
				<RootStoreProvider>
					<App />
				</RootStoreProvider>
			</ClientProvider>
		</DataGeneratorProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
