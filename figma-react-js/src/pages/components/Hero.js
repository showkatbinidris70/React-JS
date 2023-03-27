import React from "react";
import { BackgroundImgNavbar } from "../../styles/Navbar.styled";
import Feature from "./Feature";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div>
      <BackgroundImgNavbar>
        <Header />
        <Navbar />
        <Feature />
      </BackgroundImgNavbar>
    </div>
  );
}
