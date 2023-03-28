import React from 'react';
import FishMaincontentImg from '../../../images/fishing.PNG';
import FruitsImage from "../../../images/image 3.png";
import TriangleImage from "../../../images/Rectangle 66.png";
import { Content } from '../../../styles/plantStyle/PlantMainContent.styled';

export default function FishMainContent() {
    return (
        <div>
            <img src={FishMaincontentImg}
                alt=""/>
            <Content>
                <div className='twoImages'>
                    <div className='tringleImg'>
                        <img src={TriangleImage}
                            alt=''/>
                    </div>
                    <div className='fruitImg'>
                        <img src={FruitsImage}
                            alt=''/>
                    </div>
                </div>
                <div className='content'>
                    <h2>About Agro Trade</h2>
                    <p>Bangladesh - one of the fastest-growing economies of South Asia got her independence in 1971 after the 9-month long Liberation war under the undisputed and unrivaled leadership of the Father of the Nation Bangabandhu Sheikh Mujibur Rahman. Under the dynamic leadership of his able daughter, the Honorable Prime Minister Sheikh Hasina, Bangladesh has made remarkable progress in raising incomes, reducing poverty, and improving social indicators and has been classified as a middle-income country by World Bank.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            The Bangladesh Trade Portal (BTP) is an official source of all regulatory information relevant to traders who wish to import goods into Bangladesh or export to other countries. The Ministry of Commerce of the Bangladesh Government has established the Portal in order to improve the predictability and transparency of the country’s trading laws and processes.</p>
                    <button>View more</button>
                </div>
            </Content>
        </div>
    )
}
