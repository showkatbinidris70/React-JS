import React from 'react'
import {PlantSubContentSection, SubSection} from '../../../styles/plantStyle/PlantSubContent.styled'

export default function PlantSubContent() {
    return (
        <PlantSubContentSection>
            <SubSection>
                <div className='export'>
                    <h1>Export</h1>
                    <p>Dynamically promote economically sound experiences whereas Proactively enable process-centric services rather</p>
                    <button className='btn-export'>Explore More</button>
                </div>
                <div className='import'>
                    <h1>Import</h1>
                    <p>Dynamically promote economically sound experiences whereas Proactively enable process-centric services rather</p>
                    <button className='btn-import'>Explore More</button>
                </div>
            </SubSection>
        </PlantSubContentSection>
    )
}
