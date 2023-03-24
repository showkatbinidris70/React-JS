import styled from "styled-components";
export const HeroSection = styled.div `
padding: 8rem 0;
display: flex;
justify-content: space-between;
align-items: center;
>div{
    flex: 1;
}
h2{
    font-size: 5.4rem;
    font-weight: 600px;
    span{
        color: #5156D9;
    }
}
img{
    /* height: 500px;
    width: 500px; */
}
@media(max-width:${
    ({theme}) => theme.mobile
}){
    flex-direction: column;
    padding: 2rem;
    text-align: center;
    gap: 3rem;
}
h2{
    font-size: 3.4rem;
    padding: 0 4rem;
}
`

export const TopSection = styled.section `
/* background-color: ${
    ({theme}) => theme.color.black
};
color: ${
    ({theme}) => theme.color.white
}; */

background: linear-gradient(180deg, #D1D2F1 0.47%, rgba(217, 217, 217, 0) 85.31%);
`

export const FeaturesSection = styled.section `
background: linear-gradient(180deg, #FFFFFF 0.09%, #C9EFF1 100%);
padding: 6rem 0;
h2{
    text-align: center;
    padding: 4rem 0;
    font-size: 4.4rem;
    color: #5156D9;
}
@media(max-width:${
    ({theme}) => theme.smallMobile
}){
    padding: 2rem 0;
}
`
export const FeatureCard = styled.div `
img{
    width: 100%;
    height: 200px;
}
.caption{
    background-color: ${
    ({bgColor}) => bgColor
};
    color: ${
    ({color}) => color
};
    padding: 2rem;
    text-align: center;
    font-size: 2rem;
}
`
