import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ImageSlider, { Slide } from "react-auto-image-slider";
import './HomePage.css';
import Popup from 'reactjs-popup';
import { NavLink } from 'react-router-dom';
const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  const hour = 13;
  const min = 50;
  const [sec, setSec] = useState(60);
  useEffect(() => {
    const timer =
      sec > 0 && setInterval(() => setSec(sec - 1), 1000);
    return () => clearInterval(timer);
  }, [sec]);
  const [B1, setB1] = useState([]);
  const [B2, setB2] = useState([]);
  const [B3, setB3] = useState([]);
  const [B4, setB4] = useState([]);
  const [B5, setB5] = useState([]);
  const [B6, setB6] = useState([]);
  const [B7, setB7] = useState([]);
  const [B8, setB8] = useState([]);
  const [B9, setB9] = useState([]);
  const [B10, setB10] = useState([]);
  const [B11, setB11] = useState([]);
  const [B12, setB12] = useState([]);
  const [B13, setB13] = useState([]);
  const [B14, setB14] = useState([]);
  const [B15, setB15] = useState([]);
  const [B16, setB16] = useState([]);
  const [B17, setB17] = useState([]);
  const [B18, setB18] = useState([]);
  const [B19, setB19] = useState([]);
  const [B20, setB20] = useState([]);
  const [B21, setB21] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/Banner')
      .then(response => {
        console.log(response.data.Banner1)
        console.log(response.data.Banner2)

        setB1(response.data.Banner1)
        setB2(response.data.Banner2)
        setB3(response.data.Banner3)
        setB4(response.data.Banner4)
        setB5(response.data.Banner5)
        setB6(response.data.Banner6)
        setB7(response.data.Banner7)
        setB8(response.data.Banner8)
        setB9(response.data.Banner9)
        setB10(response.data.Banner10)
        setB11(response.data.Banner11)
        setB12(response.data.Banner12)
        setB13(response.data.Banner13)
        setB14(response.data.Banner14)
        setB15(response.data.Banner15)
        setB16(response.data.Banner16)
        setB17(response.data.Banner17)
        setB18(response.data.Banner18)
        setB19(response.data.Banner19)
        setB20(response.data.Banner20)
        setB21(response.data.Banner21)
      })
  }, [])
  

  return (
    <>


<div>
  <img src="https://assets.ajio.com/cms/AJIO/WEB/UHP-D-Urgency74Hrs-LiveNow-1440x128.jpg" alt="" />
</div>

      <ImageSlider effectDelay={800} autoPlayDelay={2000}>
        {B1.map(el => (
          <Slide >
            <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
          </Slide>)
        )}
      </ImageSlider>


      <div style={{ height: '100px', marginTop: '-150px' }}>
        <ImageSlider style={{ border: '5px solid red', padding: '20px' }} effectDelay={600} autoPlayDelay={2000}>
          {B2.map(el => (
            <Slide >
              <img style={{ height: '100px' }} key={el.id} alt="" src={el.photo} />
            </Slide>)
          )}
        </ImageSlider>
      </div>

      <div>
        <h1 style={{ fontSize: '30px' }}>Ends in {hour} h {min} m {sec} s</h1>
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-HeroDeals-SectionHeaderStripkjkf.gif" alt="" />
      </div>


      <div style={{ height: '100px' }}>
        <ImageSlider style={{ border: '5px solid red', padding: '20px' }} effectDelay={600} autoPlayDelay={2000}>
          {B3.map(el => (
            <Slide >
              <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
            </Slide>)
          )}
        </ImageSlider>
      </div>

      <div style={{ marginTop: '380px' }}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/UHP-D-Fashionation-Coupon-header.gif" alt="" />
      </div>

      <div className='imgdiv' style={{ display: 'flex' }}>
        <img width='450px' src="https://assets.ajio.com/cms/AJIO/WEB/D-Extra30-480x6001.gif" alt="" />
        <img width='450px' src="https://assets.ajio.com/cms/AJIO/WEB/D-1950-480x6001.gif" alt="" />
        <img width='450px' src="https://assets.ajio.com/cms/AJIO/WEB/D-FootwearFiesta-480x6001.gif" alt="" />
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/UHP-D-Fashionation-Coupon-header.gif" alt="" />
      </div>

      <div style={{ height: '100px' }}>
        <ImageSlider style={{ border: '5px solid red', padding: '20px' }} effectDelay={600} autoPlayDelay={2000}>
          {B4.map(el => (
            <Slide >
              <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
            </Slide>)
          )}
        </ImageSlider>
      </div>

      <div style={{ marginTop: '380px' }}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-DailyBanner-SectionHeaderStrip.gif" alt="" />
      </div>


      <div style={{ height: '100px' }}>
        <ImageSlider style={{ border: '5px solid red', padding: '20px' }} effectDelay={600} autoPlayDelay={2000}>
          {B5.map(el => (
            <Slide >
              <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
            </Slide>)
          )}
        </ImageSlider>
      </div>

      <div style={{ marginTop: '380px' }}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-gamesonze-header.jpg" alt="" />
      </div>


      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-gamesonze-scratchcard-GIF.gif" alt="" />
      </div>


      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-rewards-header.jpg" alt="" />
      </div>

      <div className='imgdiv' style={{ display: 'flex' }}>
        <img width='450px' src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-rewards-shopearn5cashback.jpg" alt="" />
        <img width='450px' src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-rewards-relianceone.jpg" alt="" />
        <img width='450px' src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-rewards-referearn1500.jpg" alt="" />
      </div>


      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {B6.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-AJIOexclusive-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {B7.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-JITstatics-header.jpg" alt="" />
      </div>

      <div style={{ height: '100px' }}>
        <ImageSlider style={{ border: '5px solid red', padding: '20px' }} effectDelay={600} autoPlayDelay={2000}>
          {B8.map(el => (
            <Slide >
              <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
            </Slide>)
          )}
        </ImageSlider>
      </div>

      <div style={{ marginTop: '380px' }}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-westernwear-header.jpg" alt="" />
      </div>
      <div className='imgdiv4' style={{ display: 'flex' }}>
        {B9.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>
      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-dailymen-header.jpg" alt="" />
      </div>
      <div style={{ height: '100px' }}>
        <ImageSlider style={{ border: '5px solid red', padding: '20px' }} effectDelay={600} autoPlayDelay={2000}>
          {B10.map(el => (
            <Slide >
              <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
            </Slide>)
          )}
        </ImageSlider>
      </div>

      <div style={{ marginTop: '380px' }}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-dailywomen-header.jpg" alt="" />
      </div>


      <div style={{ height: '100px' }}>
        <ImageSlider style={{ border: '5px solid red', padding: '20px' }} effectDelay={600} autoPlayDelay={2000}>
          {B11.map(el => (
            <Slide >
              <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
            </Slide>)
          )}
        </ImageSlider>
      </div>
      <div style={{ marginTop: '380px' }}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {B12.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-trendscarousel-header.jpg" alt="" />
      </div>

      <div style={{ height: '100px' }}>
        <ImageSlider style={{ border: '5px solid red', padding: '20px' }} effectDelay={600} autoPlayDelay={2000}>
          {B13.map(el => (
            <Slide >
              <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
            </Slide>)
          )}
        </ImageSlider>
      </div>

      <div style={{ marginTop: '380px' }}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {B14.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-hiddengems-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {B15.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-kidswear-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {B16.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-topshelf-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {B17.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-classicbrands-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {B18.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-header.jpg" alt="" />
      </div>

      <div className='imgdiv4'  style={{ display: 'flex' }}>
        {B19.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-header.jpg" alt="" />
      </div>
      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-AJIOGold.jpg" alt="" />
      </div>


      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {B20.map(el => (
          <img style={{ height: '600px', width: '620px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/Discover%20Online%20Stores%20(D)111.jpg" alt="" />
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip%20new%20d.jpg" alt="" />
      </div>

      <button className='scrollbtn'
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}>▲</button>

      <Popup trigger={<button className='scrollbtn1'>■ ■ ■</button>} position="center center">
        <div style={{ padding: '60px 160px 60px 160px', marginLeft: '-750px', marginTop: '-500px', marginRight: '150px', backgroundColor: 'white', borderRadius: '20px' }}>
          <div style={{ margin: 'auto', fontSize: '28px', textAlign: 'center', marginBottom: '70px' }}>
            <h1>Who do you want to shop for?</h1>
          </div>
          <div style={{ display: 'flex' }}>
            {B21.map(el => (<>
              <div style={{ textAlign: 'center' }}>

              <NavLink to={el.nav}>
                <h1 style={{ fontSize: '23px', marginBottom: '20px' }}>{el.title}</h1>
                </NavLink>
                <div style={{ padding: '5px' }}>
                  <img style={{ height: '250px', width: '220px' }} key={el.id} alt="" src={el.photo} />
                </div>
              </div>
            </>
            ))}
          </div></div>
      </Popup>
    </>
  )
}

export default HomePage
