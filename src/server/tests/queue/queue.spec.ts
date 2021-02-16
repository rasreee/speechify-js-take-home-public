import Bull from 'bull'
import { expect } from 'chai'
import { Data } from '../../../common';
import createListeningQueue from '../../queue/createListeningQueue'
describe("Listening queue checks", () => {
    let queue: Bull.Queue<Data>;
    beforeEach(async () => {
        queue = createListeningQueue()
        const count = await queue.count()
        if (count > 0) {
            await queue.empty()
        }
    })
    afterEach(() => {
        queue.close(true)
    })
    it("initializes queue without error", async () => {
        const count = await queue.count()
        console.log('💜 queue: ', count)
        expect(count).to.equal(0)
    })

    it("adds to queue without error", async () => {
        const queue = createListeningQueue()
        await queue.add({ message: 'hi' })
        const count = await queue.count()
        console.log('💜 # jobs: ', count)
        expect(count).to.equal(1)
    })
})