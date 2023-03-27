import React from 'react'
import {SubContentSection, SubSection} from '../../styles/SubContent.styled'

export default function SubContent() {
    return (<SubContentSection>
        <SubSection>
            <button>Export</button>
            <button>Import</button>
        </SubSection>
    </SubContentSection>)
}
