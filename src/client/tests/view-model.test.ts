import DataGenerator from '../generator';
import ViewModel from '../view-model'
import SpeechifyClient from '../speechify'

const SERVER_HOST = "http://localhost:8050";

const client = new SpeechifyClient(SERVER_HOST);
const generator = new DataGenerator();

test('initialize view model', () => {
    const viewModel = new ViewModel({ client, generator })
})