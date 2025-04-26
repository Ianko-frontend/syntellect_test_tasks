import React, {useCallback, useState} from 'react';
import { observer } from 'mobx-react-lite';
import './styles.css';
import {useDebounce} from "../../hooks/debounce";

const AutocompleteControlView = observer(({ viewModel, title }) => {
    const [openDropDown, setOpenDropDown] = useState(false)
    const onLoadData = useDebounce(viewModel.loadCountries.bind(viewModel, [viewModel.text]));
    const onChangeText = useCallback((text) => {
        setOpenDropDown(!!viewModel.text)
        viewModel.changeText(text);
        !!text && onLoadData();
    }, [viewModel.text, viewModel.changeText])

    const onClickCountry = useCallback((country) => {
        viewModel.changeText(country);
        setOpenDropDown(false);
    }, [viewModel.text, viewModel.changeText])

    return (
        <>
            <h1>{title}</h1>
            <div className="dropdown">
                <input type="text" placeholder="Search country..."
                       value={viewModel.text}
                       onChange={(e) => onChangeText(e.target.value)}
                />
                <div className="dropdown-content" style={openDropDown ? {display: 'block'} : {display: "none"}}>
                    {
                        viewModel.loading
                            ? <div>Loading...</div>
                            : (viewModel.countries.length
                                    ? viewModel.countries?.map((country) => (
                                        <div className="dropdown-element"
                                             onClick={() => onClickCountry(country.fullName)}
                                             key={country.name}>
                                            <div>
                                                <div>Name: {country.fullName},</div>
                                                <div>Full Name: {country.fullName}</div>
                                            </div>
                                            <img className="img-flag" src={country.flag}/>
                                        </div>
                                    ))
                                    : <div>Nothing found</div>
                            )
                    }
                </div>
            </div>
        </>
    );
});

export default AutocompleteControlView;