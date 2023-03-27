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
    color: #FFFFFF;

}
ul{
    list-style-type: none;
    display: flex;
    gap: 5px;
    align-items: center;
    color: #FFFFFF;
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

    ul{
    list-style-type: none;
    display: flex;
    gap: 5rem;
    height: 100px;
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
