import React from 'react'
import {ContainerSection, GridFour} from '../../styles/Common.styled'
import {FeatureSection, GridFourCard} from '../../styles/Navbar.styled'
import PlantImg from '../../images/DSC_0802 1 (1).png';

const Data = [
    {
        id: 1,
        name: "Plant & Plant Products",
        img: PlantImg,
        bgColor: "#000",
        color: "#FFF"
    }, {
        id: 2,
        name: "Processed Products",
        img: PlantImg,
        bgColor: "#000",
        color: "#FFF"
    }, {
        id: 3,
        name: "Livestock Products",
        img: PlantImg,
        bgColor: "#000",
        color: "#FFF"
    }, {
        id: 4,
        name: "Fish & Fish Products",
        img: PlantImg,
        bgColor: "#000",
        color: "#FFF"
    }
]

export default function Feature() {
    return (
        <FeatureSection>
            <ContainerSection>
                <GridFour gap="2rem">
                    {
                    Data.map(feature => (
                        <GridFourCard>
                            <a href='http://localhost:3000/plant-products'><img src={
                                        feature.img
                                    }
                                    alt="fiture"/>
                            </a>
                            <div>
                                <h2> {
                                    feature.name
                                } </h2>
                            </div>
                        </GridFourCard>
                    ))
                } </GridFour>
            </ContainerSection>
        </FeatureSection>
    )
}
