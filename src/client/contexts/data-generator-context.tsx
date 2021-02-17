import React, { useEffect, useState } from 'react';
import DataGenerator from '../generator';

export type IDataGeneratorContext = DataGenerator | null;

export const DataGeneratorContext = React.createContext<IDataGeneratorContext>(
	null
);

const DataGeneratorProvider: React.FC = ({ children }) => {
	const [generator, setGenerator] = useState<IDataGeneratorContext>(null);

	useEffect(() => {
		const instance = new DataGenerator();
		setGenerator(instance);
	}, []);

	return (
		<DataGeneratorContext.Provider value={generator}>
			{children}
		</DataGeneratorContext.Provider>
	);
};

export default DataGeneratorProvider;
