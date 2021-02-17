import redis from 'redis';
import redisMock from 'redis-mock';

export default function createRedisClient() {
	let client;
	if (process.env.NODE_ENV !== 'mocha') {
		client = redisMock.createClient();
	}
	if (!client) {
		client = redis.createClient();
	}

	client.on('error', console.error);
	client.on('connect', () => {
		console.log('Connected to redis successfully');
	});
	return client;
}
