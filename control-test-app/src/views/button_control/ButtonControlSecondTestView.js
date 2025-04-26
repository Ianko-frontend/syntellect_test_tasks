import React from "react";
import ButtonControlView from "./ButtonControlView";
import ButtonControlViewModel from "../../view_models/ButtonControlViewModel";
import ButtonControlStore from "../../stores/ButtonControlStore";
import {LEFT_POSITION, RIGHT_POSITION} from "../../shared/constants";

const ButtonControlSecondTestView = () => {
    const buttonControlViewModel = new ButtonControlViewModel(new ButtonControlStore());
    let modelButtons = [
        {
            id: 1,
            position: RIGHT_POSITION,
            name: 'Alert with text',
            callback: function (text) {
                if (!text) {
                    alert("Text is empty. Please input something")
                } else {
                    alert(text);
                }
            }
        },
        {
            id: 2,
            position: LEFT_POSITION,
            name: 'Number validation',
            callback: function (text) {
                if (!!text && !Number.isNaN(Number(text))) {
                    alert(text);
                }
            },
        }
    ]

    return <ButtonControlView viewModel={buttonControlViewModel} buttonModel={modelButtons} title={"Button Control, Test 2"}/>
};

export default ButtonControlSecondTestView;