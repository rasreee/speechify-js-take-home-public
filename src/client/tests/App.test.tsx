import { render } from '@testing-library/react';
import {
	ClientProvider,
	DataGeneratorProvider,
	RootStoreProvider
} from 'client/contexts';
import React from 'react';
import App from '../App';

function renderApp() {
	return render(
		<DataGeneratorProvider>
			<ClientProvider>
				<RootStoreProvider>
					<App />
				</RootStoreProvider>
			</ClientProvider>
		</DataGeneratorProvider>
	);
}

describe('<App />', () => {
	test('should display initial App component', () => {
		const { findByTestId } = renderApp();
	});
});
