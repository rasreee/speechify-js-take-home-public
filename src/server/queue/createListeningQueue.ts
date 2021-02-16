import Queue from 'bull';
import options from './options';

function createListeningQueue() {
    const listeningQueue = new Queue('listeningQueue', options)
    listeningQueue.on('error', console.error)
    listeningQueue.on('connect', () => {
        console.log('Queue connected successfully');
    });
    listeningQueue.on('complete', () => console.log('Queue job complete'))
    return listeningQueue
}
export default createListeningQueue