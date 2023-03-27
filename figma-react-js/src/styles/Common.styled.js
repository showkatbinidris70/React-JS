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
export const GridThree = styled.section `
    display: grid;
    gap: ${
    ({gap}) => gap || "2rem"
};
    grid-template-columns: repeat(3, 1fr);
    @media(max-width: ${
    ({theme}) => theme.smallMobile
}){
    grid-template-columns: 1fr;
}
`
// export const GridTwo = styled.section `
//     display: flex;
//     gap: ${
//     ({gap}) => gap || "2rem"
// };
//     margin: 0 auto;
//     grid-template-columns: repeat(2, 1fr);
//     @media(max-width: ${
//     ({theme}) => theme.smallMobile
// }){
//     grid-template-columns: 1fr;
// }
// `
export const GridTwo = styled.section `
    width: 90%;
    display: flex;
    margin: 0 auto;
    height: 300px;
    margin-bottom: 7rem;
    div{
        width: 50%;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        margin: 10px;
        iframe{
            border-radius:10px;
        }
  }
`
