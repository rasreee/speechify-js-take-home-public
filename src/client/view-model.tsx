
import { action, makeObservable, observable } from 'mobx'
import { DataType } from '../common'
import SpeechifyClient from './speechify-client'

export type ViewModelProps = {
    client: SpeechifyClient
    generator: any
}

export default class ViewModel {
    client: SpeechifyClient
    generator: any

    @observable
    isPlaying = false

    @observable
    error = ''

    @observable
    isJSONLoading = false


    @observable
    isHTMLLoading = false

    @observable
    isTXTLoading = false

    constructor({ client, generator }: ViewModelProps) {
        this.client = client
        this.generator = generator
        makeObservable(this)
    }

    @action
    setIsPlaying = (val: boolean) => (this.isPlaying = val)

    @action
    setError = (val: string) => (this.error = val)

    @action
    setHTMLLoading = (val: boolean) => (this.isHTMLLoading = val)

    @action
    setJSONLoading = (val: boolean) => (this.isJSONLoading = val)

    @action
    setTXTLoading = (val: boolean) => (this.isTXTLoading = val)

    handlePlay = () => this.client.play()
    handlePause = () => this.client.pause()

    setLoading = (type: DataType, val: boolean) => {
        switch (type) {
            case DataType.HTML:
                return this.setHTMLLoading(val)
            case DataType.JSON:
                return this.setJSONLoading(val)
            case DataType.TXT:
                return this.setTXTLoading(val)
        }
    }

    handleAddToQueueClick = async (type: DataType): Promise<void> => {
        this.setLoading(type, true)
        const data = this.generator.getData(type)
        try {
            await this.client.addToQueue(data)
        } catch (error) {
            this.setError(`Oops! Failed to add ${type} to the queue\n${error}`)
        } finally {
            this.setLoading(type, false)
        }
    }
}
