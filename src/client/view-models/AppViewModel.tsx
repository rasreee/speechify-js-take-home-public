import { RootStore } from 'client/stores';
import { DataType } from '../../common';
import SpeechifyClient from '../speechify-client';

export type AppViewModelProps = {
	client: SpeechifyClient;
	generator: any;
	store: RootStore;
};

export default class AppViewModel {
	client: SpeechifyClient;

	store: RootStore;

	generator: any;

	constructor({ client, generator, store }: AppViewModelProps) {
		this.client = client;
		this.generator = generator;
		this.store = store;
	}

	handlePlay = () => {
		this.store.setIsPlaying(true);
		this.client.play();
	};

	handlePause = () => {
		this.store.setIsPlaying(false);
		this.client.pause();
	};

	handleAddToQueue = async (type: DataType): Promise<void> => {
		const data = this.generator.getData(type);
		try {
			await this.client.addToQueue(data);
			const newList = [...this.store.queue, data];
			this.store.setQueue(newList);
		} catch (error) {
			this.store.setError(
				`Oops! Failed to add ${type} to the queue\n${error}`
			);
		}
	};
}
