import React from "react";
import ButtonControlView from "./ButtonControlView";
import ButtonControlViewModel from "../../view_models/ButtonControlViewModel";
import ButtonControlStore from "../../stores/ButtonControlStore";
import {RIGHT_POSITION} from "../../shared/constants";

const ButtonControlFirstTestView = () => {
    const buttonControlViewModel = new ButtonControlViewModel(new ButtonControlStore());
    let modelButtons = [
        {
            id: 1,
            position: RIGHT_POSITION,
            name: 'Clear input',
            callback: function () {
                buttonControlViewModel.changeText("")
            }
        },
        {
            id: 2,
            position: RIGHT_POSITION,
            name: 'Print Hello World',
            callback: function () {
                buttonControlViewModel.changeText("Hello world")
            },
        }
    ]

    return <ButtonControlView viewModel={buttonControlViewModel} buttonModel={modelButtons} title={"Button Control, Test 1"}/>
};

export default ButtonControlFirstTestView;