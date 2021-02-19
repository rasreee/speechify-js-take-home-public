import { expect } from 'chai';
import DataGenerator from '../../../client/generator';
import { Data, DataType, SpeechifyServer } from '../../../common';

import { SpeechifyService } from '../../services';

describe('Speechify service checks', () => {
	let service: SpeechifyServer;
	const generator: DataGenerator = new DataGenerator();
	beforeEach(() => {
		service = SpeechifyService.getInstance();
	});
	it('adds to queue without error', async () => {
		const data: Data = generator.getData(DataType.HTML);

		const result = service.addToQueue(data);
		expect(result).true;

	});
});
