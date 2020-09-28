import React from 'react';

import { About } from './../About/About';
import { Skills } from './../Skills/Skills';
import { Projects } from './../Projects/Projects';

import './section-container.css';

export const SectionContainer = (props) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">About Me</h1>
                <p className="main-quote">Some Random Quote</p>
            </div>
           
        </div>
    )
}