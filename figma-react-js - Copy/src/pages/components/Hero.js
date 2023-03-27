import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Feature from './Feature';
import {CarouselSlider} from '../../styles/Navbar.styled';


export default function Hero() {
    return (<div>
        <CarouselSlider>
            <Header/>
            <Navbar/>
            <Feature/>
        </CarouselSlider>
    </div>)
}
