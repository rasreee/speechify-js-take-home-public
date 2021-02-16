import redis from 'redis'

export default function createRedisClient() {
    return redis.createClient()
}