import { Data, StreamChunk } from "../common";
import {
  SpeechifyClient,
  ClientState,
  SpeechifyClientEvent,
  ClientEventType,
  ClientEventListener
} from "../common/client";
import axios, { AxiosResponse } from "axios";

type Endpoints = {
  addToQueue: string;
  getNextChunk: string;
}

export default class SpeechifyClientImpl implements SpeechifyClient {
  context: string = 'SpeechifyClient'
  host: string
  endpoints: Endpoints
  constructor(host: string) {
    this.host = host;
    this.endpoints = {
      addToQueue: `${host}/api/addToQueue`,
      getNextChunk: `${host}/api/getNextChunk`,
    }
  }

  async addToQueue(data: Data): Promise<boolean> {
    const endpoint = this.endpoints.addToQueue
    try {
      const response = await axios.post(endpoint, data)
      this.logSuccess(response)
      return true;
    } catch (error) {
      this.handleError(error)
    }
    return false
  }

  play(): void {
    this.setState(ClientState.PLAYING)
  }

  pause(): void {
    window.alert("pause client method not implemented");
    throw new Error("method not implemented");
  }

  _state: ClientState = ClientState.NOT_PLAYING
  setState = (state: ClientState) => this._state = state;
  getState = (): ClientState => {
    return this._state;
  }

  subscriber: ClientEventListener | null = null;
  setSubscriber = (listener: ClientEventListener) => this.subscriber = listener;

  subscribe = (listener: ClientEventListener): () => void => {
    if (this.subscriber !== null) throw new Error('Already subscribed to: ' + this.subscriber);
    this.setSubscriber(listener)
    return () => this.subscriber;
  }

  handleError(error: any) {
    console.log('🆘 ', this.context, ": ", error)
    throw error
  }

  logSuccess = (response: AxiosResponse) =>
    console.log(`💚`, this.context, ": ", response)

}
