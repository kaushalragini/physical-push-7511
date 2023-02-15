import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import "./carousel.css";
import {Swiper,SwiperSlide} from 'swiper/react';
import {FreeMode}from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Grid, GridItem } from '@chakra-ui/react';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const HomePage1 = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay  style={{display:"flex",justifyContent:"center"}} >
          <div className='carouselImage' >
            <img src="https://user-images.githubusercontent.com/107903370/218972232-322c92a7-c80a-4ff0-9f68-be9f173395bd.png" alt="first" />
          </div>
          <div className='carouselImage' >
            <img src="https://user-images.githubusercontent.com/107903370/218973174-7343f8f7-4dc2-4cd3-9af3-39f5fbd26753.png" alt="first" />
          </div>
          <div className='carouselImage' >
            <img src="https://user-images.githubusercontent.com/107903370/218976802-0088ea5c-e4ed-4bd9-b809-19b2691be495.png" alt="first" />
          </div>
          <div className='carouselImage' >
            <img src="https://user-images.githubusercontent.com/107903370/218977427-4707d637-74cf-4fdd-a16d-8bb253d2d402.png" alt="first" />
          </div>
      </Carousel>
      <img  src="https://assets.ajio.com/cms/AJIO/WEB/IDBI-1440x128-23.jpg" />

      <div className='containerr py-4 px-4 justify-content-center' >
        <Swiper
        freeMode={true} grabCursor={true} modules={[FreeMode]} className="mySwiper" 
        breakpoints={{
          0 : {
            slidesPerView :1,
            spaceBetwee :10
          },
          480:{
            slidesPerView :2,
            spaceBetween :10
          },
          768:{
            slidesPerView :3,
            spaceBetween :15
          },
          1024:{
            slidesPerView :4,
            spaceBetween :15
          }
          
        }}
        >

          <SwiperSlide infiniteLoop autoPlay>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-P1-KimayraKurtipedia-min50.jpg" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-P2-vanHeusen-min40.jpg" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-P3-OrchidBluesCottonfab-min60.jpg" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-P4-rareRabbit-Upto50.jpg" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-P5-LouisPhilippe-Min40.jpg" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-P6-Rigo-Min50.jpg" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-P7-Arrow-Min40.jpg" />
          </SwiperSlide>
        </Swiper>
        <Grid
         
          templateColumns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap="10px"
         
        >
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg'/>
          </GridItem>
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P2-Trends.jpg'/>
          </GridItem>
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P3-Sneakerhood.jpg'/>
          </GridItem>
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/47.4_1.jpg'/>
          </GridItem>
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P5-Sportswear.jpg'/>
          </GridItem>
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P6-Footwear.jpg'/>
          </GridItem>
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P7-Accessories.jpg'/>
          </GridItem>
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P8-Wedding.jpg'/>
          </GridItem>
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P15-Jewellery.jpg'/>
          </GridItem>
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P12-Home.jpg'/>
          </GridItem>
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P10-Homegrownbrands.jpg'/>
          </GridItem>
          <GridItem>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P9-Sarees.jpg'/>
          </GridItem>
        </Grid>
        <div>
        <h2> Responsive </h2>
        <Slider  breakpoints={{
          0 : {
            slidesPerView :1,
            spaceBetwee :10
          },
          480:{
            slidesPerView :2,
            spaceBetween :10
          },
          768:{
            slidesPerView :3,
            spaceBetween :15
          },
          1024:{
            slidesPerView :4,
            spaceBetween :15
          }
          
        }}
       dots= {true}  infinite={false} speed ={500} slidesToShow= {4} slidesToScroll= {4}  initialSlide ={0}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
      </div>
    </div>
  )
}

export default HomePage1