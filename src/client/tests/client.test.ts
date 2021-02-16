import SpeechifyClient from '../speechify'
const SERVER_HOST = "http://localhost:8050";
test('initialize SpeechifyClient', () => {
    const client = new SpeechifyClient(SERVER_HOST)
})