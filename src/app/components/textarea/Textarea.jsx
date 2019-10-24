// @flow
import * as React from 'react';
import './textarea.scss';

type Props = {
    placeHolder: string,
    value: any,
    setValue: (value: any) => void,
};

const Textarea = (props: Props): React.Node => {
    return (
        <div className="textAreaContainer">
            <textarea
                className="textArea"
                placeholder={props.placeHolder}
                value={props.value}
                onChange={e => props.setValue(e.target.value)}
            />
        </div>
    );
};

export default Textarea;
