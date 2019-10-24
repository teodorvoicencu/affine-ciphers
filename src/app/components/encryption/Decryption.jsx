// @flow
import * as React from 'react';

import Section from '../section/Section';

// The ASCII value for 'a'.
const aValue = 97;

// Numbers of characters in the program alphabet.
const alphabet = 27;

//  The "supposed" ASCII value for space.
const spaceValue = 123;

// Modulo in javascript returns weird stuff if the value is negative.
// This is a known "bug" so we have to define an alternative to it.
function modulo(x: number, n: number) {
    return ((x % n) + n) % n;
}

/**
 * Compute the mod inverse of value using extended euclidean algorithm.
 */
function modInverse(value: number): number {
    // I assign this values to comply with eslint check
    let a = value;
    let m = alphabet;

    const m0 = m;
    let y = 0;
    let x = 1;

    if (m === 1) return 0;

    while (a > 1) {
        // q is quotient
        const q = Math.floor(a / m);

        let t = m;

        // m is remainder now, process
        // same as Euclid's algorithm
        m = a % m;
        a = t;
        t = y;

        // Update x and y
        y = x - q * y;
        x = t;
    }

    // Make x positive
    if (x < 0) x += m0;

    return x;
}

/**
 * For a given char, decrypts and returns the char.
 * @param char - the char to be decrypted.
 * @param aInverse - mod inverse of the given value 'A'.
 * @param b - the value provided for 'B'.
 * @returns {string} - the decrypted character.
 */
function decryptChar(char: string, aInverse: number, b: number): string {
    let code = char === ' ' ? spaceValue : char.charCodeAt(0);
    code = aInverse * (code - b - aValue);
    const decryptedValue = modulo(code, alphabet) + aValue;
    return decryptedValue === spaceValue ? ' ' : String.fromCharCode(decryptedValue);
}

/**
 * Decrypts an encrypted text.
 * @param value - the text to be decrypted.
 * @param a - the provided value for 'A'.
 * @param b - the provided value for 'B'.
 * @returns {string} - the decrypted text.
 */
function decrypt(value: string, a: number, b: number) {
    let result = '';
    const inverse = modInverse(a);
    for (let i = 0; i < value.length; i++) {
        result = result.concat(decryptChar(value[i].toLowerCase(), inverse, b));
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

const Decryption = ({ a, b, text }: Props): React.Node => {
    const decrypted = <Section title="Decrypted Text" text={decrypt(text, a, b)} />;
    return <>{decrypted}</>;
};

export default Decryption;
