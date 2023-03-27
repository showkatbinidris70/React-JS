import React from 'react'
import {ContainerSection} from '../../styles/Common.styled'
import govtLogo from '../../images/Government of Bangladesh Logo English 1.png'
import FacebookLogo from '../../images/icons/facebook.png';
import InstagramLogo from '../../images/icons/instagram.png';
import TwitterLogo from '../../images/icons/twitter.png';
import SkypeLogo from '../../images/icons/skype.png';
import GovtNum1 from '../../images/image 15.png';
import GovtNum2 from '../../images/image 15 (1).png';
import {
    AddressSection,
    BackgroundImgContent,
    CopyRight,
    FooterAddressSection,
    FooterCopyRightSection,
    FooterSection
} from '../../styles/Footer.styled'

export default function Footer() {
    return (
        <FooterSection>
            <BackgroundImgContent>
                <FooterAddressSection>
                    <ContainerSection>
                        <AddressSection>
                            <div className='govtLogo'>
                                <img src={govtLogo}
                                    alt=""/>
                            </div>
                            <div className='address-and-title'>
                                <h2>AGRO TRADE SECTION</h2>
                                <h3>MINISTRY OF COMMERCE</h3>
                                <address>
                                    Agargaon, Dhaka- 1216<br></br>
                                    Phone: +880900000000<br></br>
                                    Fax: 88-02-8000000<br></br>
                                    Email: info@moc.gov.bd<br></br>
                                </address>
                            </div>
                            <div className='empty1'></div>
                            <div className='empty2'></div>
                            <div className='social-links'>
                                <div className='social-icons'>
                                    <div><img src={FacebookLogo}
                                            alt=''/></div>
                                    <div><img src={InstagramLogo}
                                            alt=''/></div>
                                    <div><img src={TwitterLogo}
                                            alt=''/></div>
                                    <div><img src={SkypeLogo}
                                            alt=''/></div>
                                </div>
                                <div className='emergency-numbers'>
                                    <div><img src={GovtNum1}
                                            alt=''/></div>
                                    <div><img src={GovtNum2}
                                            alt=''/></div>
                                </div>
                            </div>
                        </AddressSection>
                    </ContainerSection>
                </FooterAddressSection>
            </BackgroundImgContent>

            <FooterCopyRightSection>
                <ContainerSection>
                    <CopyRight>
                        <div>
                            <h2>All rights Reserved © MOC, 2022</h2>
                        </div>
                        <div>
                            <h2>Made with heart by
                                <span>
                                    Showk@t Ali</span>
                            </h2>
                        </div>
                    </CopyRight>
                </ContainerSection>
            </FooterCopyRightSection>


        </FooterSection>
    )
}
