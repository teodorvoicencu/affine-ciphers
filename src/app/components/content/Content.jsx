// @flow
import * as React from 'react';

import Textarea from '../textarea/Textarea';
import Input from '../input/Input';
import './content.scss';
import Encryption from '../encryption/Encryption';

/**
 * Compute th greatest common divider of two numbers.
 * It is used to see if a is co-prime with the number
 * of characters in the program alphabet.
 * Alphabet = [a, b, ... , z, 'space'] - total 27 characters
 */
function gcd(a: number, b: number): number {
    if (a !== '' && b !== '') {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }
    return 0;
}

/**
 * Main container of the web page.
 */
const Content = (): React.Node => {
    const [text, setText] = React.useState('');
    const [a, setA] = React.useState('');
    const [b, setB] = React.useState('');

    return (
        <div className="container">
            <Textarea
                value={text}
                setValue={setText}
                placeHolder={'Insert the text to be encrypted ...'}
            />
            {a !== '' && gcd(a, 27) !== 1 && (
                <p className="warning">{`${a} is not co-prime with 27`}</p>
            )}
            <div className="variables">
                <Input
                    text={'Insert a value for A ...'}
                    type={'number'}
                    value={a}
                    setValue={setA}
                />
                <Input
                    text={'Insert a value for B ...'}
                    type={'number'}
                    value={b}
                    setValue={setB}
                />
            </div>
            {gcd(a, 27) === 1 && b !== '' && <Encryption a={Number(a)} b={Number(b)} text={text} />}
        </div>
    );
};

export default Content;
