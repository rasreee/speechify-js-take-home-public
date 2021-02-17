import React from 'react';
import { DataGeneratorContext } from '../contexts';
import { IDataGeneratorContext } from '../contexts/data-generator-context';

export default function useGenerator() {
	return React.useContext<IDataGeneratorContext>(DataGeneratorContext);
}
