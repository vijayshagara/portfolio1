import React from 'react'
import { Element } from 'react-scroll'
import "./ExperienceContainer.css"
import Experience from '../ExperienceBox/Experience'

const ExperienceContainer = () => {
    return (
        <Element className='experiencecontainer' id='exp'>
            <h1>Experience</h1>
            <div className='experiencecontainer__info'>
<Experience number="0" title="clients"/>
<Experience number="3+" title="projects" style={{backgroundColor:"#f64c08" }}/>
<Experience number="Willing to learn" title="Fresher" />
<Experience number="+5" title="clients"/>
            </div>
        </Element>

    )
}

export default ExperienceContainer