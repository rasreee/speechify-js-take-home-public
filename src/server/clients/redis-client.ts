import redis from 'redis'
import redisMock from 'redis-mock'

export default function createRedisClient() {
    if (process.env.NODE_ENV !== 'mocha') {
        return redisMock.createClient().on('error', console.error).on('connect', function (err) {
            console.log('Connected to redis successfully');
        });

    }
    return redis.createClient().on('error', console.error).on('connect', function (err) {
        console.log('Connected to redis successfully');
    });

}