import React from 'react';
import PlantImg1 from '../../images/DSC_0802 1 (1).png';
import PlantImg3 from '../../images/DSC_0802 1 (2).png';
import PlantImg2 from '../../images/DSC_0802 1.png';
import { ContainerSection, GridThree } from '../../styles/Common.styled';
import { GridThreeCard } from '../../styles/Navbar.styled';
const Data = [
    {
        id: 1,
        date: "20",
        mnyr: "March 2022",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        img: PlantImg2,
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        bgColor: "#000",
        color: "#FFF"
    }, {
        id: 2,
        date: "20",
        mnyr: "March 2022",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: PlantImg1,
        bgColor: "#000",
        color: "#FFF"
    }, {
        id: 3,
        date: "20",
        mnyr: "March 2022",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: PlantImg3,
        bgColor: "#000",
        color: "#FFF"
    }
]
export default function RecentNews() {
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
                }>Recent News</h2>
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
