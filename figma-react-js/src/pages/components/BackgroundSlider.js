import React, {useEffect, useState} from "react";
import "../../styles/BackgroundSlider.styled.css";
import imageSlide from "../../data";
import Feature from "./Feature";
import Header from "./Header";
import Navbar from "./Navbar";

export default function BackgroundSlider() {
    const [currentState, setCurrentState] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 2) {
                setCurrentState(0);
            } else {
                setCurrentState(currentState + 1);
            }
        }, 3000);
        return() => clearTimeout(timer);
    }, [currentState]);
    const bgImageStyle = {
        backgroundImage: `url(${
            imageSlide[currentState].url
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%"
    };
    const goToNext = (currentState) => {
        setCurrentState(currentState);
    };
    return (
        <div className="counter-style">
            <div style={bgImageStyle}></div>
            <div className="transfarent-background"></div>
            <div className="description">
                <div>
                    <h1>{
                        imageSlide[currentState].title
                    }</h1>

                    <Header/>
                    <Navbar/>
                    <Feature/>

                </div>
                <div className="carousel-built">
                    {
                    imageSlide.map((imageSlide, currentState) => (
                        <span key={currentState}
                            onClick={
                                () => goToNext(currentState)
                        }></span>
                    ))
                } </div>
            </div>
        </div>
    );
}
