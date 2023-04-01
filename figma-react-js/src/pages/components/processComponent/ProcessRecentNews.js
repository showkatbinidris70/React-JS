import React from "react";
import ProcessImg1 from "../../../images/DSC_1.png";
import ProcessImg2 from "../../../images/DSC_2.png";
import ProcessImg3 from "../../../images/DSC_3.png";
import {ContainerSection, GridThree} from "../../../styles/plantStyle/PlantCommon.styled";
import {GridThreeCard} from "../../../styles/plantStyle/PlantNavbar.styled";
import {PlantNewsHeader} from "../../../styles/plantStyle/PlantResentNews.styled";

const Data = [
    {
        id: 1,
        date: "20",
        mnyr: "March 2022",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        img: ProcessImg2,
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        bgColor: "#000",
        color: "#FFF"
    }, {
        id: 2,
        date: "20",
        mnyr: "March 2022",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: ProcessImg1,
        bgColor: "#000",
        color: "#FFF"
    }, {
        id: 3,
        date: "20",
        mnyr: "March 2022",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: ProcessImg3,
        bgColor: "#000",
        color: "#FFF"
    },
];
export default function PlantRecentNews() {
    return (<div>
        <ContainerSection>
            <PlantNewsHeader>
                <div>
                    <h2>
                        WE ARE HERE TO
                        <span>SHARE STORY</span>
                        <br/>
                        FROM LATEST NEWS
                    </h2>
                </div>
            </PlantNewsHeader>
            <GridThree> {" "}
                {
                Data.map((feature) => (<GridThreeCard>
                    <img src={
                            feature.img
                        }
                        alt="fiture"/>
                    <div>
                        <h1> {
                            feature.date
                        }</h1>
                        <h3> {
                            feature.mnyr
                        }</h3>
                        <h2> {
                            feature.title
                        } </h2>
                        <p> {
                            feature.text
                        }</p>
                    </div>
                </GridThreeCard>))
            }
                {" "} </GridThree>
        </ContainerSection>
    </div>);
}
