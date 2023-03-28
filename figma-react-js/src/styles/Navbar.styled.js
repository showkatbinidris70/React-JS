import styled from "styled-components";


export const HeaderSection = styled.div `
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    width: 100%;
    left: 34px;
    top: 17px;
    font-family: Poppins;
    font-size: 50px;
    font-weight: 800;
    line-height: 62px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
  }
  ul {
    list-style-type: none;
    display: flex;
    gap: 5px;
    align-items: center;
    color: #ffffff;
    font-size: 2rem;
    margin-top: 5rem;
  }
  @media (max-width: ${
    ({theme}) => theme.mobile
}) {
    h2 {
      width: 100%;
      left: 10px;
      top: 10px;
      font-size: 30px;
      font-weight: 600;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: center;
      color: #ffffff;
    }
    ul {
      list-style-type: none;
      display: flex;
      gap: 5px;
      align-items: center;
      color: #ffffff;
      font-size: 2rem;
      margin-top: 0rem;
    }
  }
`;
export const NavbarSection = styled.nav `
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    gap: 5rem;
    height: 100px;
    align-items: center;
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    justify-content: space-between;
  }

  @media (max-width: ${
    ({theme}) => theme.mobile
}) {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3px;
      align-items: center;
      color: #ffffff;
      font-size: 1rem;
      height: 50px;
    }
  }
`;
// export const CarouselSlider = styled.div `
// background-image:
// /* url("https://media.geeksforgeeks.org/wp-content/uploads/rk.png"); */
//     url("../images/fog-nature-forest-woods-india 1.png");
// background-size: "cover";
// background-repeat: no-repeat;
// min-height: 700px;
// background-color: #ddd;
// `;
export const FeatureSection = styled.section `
  background-color: transfarent;
  margin-top: 300px;
  color: #ffffff;
  opacity: 0.9;
  /* background: linear-gradient(0deg, rgba(255, 255, 125, 0.2), rgb(38, 38, 38));
   */
  background         : linear-gradient(0deg, rgba(12, 11, 12, 0.91), rgba(12, 11, 12, 0.91));
 
  @media screen and (max-width: 580px) {
  background-color: transfarent;
  margin-top: 150px;
  color: #ffffff;
  opacity: 0.9;
  background         : linear-gradient(0deg, rgba(12, 11, 12, 0.91), rgba(12, 11, 12, 0.91));
 
  }

`;
export const GridFourCard = styled.div `
  justify-content: space-between;
  align-items: center;
  img {
    height: 150px;
    width: 200px;
  }
  h2 {
    justify-content: space-between;
    align-items: center;
    margin-left: 3rem;
  }
`;
export const GridThreeCard = styled.div `
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7rem;
  border: 2px dotted #40b554;
  margin: 0px 5px 5rem 5px;
  img {
    height: 250px;
    width: 350px;
  }
  h1 {
    font-size: 5rem;
    font-weight: 600;
    margin-top: -3.6rem;
    color: #40b554;
    margin-right: 80%;
  }
  h3 {
    margin-right: 72%;
    font-size: 1.5rem;
    font-weight: 400;
  }
  h2 {
    margin-right: 20%;
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    text-align: justify;
    text-justify: inter-word;
    margin-left: 5px;
    font-size: 1.1rem;
    font-weight: 400;
    margin-top: 5px;
    margin-right: 5px;
    padding-bottom: 5rem;
  }
`;
export const GridTwoCard = styled.div `
  justify-content: space-around;
  align-items: center;
  display: flex;
`;

// export const BackgroundImgNavbar = styled.div `
// /* background-image: url(${BackgroundImg}); */
// /* background: linear-gradient(0deg, rgba(255, 226, 150, 0.3), rgb(38, 38, 38)),
//     url(${BackgroundImg}); */
// /* background-position: center;
// background-repeat: no-repeat;
// background-size: cover;
// position: relative;
// width: 100%; */
// `;

export const FeaturesImgSection = styled.div `
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  img{
    height:150px;
    width:150px
  }

  @media screen and (max-width: 580px) {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  img{
    height:50px;
    width:50px;
    padding:10px;
  }
  }
  `;
