import { expect } from 'chai';
import DataGenerator from '../../../client/generator';
import { Data, DataType } from '../../../common';

import { SpeechifyService } from '../../services';

describe('Speechify service checks', () => {
	let service: SpeechifyService;
	const generator: DataGenerator = new DataGenerator();
	beforeEach(async () => {
		service = new SpeechifyService();
		const count = await service.queue.count();
		if (count > 0) {
			await service.queue.empty();
		}
	});
	afterEach(() => {
		service.queue.close(true);
	});
	it('adds to queue without error', async () => {
		const data: Data = generator.getData(DataType.HTML);

		const result = await service.addToQueue(data);
		expect(result).true;

		const count = await service.queue.count();
		expect(count).to.equal(1);
	});
});
