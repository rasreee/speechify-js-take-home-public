import ViewModel from "../view-model";
import { action, makeObservable, observable } from "mobx";
import { DataType } from "@common";

export default class AddToQueueButtonViewModel {
    parent: ViewModel;
    type: DataType;

    @observable
    isLoading: boolean = false;

    constructor(parent: ViewModel, type: DataType) {
        makeObservable(this)
        this.parent = parent;
        this.type = type;
    }

    @action
    setIsLoading(value: boolean) {
        return this.isLoading = value;
    }

    async handleClick() {
        this.setIsLoading(true)
        await this.parent.handleAddToQueueClick(this.type);
        this.setIsLoading(false);
    }
}