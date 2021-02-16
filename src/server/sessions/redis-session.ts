import session from 'express-session';

import { createRedisClient } from '../clients';

let RedisStore = require('connect-redis')(session)
let redisClient = createRedisClient();

export default function createRedisSession() {
    return session({
        store: new RedisStore({ client: redisClient }),
        secret: 'speechify-redis',
        resave: false,
        saveUninitialized: true
    })
}