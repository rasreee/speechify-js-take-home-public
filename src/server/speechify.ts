import { DataType, Data, StreamChunk } from "../common";
import SpeechifyServer from "./speechify";

export default class MySpeechify implements SpeechifyServer {
  queue: Array<Data> = []
  constructor() { }

  addToQueue(data: Data): boolean {
    this.queue.push(data);
    return true;
  }

  getNextChunk(): StreamChunk | undefined {
    console.error("getNextChunk not implemented");
    return undefined;
  }
}
