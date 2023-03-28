import React from "react";
import {Link} from 'react-router-dom';
import PlanImg from "../../images/download.jpg";
import FishImg from "../../images/fish.PNG";
import GroceryImg from "../../images/grocery.jpg";
import LiveStockImg from "../../images/livestock.PNG";
import {ContainerSection} from "../../styles/Common.styled";
import {FeatureSection, FeaturesImgSection} from "../../styles/Navbar.styled";

// const Data = [
//     {
//         id: 1,
//         name: "Plant & Plant Products",
//         img: PlantImg,
//         bgColor: "#000",
//         color: "#FFF"
//     }, {
//         id: 2,
//         name: "Processed Products",
//         img: PlantImg,
//         bgColor: "#000",
//         color: "#FFF"
//     }, {
//         id: 3,
//         name: "Livestock Products",
//         img: PlantImg,
//         bgColor: "#000",
//         color: "#FFF"
//     }, {
//         id: 4,
//         name: "Fish & Fish Products",
//         img: PlantImg,
//         bgColor: "#000",
//         color: "#FFF"
//     }
// ]

export default function Feature() {
    return (
        <FeatureSection>
            <ContainerSection> {/* <GridFour gap="2rem">
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
                } </GridFour> */}
                <FeaturesImgSection>
                    <div>
                        <Link to="/plant"><img src={PlanImg}
                                alt=""/></Link>
                        <h2>Plant & Plant Products</h2>
                    </div>
                    <div>
                        <Link to="/process"><img src={GroceryImg}
                                alt=""/></Link>
                        <h2>Processed Products</h2>
                    </div>
                    <div>
                        <Link to="/livestock"><img src={LiveStockImg}
                                alt=""/></Link>
                        <h2>Livestock  Products</h2>
                    </div>
                    <div>
                        <Link to="/fish"><img src={FishImg}
                                alt=""/></Link>
                        <h2>Fish & Fish Products</h2>
                    </div>
                </FeaturesImgSection>
            </ContainerSection>
        </FeatureSection>
    );
}
