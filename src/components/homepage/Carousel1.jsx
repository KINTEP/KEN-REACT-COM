import React from 'react';  
import 'bootstrap/dist/css/bootstrap.css';  
import Carousel from 'react-bootstrap/Carousel';
import globe1 from "../../assets/images/online1.jpg"
import globe2 from "../../assets/images/online4.jpg"
import CarouselContent1 from "./CarouselContent1"
//import CarouselContent2 from "./CarouselContent2"
//import image1 from "../../assets/images/online1.jpg"
//import image2 from "../../assets/images/online5.jpg"
import image1 from "../../assets/images/African/af9.jpg"
import image2 from "../../assets/images/African/af2.jpg"


export default function Carousel1() { 
  
      const data1 = {
      header:"Get 50% Discount to Save More",
      paragraph: "This is the best deal ever",
      buttonText: "Join for free",
      variant: "contained",
      css: {marginTop:"1%", 
            marginBottom:"3", 
            height:"97%",
            
           },
      paperCss:{height:"100%", 
                marginLeft:"1%", 
                marginRight:"1%",
                backgroundImage:`url(${image1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover"
              }
    }

    const data2 = {
      header:"Award Winning Platform you can Trust",
      paragraph: "Our credibility is well known accross the globe",
      buttonText: "Join for free",
      variant: "contained",
      css: {marginTop:"1%", 
            marginBottom:"3", 
            height:"97%"
          },
      paperCss:{height:"100%", 
                marginLeft:"1%", 
                marginRight:"1%",
                backgroundImage:`url(${image2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover"
              }
    }

  return (  
    <div style={{ display: 'flex', width: "100%", padding: 0 , height:"100%"}}>   
      <Carousel style={{ display: 'flex', width: "100%", padding: 10, height:"69vh" }}>  
        <Carousel.Item interval={2000} style={{ height:"100%"}}>  
          <CarouselContent1 data = {data1}/>  
        </Carousel.Item>  
        <Carousel.Item interval={2000} style={{height:"100%"}}>  
          <CarouselContent1 data = {data2}/>  
        </Carousel.Item>  
      </Carousel>  
    </div>  
  );  
} 