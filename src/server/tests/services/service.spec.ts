import { expect } from "chai";
import { Data, DataType } from '../../../common';
import { createRedisClient } from '../../clients'

import { SpeechifyService } from '../../services'

describe("Speechify service checks", function () {
    it("adds to queue without error", (done) => {
        const data: Data = {
            type: DataType.HTML,
            source: "https://speechify.com/welcome",
            data: `<html>
            <body>
                <div id="speechify-heading">
                <h1>Welcome to Speechify</h1>
                <div id="speechify-paragraphs">
                    <p>Speechify helps you listen to any readable content on the web.</p>
                    <p>The product works on web articles, PDFs and Google Docs.</p>
                </div>
            </body>
        </html>`,
        }

        const client = createRedisClient()
        const service = new SpeechifyService(client)
        service.addToQueue(data).then(async (result) => {
            expect(result).true;

            done()
        })
    });
});
