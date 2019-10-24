// @flow
import * as React from 'react';
import './section.scss';

type Props = {
    title: string,
    text: string,
};

const Section = ({ title, text }: Props): React.Node => {
    return (
        <div className="sectionContainer">
            <h2 className="sectionTitle">{title}</h2>
            <p className="sectionText">{text}</p>
        </div>
    );
};

export default Section;
