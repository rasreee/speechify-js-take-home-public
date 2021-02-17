import { Data, StreamChunk } from '@common';

export interface SpeechifyServer {
	addToQueue(data: Data): Promise<boolean>;
	getNextChunk(): StreamChunk | undefined;
}
