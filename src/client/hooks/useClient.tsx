import React from 'react';
import { ClientContext } from '../contexts';
import { IClientContext } from '../contexts/client-context';

export default function useClient() {
	return React.useContext<IClientContext>(ClientContext);
}
