import React from 'react'
import {ContainerSection} from '../../../styles/plantStyle/PlantCommon.styled'
import {NavbarSection} from '../../../styles/liveStockStyle/LiveStockNavbar.styled'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
export default function Navbar() {
    return (

        <nav>
            <NavbarSection>
                <ContainerSection>
                    <ul>
                        <li>
                            <Link style={
                                    {
                                        "color": "#FFF",
                                        "text-decoration": "none"
                                    }
                                }
                                to="/">Home</Link>
                        </li>
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
