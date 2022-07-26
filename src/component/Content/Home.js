import React from "react";
import AboutUs from "../aboutUs/AboutUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Rules from "../ruless/Rules";
import Banner from "./chidrenContent/Banner";
import HomeOption from "./chidrenContent/homeOptions";
import Teacher from "./chidrenContent/Teacher";
function Home() {
  return (
    <>
      <Banner />
      <Header />
      <HomeOption />
      <Teacher />
       <AboutUs/>
      <Rules/>
      <Footer />
    </>
  );
}
export default Home;
