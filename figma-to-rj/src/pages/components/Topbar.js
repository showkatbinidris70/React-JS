import React from 'react'
import {TopSection} from '../../styles/Home.styled'
import Hero from './Hero'
import Navbar from './Navbar'

export default function Topbar() {
    return (<TopSection>
        <Navbar/>
        <Hero/>
    </TopSection>)
}
