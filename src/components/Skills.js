import React from 'react';
import '../styles/Skills.css';
import skills from  './Data';

function Skills() {
    return (
        <div id='Skills'>
            <div className='titleSkills'>
            <div>
                <p>Skills</p>
            </div>
            </div>
            <div className='skill'>
                {skills.map((skill,index) => (
                    <div><button key={index}>{skill}</button></div>
                ))}
            </div>
        </div>
    );
}

export default Skills;