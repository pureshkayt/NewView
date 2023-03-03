import {makeAutoObservable} from "mobx";

export default class SliderStore {
    constructor() {
        this._sliders = []
        makeAutoObservable(this)
    }

    setSlider(sliders) {
        this._sliders = sliders
    }
    get sliders() {
        return this._sliders
    }

}