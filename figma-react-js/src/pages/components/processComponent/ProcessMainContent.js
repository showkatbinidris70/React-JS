import React from "react";

import honeyImg from "../../../images/honey.png";
import patatoImg from "../../../images/potato.png";
import ProcessMaincontentImg from "../../../images/processed.PNG";
import { Content } from "../../../styles/processStyle/ProcessMainContent.styled";

export default function ProcessMainContent() {
  return (
    <div>
      <img src={ProcessMaincontentImg} alt="" />
      <Content>
        <div className="left">
          <img className="patatoImage" src={patatoImg} alr="" />
          <img className="honeyImage" src={honeyImg} alr="" />
        </div>
        <div className="right">
          <h2>Processed Product</h2>
          <p>
            Bangladesh - one of the fastest-growing economies of South Asia got
            her independence in 1971 after the 9-month long Liberation war under
            the undisputed and unrivaled leadership of the Father of the Nation
            Bangabandhu Sheikh Mujibur Rahman. Under the dynamic leadership of
            his able daughter, the Honorable Prime Minister Sheikh Hasina,
            Bangladesh has made remarkable progress in raising incomes, reducing
            poverty, and improving social indicators and has been classified as
            a middle-income country by World Bank.
          </p>
        </div>
      </Content>
    </div>
  );
}
