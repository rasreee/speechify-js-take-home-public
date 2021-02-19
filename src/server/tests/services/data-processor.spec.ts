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

    it("should parse JSON contextually", () => {
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

    it("should parse TXT naively", () => {
        const data = 'AMZN\t3232.58\tUSD\nFB\t272.14\tUSD\nAAPL\t142.06\tUSD\nNFLX\t523.28\tUSD'
        const parsed = DataProcessor.parseTXT(data)
        expect(parsed).to.equal('the price of amazon is $3232.58 . the price of facebook is $272.14 . the price of apple is $142.06 . the price of netflix is $523.28')
    })

})