import { Data } from '@common';
import { action, computed, makeObservable, observable } from 'mobx';

export default class RootStore {
	@observable
	isPlaying: boolean = false;

	@observable
	error: string = '';

	@observable
	queue: Array<Data> = [];

	constructor() {
		makeObservable(this);
	}

	@action
	setIsPlaying = (value: boolean) => (this.isPlaying = value);

	@action
	setQueue = (value: Array<Data>) => (this.queue = value);

	@action
	setError = (value: string) => (this.error = value);

	@computed
	get isDisabled(): boolean {
		return this.queue.length === 0;
	}
}
