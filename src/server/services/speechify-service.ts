
import Queue from 'bull'
import { DataType, Data, StreamChunk } from "../../common";
import { SpeechifyServer } from "../../common/server";
import { listeningQueue } from '../queue';
export default class SpeechifyService implements SpeechifyServer {
    constructor() {
    }

    async addToQueue(data: Data): Promise<boolean> {
        console.log('\n🍜 adding to queue: ', JSON.stringify(data))

        try {
            await listeningQueue.add(data);
            console.log('\n🍜 queue count: ', await listeningQueue.count())
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
