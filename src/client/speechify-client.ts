import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { Data, StreamChunk } from '../common'
import {
    SpeechifyClient,
    ClientState,
    SpeechifyClientEvent,
    ClientEventType,
    ClientEventListener,
} from '../common/client'

type Endpoints = {
    addToQueue: string
    getNextChunk: string
}

export default class SpeechifyClientImpl implements SpeechifyClient {
    context: string = 'SpeechifyClient'

    endpoints: Endpoints

    client: AxiosInstance

    constructor(host: string) {
        this.endpoints = {
            addToQueue: '/api/addToQueue',
            getNextChunk: '/api/getNextChunk',
        }
        this.client = axios.create({
            baseURL: host,
            timeout: 1000,
            headers: {
                Accept: 'application/json',
            },
        })
    }

    async addToQueue(data: Data): Promise<boolean> {
        const endpoint = this.endpoints.addToQueue
        try {
            const response = await this.client.post<{ success: boolean }>(
                endpoint,
                data
            )
            if (response.data.success) {
                this.logSuccess(response)
            }
            return response.data.success
        } catch (error) {
            this.logError(error)
        }
        return false
    }

    play(): void {
        this.setState(ClientState.PLAYING)
    }

    pause(): void {
        window.alert('pause client method not implemented')
        throw new Error('method not implemented')
    }

    _state: ClientState = ClientState.NOT_PLAYING

    setState = (state: ClientState) => (this._state = state)

    getState = (): ClientState => this._state

    subscriber: ClientEventListener | null = null

    setSubscriber = (listener: ClientEventListener) =>
        (this.subscriber = listener)

    subscribe = (listener: ClientEventListener): (() => void) => {
        if (this.subscriber !== null)
            throw new Error(`Already subscribed to: ${this.subscriber}`)
        this.setSubscriber(listener)
        return () => this.subscriber
    }

    logError(error: AxiosError) {
        console.log('🆘 ERROR:', this.context, ': ', error.message)
    }

    logSuccess = (response: AxiosResponse) =>
        console.log('💚 SUCCESS:', this.context, ': ', response)

    connect = async (): Promise<boolean> => {
        const response = await this.client.get('/')
        if (response.status === 200) {
            this.logSuccess(response)
        }
        return response.status === 200
    }
}
