import Bull from 'bull';
import { expect } from 'chai';

import DataGenerator from '../../../client/generator';
import { Data, DataType } from '../../../common';
import createListeningQueue from '../../queue/createListeningQueue';

describe('Listening queue checks', () => {
	let queue: Bull.Queue<Data>;
	const generator: DataGenerator = new DataGenerator();
	beforeEach(async (done) => {
		queue = createListeningQueue();
		const count = await queue.count();
		if (count > 0) {
			await queue.empty();
		}
		done()
	});
	afterEach(async (done) => {
		await queue.close(true);
		done()
	});
	it('initializes queue without error', async () => {
		const count = await queue.count();
		expect(count).to.equal(0);
	});

	it('adds HTML to queue without error', async () => {
		await queue.add(generator.getData(DataType.HTML));
		const count = await queue.count();
		expect(count).to.equal(1);
	});

	it('adds HTML & JSON to queue without error', async () => {
		await queue.add(generator.getData(DataType.HTML));
		await queue.add(generator.getData(DataType.JSON));
		const count = await queue.count();
		expect(count).to.equal(2);
	});
});
