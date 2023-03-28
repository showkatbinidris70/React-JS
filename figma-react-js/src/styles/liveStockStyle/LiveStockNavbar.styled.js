import styled from "styled-components";

export const HeaderSection = styled.div `
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

h2{
    width: 100%;
    left: 34px;
    top: 17px;
    font-family: Poppins;
    font-size: 50px;
    font-weight: 800;
    line-height: 62px;
    letter-spacing: 0em;
    text-align: center;
    color: #FF9300;

}
ul{
    list-style-type: none;
    display: flex;
    gap: 5px;
    align-items: center;
    color: #FF9300;
    font-size: 2rem;
   margin-top: 5rem;
}
@media(max-width: ${
    ({theme}) => theme.mobile
}){
    h2{
    width: 100%;
    left: 10px;
    top: 10px;
    font-size:30px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
}
ul{
    list-style-type: none;
    display: flex;
    gap: 5px;
    align-items: center;
    color: #FFFFFF;
    font-size: 2rem;
   margin-top: 0rem;
}
}
`
export const NavbarSection = styled.nav `
    width: 100%;
    justify-content: space-between;
    align-items: center;
   background-color: #FF9300;

    ul{
    list-style-type: none;
    display: flex;
    gap: 5rem;
    height: 60px;
    align-items: center;
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: 700;
    justify-content: space-between;
}

@media(max-width: ${
    ({theme}) => theme.mobile
}){
   
ul{
    list-style-type: none;
    display: flex;
    gap: 3px;
    align-items: center;
    color: #FFFFFF;
    font-size: 1rem;
    height: 50px;
}
}
`
export const CarouselSlider = styled.div `
background-image: 
  /* url("https://media.geeksforgeeks.org/wp-content/uploads/rk.png"); */
  url("../images/fog-nature-forest-woods-india 1.png");
  background-size: "cover";
  background-repeat:no-repeat; 
 min-height: 700px;
 background-color: #ddd;
`
export const FeatureSection = styled.section `
background-color: #000;
margin-top: 400px;
color: #FFFFFF;
opacity: 0.9;
`
export const GridFourCard = styled.div `
justify-content: space-between;
    align-items: center;
img{
    height: 150px;
    width: 200px;
}
h2{
    justify-content: space-between;
    align-items: center;
    margin-left: 3rem;
}
`
export const GridThreeCard = styled.div `
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7rem;
    border: 2px dotted #40B554;
    margin: 0px 5px 5rem 5px;
img{
    height: 250px;
    width: 350px;
}
h1{
    justify-content: space-between;
    align-items: center;
    margin-left: 5px;
    font-size: 5rem;
    font-weight: 600;
    margin-top: -3.6rem;
    color: #40B554;
}
h3{
    justify-content: space-between;
    align-items: center;
    margin-left: 5px;
    font-size: 1.5rem;
    font-weight: 400;
}
h2{
    justify-content: space-between;
    align-items: center;
    margin-left: 5px;
    font-size: 2rem;
    font-weight: 700;
}
p{
    text-align: justify;
    text-justify: inter-word;
    margin-left: 5px;
    font-size: 1.1rem;
    font-weight: 400; 
    margin-top : 5px;
    margin-right: 5px;
    padding-bottom: 5rem;
}
`
export const GridTwoCard = styled.div `
    justify-content: space-around;
    align-items: center;
    display: flex;

`
