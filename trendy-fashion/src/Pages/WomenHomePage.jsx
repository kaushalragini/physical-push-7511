import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ImageSlider, { Slide } from "react-auto-image-slider";
import './HomePage.css';
import Popup from 'reactjs-popup';
import { NavLink } from 'react-router-dom';


const WomenHomePage = () => {

  const [Wb1, setWb1] = useState([]);
  const [B2, setB2] = useState([]);
  const [Wb2, setWb2] = useState([]);
  const [Wb3, setWb3] = useState([]);
  const [Wb4, setWb4] = useState([]);
  const [Wb5, setWb5] = useState([]);
  const [Wb6, setWb6] = useState([]);
  const [Wb7, setWb7] = useState([]);
  const [Wb8, setWb8] = useState([]);
  const [Wb9, setWb9] = useState([]);
  const [Wb10, setWb10] = useState([]);
  const [Wb11, setWb11] = useState([]);
  const [Wb12, setWb12] = useState([]);
  const [Wb13, setWb13] = useState([]);
  const [Wb14, setWb14] = useState([]);
  const [Wb15, setWb15] = useState([]);
  const [Wb16, setWb16] = useState([]);
  const [Wb17, setWb17] = useState([]);
  const [Wb18, setWb18] = useState([]);


  const [B21, setB21] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/Banner')
      .then(response => {
        console.log(response.data.WomenBanner1)

        setWb1(response.data.WomenBanner1)
        setB2(response.data.Banner2)
        setWb2(response.data.WomenBanner2)
        setWb3(response.data.WomenBanner3)
        setWb4(response.data.WomenBanner4)
        setWb5(response.data.WomenBanner5)
        setWb6(response.data.WomenBanner6)
        setWb7(response.data.WomenBanner7)
        setWb8(response.data.WomenBanner8)
        setWb9(response.data.WomenBanner9)
        setWb10(response.data.WomenBanner10)
        setWb11(response.data.WomenBanner11)
        setWb12(response.data.WomenBanner12)
        setWb13(response.data.WomenBanner13)
        setWb14(response.data.WomenBanner14)
        setWb15(response.data.WomenBanner15)
        setWb16(response.data.WomenBanner16)
        setWb17(response.data.WomenBanner17)
        setWb18(response.data.WomenBanner18)


        setB21(response.data.Banner21)

      })
  }, [])
  ///////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-MainBanner-SectionHeaderStrip.gif" alt="" />
      </div>

      <ImageSlider effectDelay={800} autoPlayDelay={2000}>
        {Wb1.map(el => (
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
        <img src="https://assets.ajio.com/cms/AJIO/WEB/Strip-1_D.gif" alt="" />
      </div>


      <div style={{ height: '100px' }}>
        <ImageSlider style={{ border: '5px solid red', padding: '20px' }} effectDelay={600} autoPlayDelay={2000}>
          {Wb2.map(el => (
            <Slide >
              <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
            </Slide>)
          )}
        </ImageSlider>
      </div>

      <div style={{ marginTop: '380px' }}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/Strip-5_D.gif" alt="" />
      </div>

      <div style={{ height: '100px' }}>
        <ImageSlider style={{ border: '5px solid red', padding: '20px' }} effectDelay={600} autoPlayDelay={2000}>
          {Wb3.map(el => (
            <Slide >
              <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
            </Slide>)
          )}
        </ImageSlider>
      </div>

      <div style={{ marginTop: '380px' }}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-WHP-DD-AJIOMANIA-sponsorbrands-sectionheader.jpg" alt="" />
      </div>


      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb4.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />

        ))}
      </div>
      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-freedel-allorders.jpg" alt="" />
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-WHP-DD-AJIOMANIA-ajioexclusive-sectionheader.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb5.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-WHP-DD-AJIOMANIA-winterwear-sectionheader.jpg" alt="" />
      </div>


      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb6.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-WHP-DD-AJIOMANIA-bestdeals-sectionheader.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb7.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb8.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb9.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-WHP-DD-AJIOMANIA-JIT-sectionheader.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb10.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-menswearmyriad-header%20(1).png" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb11.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-nomorewinterblues-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb12.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>
      
      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-WHP-DD-AJIOMANIA-winterwardrobe-sectionheader.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb13.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-WHP-DD-AJIOMANIA-westernwear-sectionheader.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb14.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-stampofapprovalfromtheststars-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb15.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>


      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-WHP-DD-AJIOMANIA-classicbrands-sectionheader.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Wb16.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-WHP-DD-AJIOMANIA-topbands-sectionheader.jpg" alt="" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
        {Wb17.map(el => (
          <img key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src=" https://assets.ajio.com/cms/AJIO/WEB/06012023-WHP-DD-AJIOMANIA-discoveronline-sectionheader.jpg" alt="" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {Wb18.map(el => (
          <img key={el.id} alt="" src={el.photo} />
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

export default WomenHomePage
