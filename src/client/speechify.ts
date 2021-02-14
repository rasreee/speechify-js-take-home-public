import { Data, StreamChunk } from "@common";
import {
  SpeechifyClient,
  ClientState,
  SpeechifyClientEvent,
  ClientEventType,
} from "@common/client";
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
    window.alert("play client method not implemented");
    throw new Error("method not implemented");
  }

  pause(): void {
    window.alert("pause client method not implemented");
    throw new Error("method not implemented");
  }

  getState(): ClientState {
    return ClientState.NOT_PLAYING;
  }

  subscribe(listener: (event: SpeechifyClientEvent) => void): () => void {
    window.alert("subscribe client method not implemented");
    return () => { };
  }

  handleError(error: any) {
    console.log('🆘 ', this.context, ": ", error)
    throw error
  }

  logSuccess = (response: AxiosResponse) =>
    console.log(`💚`, this.context, ": ", response)

}
