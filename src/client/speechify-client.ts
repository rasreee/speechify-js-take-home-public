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
                Proxy: '127.0.0.1:8050'
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
    }

    pause(): void {
    }

    getState(): ClientState {
        return ClientState.NOT_PLAYING
    }

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
        console.log('🆘 ERROR:', this.context, ': ', error)
    }

    logSuccess = (response: AxiosResponse) =>
        console.log('💚 SUCCESS:', this.context, ': ', response.config.url)

    connect = async (): Promise<boolean> => {
        const response = await this.client.get('/')
        if (response.status === 200) {
            this.logSuccess(response)
        }
        return response.status === 200
    }
}
