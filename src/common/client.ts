import { Data } from '@common';

export enum ClientEventType {
	STATE
}

export enum ClientState {
	PLAYING,
	NOT_PLAYING
}

/**
 * Event for Client State changes
 */
export type ClientStateEvent = {
	type: ClientEventType.STATE;
	state: ClientState;
};

export type ClientStateEventListener = (event: ClientStateEvent) => void;
export interface SpeechifyClient {
	/**
	 *  Sends RPC to Speechify Server
	 * @param data
	 */
	addToQueue(data: Data): Promise<boolean>;

	/**
	 * Initiates or resumes **audio playback** of content streamed from Listening Queue
	 */
	play(): void;

	/**
	 * Returns the current state of the client
	 */
	pause(): void;

	/**
	 * Returns the current state of the client
	 */
	getState(): ClientState;

	/**
	 * Registers a callback for state change events on the Speechify Client
	 * Returns a callback that cancels the subscription
	 * @param listener
	 */
	subscribe(listener: (event: ClientStateEvent) => void): () => void;
}
