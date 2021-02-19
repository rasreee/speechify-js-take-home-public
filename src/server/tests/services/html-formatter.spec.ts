import { expect } from 'chai'
import { HTMLFormatter } from '../../services'
describe("HTMLFormatter checks", () => {

    it("should parse HTML naively", () => {
        const data = `<html>
            <body>
                <div id="speechify-heading">
                <h1>Welcome to Speechify</h1>
                <div id="speechify-paragraphs">
                    <p>Speechify helps you listen to any readable content on the web.</p>
                    <p>The product works on web articles, PDFs and Google Docs.</p>
                </div>
            </body>
        </html>`
        const parsed = HTMLFormatter.format(data)
    })

})