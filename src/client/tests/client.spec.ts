import { expect } from 'chai';

import { DataType } from '@common';

import app from '../../server/app';
import DataGenerator from '../generator';
import SpeechifyClient from '../speechify-client';

const SERVER_HOST = 'http://localhost:8050'
describe('Client service checks', () => {
    let client: SpeechifyClient
    const generator: DataGenerator = new DataGenerator()

    beforeEach(() => {
        client = new SpeechifyClient(SERVER_HOST)
    })

    afterEach(() => {
    })

    it('should connect to server w/o error', async () => {
        const result = await client.connect()
        expect(result).to.equal(true)
    })

    it('should add to queue without error', async () => {
        const result = await client.addToQueue(generator.getData(DataType.HTML))
        expect(result).to.equal(true)
    })
})
