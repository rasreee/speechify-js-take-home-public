import { DataType } from "../common";
import SpeechifyClient from "./speechify";
import { action, makeObservable, observable } from "mobx";

export type ViewModelProps = {
    client: SpeechifyClient;
    generator: any;
}

export default class ViewModel {
    client: SpeechifyClient;
    generator: any;
    constructor({ client, generator }: ViewModelProps) {
        this.client = client;
        this.generator = generator;
        makeObservable(this)
    }

    @observable
    isPlaying = false;

    @action
    setIsPlaying = (val: boolean) => this.isPlaying = val;

    @observable
    error = '';

    @action
    setError = (val: string) => this.error = val;

    @observable
    isHTMLLoading = false;

    @action
    setHTMLLoading = (val: boolean) => this.isHTMLLoading = val;

    @observable
    isJSONLoading = false;

    @action
    setJSONLoading = (val: boolean) => this.isJSONLoading = val;

    @observable
    isTXTLoading = false;

    @action
    setTXTLoading = (val: boolean) => this.isTXTLoading = val;


    handlePlayClick = () => {
        this.isPlaying ? this.client.pause() : this.client.play()
        this.setIsPlaying(!this.isPlaying);
    }

    setLoading = (type: DataType, val: boolean) => {
        switch (type) {
            case DataType.HTML: return this.setHTMLLoading(val)
            case DataType.JSON: return this.setJSONLoading(val)
            case DataType.TXT: return this.setTXTLoading(val)
        }
    }

    handleAddToQueueClick = async (type: DataType) => {
        this.setLoading(type, true);
        const data = this.generator.getData(type);
        try {
            await this.client.addToQueue(data);
        } catch (error) {
            this.setError(`Oops! Failed to add ${type} to the queue\${error}`);
        } finally {
            // simulate loading
            setTimeout(() => this.setLoading(type, false), 500);
        }
    }
}