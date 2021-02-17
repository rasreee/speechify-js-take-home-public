import React, { useEffect, useState } from 'react';
import SpeechifyClient from '../speechify-client';

export type IClientContext = SpeechifyClient | null;

export const ClientContext = React.createContext<IClientContext>(null);

const ClientProvider: React.FC = ({ children }) => {
	const [client, setClient] = useState<IClientContext>(null);

	useEffect(() => {
		const SERVER_HOST = 'http://localhost:8050';
		const instance = new SpeechifyClient(SERVER_HOST);
		setClient(instance);
	}, []);

	return (
		<ClientContext.Provider value={client}>
			{children}
		</ClientContext.Provider>
	);
};

export default ClientProvider;
