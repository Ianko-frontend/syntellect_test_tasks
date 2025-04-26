import React from "react";
import AutocompleteControlView from "./AutocompleteControlView";
import AutocompleteControlViewModel from "../../view_models/AutocompleteControlViewModel";
import AutocompleteControlStore from "../../stores/AutocompleteControlStore";

const AutocompleteControlSecondTestView = () => {
    const buttonControlViewModel = new AutocompleteControlViewModel(new AutocompleteControlStore(10));

    return <AutocompleteControlView viewModel={buttonControlViewModel} title={"Autocomplete Control, Test 2"}/>
};

export default AutocompleteControlSecondTestView;