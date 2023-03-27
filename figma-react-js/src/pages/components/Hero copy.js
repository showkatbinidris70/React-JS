import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade} from 'react-slideshow-image';
import Header from '../../pages/components/Header'
import Navbar from '../../pages/components/Navbar'
import Feature from '../../pages/components/Feature'

const slideImage = [
    {
        url: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
        caption: "First Slidess"
    }, {
        url: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
        caption: "Second Slidess"
    }
];

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "700px",
    backgroundSize: "cover"
}
export default function Hero() {
    return (
        <div>
            <Fade> {
                slideImage.map((image, index) => (
                    <div key={index}>
                        <div style={
                            {
                                ... divStyle,
                                backgroundImage: `url(${
                                    image.url
                                })`
                            }
                        }></div>
                    </div>
                ))
            } </Fade>


            <Header/>
            <Navbar/>
            <Feature/>
        </div>
    )
}
