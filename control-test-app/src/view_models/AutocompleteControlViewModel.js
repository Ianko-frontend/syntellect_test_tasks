class AutocompleteControlViewModel {
    constructor(store) {
        this.store = store;
    }

    loadCountries(countryName) {
        this.store.loadCountries(countryName)
    }

    get countries() {
        return this.store.countries;
    }

    get text() {
        return this.store.text;
    }

    changeText(text) {
        this.store.changeText(text);
    }

    get loading() {
        return this.store.loading;
    }
}

export default AutocompleteControlViewModel;