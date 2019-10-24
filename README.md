# Affine Ciphers

This project is intended to create a minimal react app that encrypts a text and decrypts it back
using affine ciphers.
You must provide the **text** to be encrypted, a value **A** which must be co-prime with the number of
characters in the program's alphabet, and a value **B**.

## Alphabet

The text you provide will be automatically converted to lowercase and then be encrypted and decrypted back.
The alphabet consists of the letters `a -> z` and `\s`, in total there are 27 characters.

## Encrypting

To encrypt a character `x` we use the formula `E(x)=( A * x + B ) mod M` where `A` and `B` are provided 
to the program by the user and `M` represents the total number of characters in the alphabet.

## Decrypting

To decrypt a character `x` we use the formula `D(x)=A' * ( x - B) mod M` where `B` is provided 
to the program by the user, `A'` represents the modular multiplicative inverse of `A mod M` 
and `M` represents the total number of characters in the alphabet.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn fix`

Lints and prettifies the code. This command is recommended to be run before each commit to keep the 
code nicely aligned and check for problems with it.

### `yarn flow`

Checks for type error in the code. The program is written using `JSX` so it becomes easier to
comply with the `JSX` code conduit. 
