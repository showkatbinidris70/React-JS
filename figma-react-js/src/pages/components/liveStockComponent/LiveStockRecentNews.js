import React from "react";
import LiveStockImg1 from "../../../images/stock1.png";
import LiveStockImg2 from "../../../images/stock2.png";
import LiveStockImg3 from "../../../images/stock3.png";
import { LiveStockNewsHeader } from '../../../styles/liveStockStyle/LiveStockResentNews.styled';
import {
  ContainerSection,
  GridThree
} from "../../../styles/plantStyle/PlantCommon.styled";
import { GridThreeCard } from "../../../styles/plantStyle/PlantNavbar.styled";

const Data = [
  {
    id: 1,
    date: "20",
    mnyr: "March 2022",
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    img: LiveStockImg1,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    bgColor: "#000",
    color: "#FFF",
  },
  {
    id: 2,
    date: "20",
    mnyr: "March 2022",
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: LiveStockImg2,
    bgColor: "#000",
    color: "#FFF",
  },
  {
    id: 3,
    date: "20",
    mnyr: "March 2022",
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: LiveStockImg3,
    bgColor: "#000",
    color: "#FFF",
  },
];
export default function PlantRecentNews() {
  return (
    <div>
      <ContainerSection>
        <LiveStockNewsHeader>
          <div>
            <h2> WE ARE HERE TO <span>SHARE STORY</span>
              <br />
             FROM LATEST NEWS
            </h2>
          </div>
        </LiveStockNewsHeader>
        <GridThree>
          {" "}
          {Data.map((feature) => (
            <GridThreeCard>
              <img src={feature.img} alt="fiture" />
              <div>
                <h1>{feature.date}</h1>
                <h3>{feature.mnyr}</h3>
                <h2> {feature.title} </h2>
                <p>{feature.text}</p>
              </div>
            </GridThreeCard>
          ))}{" "}
        </GridThree>
      </ContainerSection>
    </div>
  );
}
