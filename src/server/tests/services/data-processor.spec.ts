import { expect } from 'chai'
import { DataProcessor } from '../../services'
describe("DataProcessor checks", () => {
    it("should parse JSON naively", () => {
        const data = JSON.stringify({
            from: '@anson',
            channel: '#chrome-extension',
            message:
                'Can you please check the latest PR? I just updated the API',
            timeSent: 1613731899778
        })
        const parsed = DataProcessor.parseJSON(data)
        expect(parsed).to.equal('from: @anson\nchannel: #chrome-extension\nmessage: Can you please check the latest PR? I just updated the API\ntimeSent: 1613731899778\n')
    })

    it("should parse JSON thoroughly", () => {
        const data = JSON.stringify({
            from: '@anson',
            channel: '#chrome-extension',
            message:
                'Can you please check the latest PR? I just updated the API',
            timeSent: 1613731899778
        })
        const parsed = DataProcessor.parseJSON(data)
        expect(parsed).to.equal('reading message sent by anson in channel chrome extension on Friday, February 19, 2021 5:51 AM. \ncan you please check the latest PR? I just updated the API. \nmessage ended.')
    })
})