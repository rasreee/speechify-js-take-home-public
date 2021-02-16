import Queue from 'bull';
import options from './connection';

const listeningQueue = new Queue('listeningQueue', options)

export default listeningQueue