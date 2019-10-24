// @flow
import * as React from 'react';
import './label.scss';

type Props = {
    text: string,
};

const Label = (props: Props): React.Node => {
    return <h3 className="label">{props.text}</h3>;
};

export default Label;
