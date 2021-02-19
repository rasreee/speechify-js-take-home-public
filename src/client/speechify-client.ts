import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { Data, StreamChunk } from '../common';
import {
	SpeechifyClient,
	ClientState,
	ClientStateEventListener,
	ClientEventType
} from '../common/client';

type Endpoints = {
	addToQueue: string;
	getNextChunk: string;
};

export default class SpeechifyClientImpl implements SpeechifyClient {
	context: string = 'SpeechifyClient';

	endpoints: Endpoints;

	client: AxiosInstance;

	listener: ClientStateEventListener | null = null;

	currentChunk: StreamChunk = '';

	state: ClientState = ClientState.NOT_PLAYING

	constructor(host: string) {
		this.endpoints = {
			addToQueue: '/api/addToQueue',
			getNextChunk: '/api/getNextChunk'
		};
		this.client = axios.create({
			baseURL: host,
			timeout: 1000,
			headers: {
				Accept: 'application/json',
				Proxy: '127.0.0.1:8050'
			}
		});
	}

	async addToQueue(data: Data): Promise<boolean> {
		try {
			const response = await this.client.post<{ success: boolean }>(
				this.endpoints.addToQueue,
				data
			);
			if (response.data.success) {
				this.logSuccess(response);
			}
			return response.data.success;
		} catch (error) {
			this.logError(error);
		}
		return false;
	}

	async play(): Promise<void> {
		const state = this.getState();
		if (state === ClientState.PLAYING) {
			return;
		}

		if (speechSynthesis.paused) {
			this.setState(ClientState.PLAYING)
			return speechSynthesis.resume()
		}

		await this.loadNextChunk()
		const utterance = new SpeechSynthesisUtterance(this.currentChunk)
		// Load the next chunk from the server
		utterance.onend = async () => {
			this.listener!({ type: ClientEventType.STATE, state: ClientState.NOT_PLAYING })
			await this.loadNextChunk()
		}
		speechSynthesis.speak(utterance)
		this.setState(ClientState.PLAYING)
	}

	pause(): void {
		const state = this.getState();
		if (state === ClientState.NOT_PLAYING) {
			return;
		}
		this.setState(ClientState.NOT_PLAYING)
		return speechSynthesis.pause()
	}

	getState(): ClientState {
		return this.state;
	}

	setState(state: ClientState): void {
		this.state = state;
		if (!this.listener) return
		this.listener({ type: ClientEventType.STATE, state: state })
	}


	async loadNextChunk(): Promise<void> {
		try {
			const response = await this.client.get(this.endpoints.getNextChunk);
			if (response.status === 200) {
				const chunk = response.data.chunk
				this.logSuccess(response)
				this.currentChunk = chunk
			}
		} catch (err) {
			this.logError(err)
		}
	}


	subscribe = (listener: ClientStateEventListener): (() => void) => {
		if (this.listener) return () => console.log('already subscribed')
		this.listener = listener;
		return () => console.log(`subscribed to listener: ${listener}`);
	};

	logError(error: AxiosError) {
		console.log('🆘 ERROR:', this.context, ': ', error);
	}

	logSuccess = (response: AxiosResponse) =>
		console.log('💚 SUCCESS:', this.context, ': ', response.config.url);

	connect = async (): Promise<boolean> => {
		const response = await this.client.get('/');
		if (response.status === 200) {
			this.logSuccess(response);
		}
		return response.status === 200;
	};
}
