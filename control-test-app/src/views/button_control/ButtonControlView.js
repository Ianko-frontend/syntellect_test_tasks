import React from 'react';
import { observer } from 'mobx-react-lite';
import {LEFT_POSITION, RIGHT_POSITION} from "../../shared/constants";

const ButtonControlView = observer(({ viewModel, buttonModel, title }) => {
    const handleCallback = (element) => () => {
        element?.callback?.(viewModel.text)
    }
    return (
        <div>
            <h1>{title}</h1>
                {buttonModel
                    .filter((el) => el.position === LEFT_POSITION)
                    .map((el) => <button onClick={handleCallback(el)} key={el.id} >{el.name}</button>)
                }
                <input
                    type="text"
                    value={viewModel.text}
                    onChange={(e) => viewModel.changeText(e.target.value)}
                    placeholder="Button Control"
                />
                {buttonModel
                    .filter((el) => el.position === RIGHT_POSITION)
                    .map((el) => <button onClick={handleCallback(el)} key={el.id} >{el.name}</button>)
                }
        </div>
);
});

export default ButtonControlView;