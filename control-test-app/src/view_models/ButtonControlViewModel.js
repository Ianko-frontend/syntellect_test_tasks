class ButtonControlViewModel {
    constructor(store) {
        this.store = store;
    }

    get text() {
        return this.store.text;
    }

    changeText(text) {
        this.store.changeText(text);
    }
}

export default ButtonControlViewModel;