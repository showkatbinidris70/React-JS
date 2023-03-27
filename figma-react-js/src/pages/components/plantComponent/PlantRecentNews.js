import React from 'react'
import {ContainerSection, GridThree} from '../../../styles/plantStyle/PlantCommon.styled'
import PlantImg from '../../../images/DSC_0802 1 (1).png';
import {GridThreeCard} from '../../../styles/plantStyle/PlantNavbar.styled';
const Data = [
    {
        id: 1,
        date: "20",
        mnyr: "March 2022",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        img: PlantImg,
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        bgColor: "#000",
        color: "#FFF"
    }, {
        id: 2,
        date: "20",
        mnyr: "March 2022",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: PlantImg,
        bgColor: "#000",
        color: "#FFF"
    }, {
        id: 3,
        date: "20",
        mnyr: "March 2022",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: PlantImg,
        bgColor: "#000",
        color: "#FFF"
    }
]
export default function PlantRecentNews() {
    return (
        <div>
            <ContainerSection>
                <h2 style={
                    {
                        "font-size": "4rem",
                        "text-align": "center",
                        "color": "#40B554",
                        "margin-bottom": "1rem"
                    }
                }>We Are Here To Share Story
                    <br/>From Latest News</h2>
                <GridThree> {
                    Data.map(feature => (
                        <GridThreeCard>
                            <img src={
                                    feature.img
                                }
                                alt="fiture"/>
                            <div>
                                <h1>{
                                    feature.date
                                }</h1>
                                <h3>{
                                    feature.mnyr
                                }</h3>
                                <h2> {
                                    feature.title
                                } </h2>
                                <p>{
                                    feature.text
                                }</p>
                            </div>
                        </GridThreeCard>
                    ))
                } </GridThree>
            </ContainerSection>
        </div>
    )
}
