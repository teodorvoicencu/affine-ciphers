// @flow
import * as React from 'react';
import './button.scss';

type Props = {
    onClick: () => void,
    text: string,
};

const Button = ({ onClick, text }: Props): React.Node => {
    return (
        <button type="button" className="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
