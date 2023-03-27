import styled from "styled-components";

export const ContainerSection = styled.section `
width: 90%;
margin: 0 auto;
min-height: 5vh;
`
export const GridFour = styled.section `
    display: grid;
    gap: ${
    ({gap}) => gap || "2rem"
};
    grid-template-columns: repeat(4, 1fr);
    @media(max-width: ${
    ({theme}) => theme.smallMobile
}){
    grid-template-columns: 1fr;
}

`
