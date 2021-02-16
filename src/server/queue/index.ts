import { setQueues, BullAdapter } from 'bull-board'
import createListeningQueue from './createListeningQueue'

const listeningQueue = createListeningQueue()

setQueues([new BullAdapter(listeningQueue)])
export { createListeningQueue }
