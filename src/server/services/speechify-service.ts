import Bull from 'bull'

import { Data, StreamChunk } from "../../common";
import { SpeechifyServer } from "../../common/server";
import { createListeningQueue } from '../queue';
export default class SpeechifyService implements SpeechifyServer {
    queue: Bull.Queue<Data>;
    constructor() {
        this.queue = createListeningQueue();
    }

    async addToQueue(data: Data): Promise<boolean> {
        console.log('\n🍜 adding to queue: ', JSON.stringify(data))
        try {
            await this.queue.add(data)
            return true;
        } catch (err) {
            console.error('\n🍜 error on addToQueue: ', err)
            return false;
        }
    }

    getNextChunk(): StreamChunk | undefined {
        console.error("getNextChunk not implemented");
        return undefined;
    }
}
