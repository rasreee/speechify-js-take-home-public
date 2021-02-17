import React from 'react';
import { RootStoreContext } from '../contexts';

export default function useRootStore() {
	const context = React.useContext(RootStoreContext);
	if (context === undefined) {
		throw new Error('useRootStore must be used within RootStoreProvider');
	}

	return context;
}
