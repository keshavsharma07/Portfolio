import React from 'react';

import './sidenav.css';

export const SideNav =({handleSectionClick}) =>{
    return(
            <div className="sidenav">
                <img
                    src="https://avatars2.githubusercontent.com/u/57822876?s=400&u=db21ef929310df37c117571c259b63be491234d0&v=4"
                    className="avatar"
                    alt="avatar"/> 

                    <h2 className="main-name">Keshav Sharma</h2>
                    <p className="subtitle">Learning Something New Everyday</p>
                    <div className="sections-list">
                <p className="section-list-element" onClick={()=>handleSectionClick("about")} >About Me</p>
                <p className="section-list-element" onClick={()=>handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={()=>handleSectionClick("projects")}>Projects</p>
            </div>

            </div>
    );
}
 