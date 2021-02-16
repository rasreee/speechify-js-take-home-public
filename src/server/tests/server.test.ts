import { Server } from 'http'
import supertest from 'supertest'
import express from 'express'
import createServer from '../server';

describe("express server", () => {
    var app: express.Express;
    var server: Server;
    beforeEach(() => {
        app = createServer()
        server = app.listen(8050)
    })
    afterEach(() => {
        server.close()
    })
    test("should handle addToQueue request", () => {
        supertest(app).post('/api/addToQueue').then((response) => {
            expect(response.body).toBeTruthy()
        })
    })
})