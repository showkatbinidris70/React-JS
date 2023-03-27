import React from 'react'
import {ContainerSection} from '../../styles/Common.styled'
import {HeaderSection} from '../../styles/Navbar.styled'

export default function Header() {
    return (
        <div>
            <ContainerSection>
                <HeaderSection>
                    <div>
                        <h2>Agro Trade Section</h2>
                    </div>
                    <div>
                        <ul>
                            <li>EN</li>
                            <li>BN</li>
                        </ul>
                    </div>
                </HeaderSection>
            </ContainerSection>
        </div>
    )
}
