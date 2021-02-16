import { expect } from 'chai'
import { createRedisClient } from '../../clients'

describe('redis-client checks', () => {
    it('redis client initialized without error', () => {
        const client = createRedisClient()
    })
})
