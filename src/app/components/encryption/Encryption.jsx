// @flow
import * as React from 'react';

import Section from '../section/Section';
import { alphabet, alphabetSize } from '../constants/Constants';

/**
 * Encrypts a single character.
 * @param char - the character to be encrypted.
 * @param a - the provided value for 'A'.
 * @param b - the provided value for 'B'.
 * @returns {string} - the encrypted character.
 */
function encryptChar(char: string, a: number, b: number): string {
    const code = char === ' ' ? alphabet._ : alphabet[char];
    const encryptedValue = (code * a + b) % alphabetSize;
    return Object.keys(alphabet)[encryptedValue] === '_'
        ? ' '
        : Object.keys(alphabet)[encryptedValue];
}

/**
 * Encrypts the provided text using 'A' and 'B'.
 * @param value - the text to be encrypted.
 * @param a - the provided value for 'A'.
 * @param b - the provided value for 'B'.
 * @returns {string} - the encrypted text.
 */
function encrypt(value: string, a: number, b: number): string {
    let result = '';
    for (let i = 0; i < value.length; i++) {
        result = result.concat(encryptChar(value[i].toLowerCase(), a, b));
    }
    return result;
}

/**
 * The props for the component
 */
type Props = {
    a: number,
    b: number,
    text: string,
};

/**
 * The component responsible for encrypting the text
 * and decrypting it back.
 * It also displays the results in the browser.
 */
const Encryption = ({ a, b, text }: Props): React.Node => {
    const encryptedText = encrypt(text, a, b);
    const encrypted = <Section title="Encrypted Text" text={encryptedText} />;
    const encryption = <>{encrypted}</>;

    return <>{a && b && text && encryption}</>;
};

export default Encryption;
