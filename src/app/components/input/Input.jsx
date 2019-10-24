// @flow
import * as React from 'react';

import './input.scss';

type Props = {
    text: string,
    type: string,
    value: any,
    setValue: (value: any) => void,
};

const Input = (props: Props): React.Node => {
    return (
        <div className="inputContainer">
            <input
                className="input"
                type={props.type}
                placeholder={props.text}
                value={props.value}
                onChange={e => props.setValue(e.target.value)}
            />
        </div>
    );
};

export default Input;
