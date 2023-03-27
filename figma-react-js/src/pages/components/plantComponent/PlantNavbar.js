import React from 'react'
import {ContainerSection} from '../../../styles/plantStyle/PlantCommon.styled'
import {NavbarSection} from '../../../styles/plantStyle/PlantNavbar.styled'

export default function Navbar() {
    return (

        <nav>
            <NavbarSection>
                <ContainerSection>
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
                </ContainerSection>
            </NavbarSection>
        </nav>
    )
}
