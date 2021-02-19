import { DataProcessor } from '.';

import { Data, DataType, StreamChunk } from '../../common';
import { SpeechifyServer } from '../../common/server';
export default class SpeechifyService implements SpeechifyServer {
	public queue: Array<string> = []

	private static instance: SpeechifyServer;

	private constructor() { }

	static getInstance(): SpeechifyServer {
		if (!this.instance) {
			this.instance = new this()
		}
		return this.instance;
	}

	addToQueue(data: Data): boolean {
		console.log('\n🍜 adding to queue: ', JSON.stringify(data));
		const processed = this.processData(data);
		this.queue.push(processed)
		return true;
	}

	getNextChunk(): StreamChunk | undefined {
		return this.queue.shift()
	}

	/**
	 * Using the type and data parameters of the input,
	 * appropriately process the data into a string to be
	 * read by speechSynthesis
	 */
	processData({ type, data }: Data): string {
		switch (type) {
			case DataType.HTML:
				return DataProcessor.parseHTML(data)
			case DataType.JSON:
				return DataProcessor.parseJSON(data)
			case DataType.TXT:
				return DataProcessor.parseTXT(data)
		}
	}

}
