import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { Data, StreamChunk } from '../common';
import {
	SpeechifyClient,
	ClientState,
	SpeechifyClientEvent,
	ClientEventType,
	ClientEventListener
} from '../common/client';

type Endpoints = {
	addToQueue: string;
	getNextChunk: string;
};

export default class SpeechifyClientImpl implements SpeechifyClient {
	context: string = 'SpeechifyClient';

	endpoints: Endpoints;

	client: AxiosInstance;

	listener: ClientEventListener | null = null;

	currentChunk: StreamChunk = '';

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
		const endpoint = this.endpoints.addToQueue;
		try {
			const response = await this.client.post<{ success: boolean }>(
				endpoint,
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
			return speechSynthesis.resume()
		}

		await this.loadNextChunk()
		const utterance = new SpeechSynthesisUtterance(this.currentChunk)
		speechSynthesis.speak(utterance)
	}

	pause(): void {
		const state = this.getState();
		if (state === ClientState.NOT_PLAYING) {
			return;
		}

		return speechSynthesis.pause()
	}

	getState(): ClientState {
		return speechSynthesis.speaking ? ClientState.PLAYING : ClientState.NOT_PLAYING;
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


	subscribe = (listener: ClientEventListener): (() => void) => {
		if (this.listener) throw new Error('Already subscribed to a listener')
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
