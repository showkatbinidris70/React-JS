import styled from "styled-components";
import BackgroundImg from '../images/qatar_order.jpeg'

export const SubContentSection = styled.div `
height: 350px;
width: 100%;
margin-bottom: 8rem;

background:linear-gradient(0deg, rgba(215, 19, 27, 0.7), rgb(180, 38, 38)), url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;

  @media screen and (max-width: 580px) {
    height: 150px;
    width: 100%;
    margin-bottom: 3rem;

background:linear-gradient(0deg, rgba(215, 19, 27, 0.7), rgb(180, 38, 38)), url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;

  }
`
export const SubSection = styled.div `
display: flex;
gap: 2rem;
justify-content: space-around;
padding-top: 100px;
width: 80%;
margin: 0 auto;
button{
    background-color: Transparent;
    background-repeat:no-repeat;
    border: 6px solid #FFFFFF;
    overflow: hidden;  
    color: white;
    font-size: 5rem;
    font-weight: 400;
    padding: 4rem;
    padding-left: 15rem;
    padding-right: 15rem;
}

@media screen and (max-width: 580px) {
gap: 1rem;
justify-content: space-around;
padding-top: 40px;
width: 100%;
margin: 0 auto;
button{
    background-color: Transparent;
    background-repeat:no-repeat;
    border: 6px solid #FFFFFF;
    overflow: hidden;  
    color: white;
    font-size: 2rem;
    font-weight: 300;
    padding: 1rem;
    padding-left: 6rem;
    padding-right: 6rem;
}
}
`
