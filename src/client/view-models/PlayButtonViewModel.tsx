import ViewModel from "../view-model";
import { action, makeObservable, observable } from "mobx";

export default class PlayButtonViewModel {
    parent: ViewModel;

    @observable
    isPlaying: boolean = false;

    constructor(parent: ViewModel) {
        makeObservable(this)
        this.parent = parent;
    }

    @action
    setIsPlaying(value: boolean) {
        return this.isPlaying = value;
    }

    handleClick() {
        this.setIsPlaying(!this.isPlaying)
        this.isPlaying ? this.parent.handlePlay() : this.parent.handlePause()
    }
}