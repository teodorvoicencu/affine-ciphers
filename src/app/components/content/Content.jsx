// @flow
import * as React from 'react';

import Textarea from '../textarea/Textarea';
import Input from '../input/Input';
import './content.scss';
import Encryption from '../encryption/Encryption';
import Decryption from '../encryption/Decryption';

/**
 * Compute th greatest common divider of two numbers.
 * It is used to see if a is co-prime with the number
 * of characters in the program alphabet.
 * Alphabet = [a, b, ... , z, 'space'] - total 27 characters
 */
function gcd(a: number, m: number): number {
    if (m === 0) {
        return a;
    }
    return gcd(m, a % m);
}

/**
 * Main container of the web page.
 */
const Content = (): React.Node => {
    const [encryptText, setEncryptText] = React.useState('');
    const [decryptText, setDecryptText] = React.useState('');
    const [a, setA] = React.useState('');
    const [b, setB] = React.useState('');

    return (
        <div className="container">
            <Textarea
                value={encryptText}
                setValue={setEncryptText}
                placeHolder={'Insert the text to be encrypted ...'}
            />
            <Textarea
                value={decryptText}
                setValue={setDecryptText}
                placeHolder={'Insert the text to be decrypted ...'}
            />
            {a !== '' && gcd(Number(a), 27) !== 1 && (
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
            {gcd(Number(a), 27) === 1 && b !== '' && encryptText !== '' && (
                <Encryption a={Number(a)} b={Number(b)} text={encryptText} />
            )}
            {gcd(Number(a), 27) === 1 && b !== '' && decryptText !== '' && (
                <Decryption a={Number(a)} b={Number(b)} text={decryptText} />
            )}
        </div>
    );
};

export default Content;
