import styled from "styled-components";
import BackgroundImg from '../../images/image21.png';

export const Content = styled.div `
width: 100%;
min-height: 450px;
margin-top: 150px;
margin-bottom: 100px;
display: flex;

background: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;

.plant-main-content{
    display:flex;
    margin:0 auto;
    width:80%;
.left{
    width:62%;
    h2{
        height: 57px;
        width: 549px;
        left: 157px;
        top: 637px;
        border-radius: nullpx;
    }
    p{
        height: 199px;
        width: 581px;
        left: 153px;
        top: 769px;
        border-radius: nullpx;
        padding-right:4rem;

    }
}
.right{
    width:38%;
    margin-top:20px;
    margin-left:-5rem;
}

}

.twoImages{
    width: 40%;
    display: flex;
    .tringleImg{
        img{
            height: 400px;
        }
    }
}
.fruitImg{
    rotate: 40deg;
    img{
        width: 300px;
        border-radius: 20px;
        height: 300px;
        margin-left: -100px;
        margin-top: 50px;
    }
}
.content{
    width: 60%;
}
h2{
    font-family: Roboto Slab;
    font-size: 38px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    color:#40B554;
    margin-bottom: 3rem;
}
p{
    font-family: Roboto Slab;
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: justify;
    text-justify: inter-word;
    margin-right: 10%;
}

@media(max-width: ${
    ({theme}) => theme.mobile
}){
    display: inline-block;
img{
    width: 100%;
}
.content{
    width: 100%;
}
}

`
