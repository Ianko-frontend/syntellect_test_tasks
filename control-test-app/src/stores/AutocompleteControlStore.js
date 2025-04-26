import {action, makeObservable, observable} from "mobx";
import {getCountryByName} from "../api/country";

class AutocompleteControlStore {
    countries = {};
    text = '';
    loading = false;
    limit = 10;

    constructor(limit) {
        makeObservable(this, {
            countries: observable,
            loadCountries: action,
            text: observable,
            changeText: action,
            loading: observable,
        })
        this.limit = limit;
    }

    async loadCountries(name) {
        this.loading = true;
        const countries = await getCountryByName(name);
        this.countries = Object.values(
            // проверка на дубликаты
            countries.reduce((acc, curr) => {
                if (!acc[curr.name]) {
                    acc[curr.name] = {
                        name: curr.name,
                        fullName: curr.name,
                        flag: curr.flag
                    }
                }
                return acc
            }, {})
        ).slice(0, this.limit)
        this.loading = false;
    }

    changeText(text) {
        this.text = text;
    }
}

export default AutocompleteControlStore;