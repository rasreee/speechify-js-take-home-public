import React, { ReactNode } from 'react';
import { RootStore } from '../stores';

let store: RootStore;

export const RootStoreContext = React.createContext<RootStore | undefined>(
	undefined
);

function RootStoreProvider({ children }: { children: ReactNode }) {
	const root = store ?? new RootStore();

	return (
		<RootStoreContext.Provider value={root}>
			{children}
		</RootStoreContext.Provider>
	);
}

export default RootStoreProvider;
