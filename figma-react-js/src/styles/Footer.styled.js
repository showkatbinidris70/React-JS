import styled from "styled-components";
import BackgroundImg from '../images/fog-nature.png'

export const FooterSection = styled.div `
min-height: 25rem;
width: 100%;
`
export const BackgroundImgContent = styled.div `
  background:linear-gradient(0deg, rgba(255, 226, 150, 0.3), rgb(38, 38, 38)), url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
`

export const FooterAddressSection = styled.div `
min-height: 21rem;
width: 100%;
padding-bottom: 5rem;

@media screen and (min-width: 980px) {
    min-height: 21rem;
    width: 100%;
    padding-bottom: 5rem;
}

@media screen and (max-width: 580px) {
    min-height: 15rem;
    width: 100%;
    padding-bottom: 2rem;
}

`
export const AddressSection = styled.div `
display: flex;
color: #FFF;
justify-content: space-evenly;

.govtLogo{
    margin-top: 4rem;
    width: 6%;
}
.address-and-title{
    width: 30%;
    float: left;
    margin-top: 4rem;
    h2{
        font-family: Poppins;
        font-size: 24px;
        font-weight: 800;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
    }
    h3{
        font-family: Times New Roman;
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
    }
    address{
        margin-top: 1rem;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
    }
}
.empty1{
    width: 20%;
    float: left;
}
.empty2{
    width: 15%;
    float: left;
}
.social-links{
    margin-top: 2rem;
    width: 26%;
    float: left; 
    .social-icons{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .emergency-numbers{
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
    }
}

@media screen and (max-width: 580px) {
.address-and-title{
    width: 64%;
    float: left;
    margin-top: 4rem;
    h2{
        font-family: Poppins;
        font-size: 15px;
        font-weight: 800;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
    }
    h3{
        font-family: Times New Roman;
        font-size: 12px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
    }
    address{
        margin-top: 1rem;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
    }
}

.social-links{
    margin-top: 2rem;
    width: 30%;
    float: left; 
    .social-icons{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .emergency-numbers{
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
    }
}
}

`

export const FooterCopyRightSection = styled.div `
height: 4rem;
width: 100%;
background-color: #40B554;
`
export const CopyRight = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
h2{
    width: 197px;
    height: 15px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #FFFFFF;
    margin-top: 1.5rem;
    span{
        color: #FF0000;
        margin-left: 3px;
        font-weight: 600;
    }
}
`
