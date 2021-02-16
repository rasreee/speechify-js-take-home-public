import request from 'supertest'
import { expect } from 'chai'

import createServer from '../../server'

const app = createServer()

describe('server checks', () => {
    it('server instantiated without error', (done) => {
        request(app).get('/').expect(200, done)
    })
})
