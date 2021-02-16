import Queue from 'bull';
import options from './connection';

function createListeningQueue() {
    const listeningQueue = new Queue('listeningQueue', options)
    return listeningQueue
}
export default createListeningQueue