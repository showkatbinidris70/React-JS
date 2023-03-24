import React from 'react'
import {Container, GridThree} from '../../styles/Common.styled'
import {FeatureCard, FeaturesSection} from '../../styles/Home.styled'
import bootstrap from '../../images/bootstrap.png'
import materialUI from '../../images/materialUI.png'
import tailwind from '../../images/tailwind.png'


const data = [
    {
        id: 1,
        name: "Bootstrap",
        img: bootstrap,
        bgColor: "rgba(109, 67, 161, 0.3)",
        color: "#6D43A1"
    }, {
        id: 2,
        name: "MaterialUI",
        img: materialUI,
        bgColor: "rgba(61, 128, 247, 0.3)",
        color: "##3D80F7"
    }, {
        id: 3,
        name: "Tailwind",
        img: tailwind,
        bgColor: "rgba(66, 166, 178, 0.3)",
        color: "#42A6B2"
    }
]

export default function Features() {
    return (<FeaturesSection>
        <Container>
            <h2>Others well known styling framework
            </h2>
            <GridThree gap="5rem"> {
                data.map(feture => (<FeatureCard bgColor={
                        feture.bgColor
                    }
                    color={
                        feture.color
                }>
                    <img src={
                            feture.img
                        }
                        alt="bootstrap"/>
                    <div className='caption'>
                        <p> {
                            feture.name
                        }</p>
                    </div>
                </FeatureCard>))
            } </GridThree>
        </Container>
    </FeaturesSection>)
}
