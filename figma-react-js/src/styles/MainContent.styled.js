import styled from "styled-components";

export const Content = styled.div `
width: 100%;
min-height: 300px;
margin-top: 150px;
margin-bottom: 100px;
display: flex;

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
button{
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0em;
    color: #316887;
    padding: 1.2rem;
    border-radius: 12px;
    justify-content: right;
    float: right;
    border: 1px solid #40B554;
    background-color: transparent;
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

@media screen and (max-width: 580px) {
width: 100%;
min-height: 300px;
margin-top: 50px;
margin-bottom: 30px;

.twoImages{
    width: 100%;
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
    width: 100%;
    margin-left: 15px;
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
button{
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0em;
    color: #316887;
    padding: 1.2rem;
    border-radius: 12px;
    justify-content: right;
    float: right;
    border: 1px solid #40B554;
    background-color: transparent;
    margin-right: 10%;
}
}

`
