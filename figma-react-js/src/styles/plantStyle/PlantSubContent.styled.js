import styled from "styled-components";
import BackgroundImg from '../../images/ship.PNG';

export const PlantSubContentSection = styled.div `
height: 400px;
width: 90%;
margin-left: 10%;
margin-bottom: 8rem;
background-color: aqua;

background:linear-gradient(0deg, rgba(39, 100, 145, 0.8), rgb(73, 78, 212)), url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 90%;
  border-radius: 15px 0px 0px 15px;
`
export const SubSection = styled.div `
display: flex;
gap: 2rem;
justify-content: space-around;
padding-top: 100px;
width: 80%;
margin: 0 auto;
color: #FFFFFF;


.export{
  background:linear-gradient(0deg, rgba(39, 100, 145, 0.8), rgb(122, 78, 212)), url(${BackgroundImg});
  position: relative;
  width: 100%;
  height: 370px;
  margin-left: -15%;
  margin-top: -10.3%;
  border-radius: 15px 0px 0px 15px;
  padding-right: 20%;
  h1{
  margin-top: 13rem;
  font-family: Work Sans;
  font-size: 50px;
  font-weight: 600;
  line-height: 59px;
  letter-spacing: 0em;
}
p{
  margin-top: 15px;
  font-family: Poppins;
  font-size: 2rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  margin-right: -200px;
  margin-left: 10px;
}
}
h1{
  margin-top: 25px;
  font-family: Work Sans;
  font-size: 50px;
  font-weight: 600;
  line-height: 59px;
  letter-spacing: 0em;
}
p{
  margin-top: 15px;
  font-family: Poppins;
  font-size: 2rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
button{
  margin-top: 15px;
    overflow: hidden;  
    color: white;
    font-weight: 400;
    padding: 20px 50px 20px 50px;
    border-radius: 30px;
    background-color: #001CAA;
    border: 1px solid #001CAA;
}
.btn-import{
background-color: #518D23;
border: 1px solid #518D23;
}
`
