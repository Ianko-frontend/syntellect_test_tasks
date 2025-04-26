import React from "react";
import AutocompleteControlView from "./AutocompleteControlView";
import AutocompleteControlViewModel from "../../view_models/AutocompleteControlViewModel";
import AutocompleteControlStore from "../../stores/AutocompleteControlStore";

const AutocompleteControlFirstTestView = () => {
    const buttonControlViewModel = new AutocompleteControlViewModel(new AutocompleteControlStore(3));

    return <AutocompleteControlView viewModel={buttonControlViewModel} title={"Autocomplete Control, Test 1"}/>
};

export default AutocompleteControlFirstTestView;