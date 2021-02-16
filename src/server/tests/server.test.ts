import express from 'express'
const createServer = require('../server');

describe("express server", () => {
    var app: express.Express;
    var server;
    beforeEach(() => {
        app = createServer()
        server = app.listen(8050)
    })
    afterEach(() => {
        server.close()
    })
    test("should handle addToQueue request", () => {

    })
})