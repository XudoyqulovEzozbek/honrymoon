import React from 'react';
import Navbar from "./navbar/Navbar";
import Header from "./header/header";
import Buy from "./buy/buy";
import Information from "./information/information";
import Composition from "./Composition/Composition";
import Operator from "./operator/operator";
import Advantages from "./Advantages/Advantages";
import Effective from "./effective/effective";
import Footer from "./footer/footer";
import Carousels from "./carousel/carousel";
import "./home.scss"
function HomePage(props) {
    return (
        <>
          <Navbar/>
          <Header/>
          <Carousels/>
          <Buy/>
          <Information/>
          <Composition/>
          <Operator/>
          <Advantages/>
          <Effective/>
          <Footer/>
        </>
    );
}

export default HomePage;