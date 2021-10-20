
// we used react bootstrap too in this project
// npm i react-bootsrap bootstrap@4.6.0
import './App.css';
import React from "react";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js"
import StarProducts from './components/StarProducts';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import Productreviews from './components/Productreviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptios from './components/NavOptios';

function App() {
  return (
   <Router>
    
     <PreNavbar/>
     <Navbar/>

     <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProducts starProduct={data.starProduct}/>
      <Heading text ="HOT ACCESSORIES"/>
      < HotAccessoriesMenu/>

      <Route exact path="/music">
        <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
      </Route>

      <Route exact path="/smartDevices">
       <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
       </Route>

       <Route exact path="/home">
       <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
       </Route>

       <Route exact path="/lifestyle">
       <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
       </Route>


       <Route exact path="/mobileAccessories">
       <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
       </Route>

       <Heading text="PRODUCT REVIEWS"/>
       <Productreviews  productreviews={data.productReviews} />

       <Heading text ="Videos"/>
       <Videos videos={data.videos} />

       <Heading text ="IN THE PRESS"/>
       
       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />

     </Router>
  );
}

export default App;
 