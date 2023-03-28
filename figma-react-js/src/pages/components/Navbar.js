import React from 'react'
import {ContainerSection} from '../../styles/Common.styled'
import {NavbarSection} from '../../styles/Navbar.styled'

export default function Navbar() {
    return (
        <ContainerSection>
            <nav>
                <NavbarSection>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Trade Infomation</li>
                        <li>EXport - Import</li>
                        <li>Documents</li>
                        <li>News</li>
                        <li>Contact us</li>
                        <li>
                            <i class="fa fa-search"></i>
                        </li>
                    </ul>
                </NavbarSection>
            </nav>
        </ContainerSection>
    )
}
