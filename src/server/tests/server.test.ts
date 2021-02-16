import { Server } from 'http'
import supertest from 'supertest'
import express from 'express'
import createServer from '../server';
import { Data, DataType } from '../../common'

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
        const data: Data = {
            type: DataType.TXT,
            source: "feeds.stock-ticker",
            data:
                "AMZN\t3232.58\tUSD\nFB\t272.14\tUSD\nAAPL\t142.06\tUSD\nNFLX\t523.28\tUSD",
        }
        supertest(app).post('/api/addToQueue').send(data).set("Accept", "application/json; charset=utf-8").set("Content-Type", "application/json; charset=utf-8").expect(200).then((response) => {
            expect(response.body.success).toBeTruthy()
        }).catch(error => {
            console.error(error);
            throw error
        })
    })
})