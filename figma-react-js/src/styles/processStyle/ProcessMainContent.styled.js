import styled from "styled-components";
import circleImg from '../../images/circle.png';

export const Content = styled.div `
width: 80%;
min-height: 500px;
margin-top: 150px;
margin-bottom: 100px;
display: flex;
margin-top:50px;
margin:0 auto;

.left{
    width:45%;
    float:left;
    margin-top: 200px;
    margin-bottom: 100px;
    background: url(${circleImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width:350px;
    height:350px;

    .circleImage{
        margin-top:50px;
    }
    .patatoImage{
        width:350px;
        height:350px;
        margin-left: -10px;
        margin-top:-100px;
    }
    .honeyImage{
        margin-top:-250px;
        width:350px;
        height:350px;
        margin-right: -300px;

    }
}
.right{
    margin-top:10%;
    width:55%;
    margin-left:15%;
    h2{
        font-family: Roboto Slab;
        font-size: 38px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: 0em;
        text-align: left;
        color:#40B554;
    }
    p{
        margin-top:50px;
        font-family: Roboto Slab;
        font-size: 16px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: justify;

    }
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
