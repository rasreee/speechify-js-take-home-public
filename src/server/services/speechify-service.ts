import { RedisClient } from 'redis';
import { Session } from 'express-session'

import Queue from 'bull'
import { DataType, Data, StreamChunk } from "../../common";
import { SpeechifyServer } from "../../common/server";
export default class SpeechifyService implements SpeechifyServer {
    client: RedisClient;
    constructor(client: RedisClient) {
        this.client = client;
    }

    async addToQueue(data: Data): Promise<boolean> {
        console.log('\n🍜 adding to queue: ', JSON.stringify(data))

        try {
            this.client
            this.client.append('listeningData', JSON.stringify(data));
            console.log('\n🍜 REDIS STATE: ', this.client.get('listeningData'))
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
