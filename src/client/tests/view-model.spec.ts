import { expect } from 'chai';
import { isObservableProp } from 'mobx';
import { RootStore } from 'client/stores';
import DataGenerator from '../generator';
import AppViewModel from '../view-models/AppViewModel';
import SpeechifyClient from '../speechify-client';

const SERVER_HOST = 'http://localhost:8050';

const client = new SpeechifyClient(SERVER_HOST);
const generator = new DataGenerator();
const store = new RootStore();
describe('ViewModel checks', () => {
	it('should render w/o error', () => {
		const viewModel = new AppViewModel({ client, generator, store });
		expect(isObservableProp(viewModel, 'isPlaying')).to.equal(true);
	});
});
