import React from "react";
import ButtonControlFirstTestView from "./button_control/ButtonControlFirstTestView";
import ButtonControlSecondTestView from "./button_control/ButtonControlSecondTestView";
import AutocompleteControlFirstTestView from "./autocomplete_control/AutocompleteControlFirstTestView";
import AutocompleteControlSecondTestView from "./autocomplete_control/AutocompleteControlSecondTestView";

const App = () => {
    return (
        <>
            <ButtonControlFirstTestView/>
            <ButtonControlSecondTestView/>
            <AutocompleteControlFirstTestView/>
            <AutocompleteControlSecondTestView/>
        </>
    )
};

export default App;