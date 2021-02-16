import session from 'express-session'

import { createRedisClient } from '../clients'

const RedisStore = require('connect-redis')(session)

const redisClient = createRedisClient()

export default function createRedisSession() {
    return session({
        store: new RedisStore({ client: redisClient }),
        secret: 'speechify-redis',
        resave: false,
        saveUninitialized: true,
    })
}
