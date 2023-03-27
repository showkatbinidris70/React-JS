import React from 'react'
import {ContainerSection} from '../../styles/Common.styled'
import {SubContentSection} from '../../styles/SubContent.styled'

export default function SubContent() {
    return (<SubContentSection>
        <ContainerSection>
            <SubContent>
                <div>Export</div>
                <div>Import</div>
            </SubContent>
        </ContainerSection>
    </SubContentSection>)
}
