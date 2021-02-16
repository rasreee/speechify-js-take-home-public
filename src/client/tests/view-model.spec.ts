import DataGenerator from '../generator'
import ViewModel from '../view-model'
import SpeechifyClient from '../speechify-client'
import { expect } from 'chai';
import { DataType } from '@common';
import { isObservable, isObservableProp } from 'mobx';

const SERVER_HOST = 'http://localhost:8050'

const client = new SpeechifyClient(SERVER_HOST)
const generator = new DataGenerator()
describe('ViewModel checks', () => {
    it('should render w/o error', () => {
        const viewModel = new ViewModel({ client, generator })
        expect(isObservableProp(viewModel, 'isPlaying')).to.equal(true);
    })

    it('should change isPlaying observable', () => {
        const viewModel = new ViewModel({ client, generator })
        viewModel.handlePlay()
        expect(viewModel.isPlaying).to.equal(true)
        viewModel.handlePause()
        expect(viewModel.isPlaying).to.equal(false)
    })

    it('should change isJSONLoading observable', async () => {
        const viewModel = new ViewModel({ client, generator })
        const promise = viewModel.handleAddToQueueClick(DataType.JSON)
        expect(viewModel.isJSONLoading).to.equal(true)
        expect(viewModel.isHTMLLoading).to.equal(false)
        expect(viewModel.isTXTLoading).to.equal(false)
        await promise.then(() => {
            expect(viewModel.isJSONLoading).to.equal(false);
            expect(viewModel.isHTMLLoading).to.equal(false)
            expect(viewModel.isTXTLoading).to.equal(false)
        })
    })
})
