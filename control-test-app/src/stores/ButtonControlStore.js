import { makeObservable, observable, action } from 'mobx';

class ButtonControlStore {
    text = '';

    constructor() {
        makeObservable(this, {
            text: observable,
            changeText: action,
        });
    }

    changeText(text) {
        this.text = text;
    }
}

export default ButtonControlStore;