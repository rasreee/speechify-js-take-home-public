
describe("express server", () => {
    var server;
    beforeEach(() => {
        server = require('../server')
    })
    afterEach(() => {
        server.close()
    })
    test("should handle addToQueue request", () => {

    })
})