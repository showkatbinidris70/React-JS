import React from 'react'
import HeroImg from '../../images/right.png'
import {Container} from '../../styles/Common.styled'
import {HeroSection} from '../../styles/Home.styled'

export default function Hero() {
    return (<Container>
        <HeroSection>
            <div>
                <h2>Learn Styled Conponent from
                    <span> Code ABC</span>
                </h2>
            </div>
            <div>
                <img src={HeroImg}
                    alt="Hero img"/>
            </div>
        </HeroSection>
    </Container>)
}
