import React from "react";
import img from "../../../images/Ellipse13.png";
import MaincontentImg from "../../../images/treeman.PNG";
import { Content } from "../../../styles/plantStyle/PlantMainContent.styled";

export default function PlantMainContent() {
  return (
    <div>
      <img src={MaincontentImg} alt="" />
      <Content>
        <div className="plant-main-content">
        <div className="left">
          <h2>Plant And Plant Product</h2>
          <p>Bangladesh - one of the fastest-growing economies of South Asia got her independence in 1971 after the 9-month long Liberation war under the undisputed and unrivaled leadership of the Father of the Nation Bangabandhu Sheikh Mujibur Rahman. Under the dynamic leadership of his able daughter, the Honorable Prime Minister Sheikh Hasina, Bangladesh has made remarkable progress in raising incomes, reducing poverty, and improving social indicators and has been classified as a middle-income country by World Bank.</p>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
        </div>
      </Content>
    </div>
  );
}
