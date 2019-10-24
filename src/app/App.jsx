// @flow

import * as React from 'react';

import './styles/app.scss';
import Content from './components/content/Content';

function App() {
    return (
        <div className="app">
            <div className="appContent">
                <h2 className="appTitle"> Welcome to Affine Ciphers </h2>
                <Content />
            </div>
        </div>
    );
}

export default App;
