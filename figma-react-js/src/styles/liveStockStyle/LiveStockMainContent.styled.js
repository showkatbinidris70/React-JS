import styled from "styled-components";

export const Content = styled.div`
  width: 80%;
  height:600px;
  background-color: "#ddd";
  display:flex;
  margin:0 auto;
  margin-top:100px;
  margin-bottom:50px;
  .left{
    width:55%;
    padding:20px;
    h2{
        font-family: Roboto Slab;
        font-size: 38px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: 0em;
        text-align: left;
        color:#FF9300;
    }
    p{
        margin-top:100px;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: justify;

    }
  }
  .right{
    width:45%;
    padding:20px;

    .hens{
        height:450px;
        width:450px;
    }
    .gots{
        height:300px;
        width:300px;
        margin-top:-200px;
        margin-left:250px;
    }
  }
`;
