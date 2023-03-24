import React from 'react'
import Logo from '../../images/codeabc.png'
import {Container} from '../../styles/Common.styled'
import {Navigation} from '../../styles/Navbar.styled'

export default function Navbar() {
    return (<Container>
        <Navigation>
            <div>
                <img src={Logo}
                    alt="This is logo"/>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Teams</li>
                </ul>
            </div>
        </Navigation>
    </Container>)
}
