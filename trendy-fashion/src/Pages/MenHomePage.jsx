import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ImageSlider, { Slide } from "react-auto-image-slider";
import './HomePage.css';
import Popup from 'reactjs-popup';
import { NavLink } from 'react-router-dom';


const MenHomePage = () => {

  const [Mb1, setMb1] = useState([]);
  const [B2, setB2] = useState([]);
  const [Mb2, setMb2] = useState([]);
  const [Mb3, setMb3] = useState([]);
  const [Mb4, setMb4] = useState([]);
  const [Mb5, setMb5] = useState([]);
  const [Mb6, setMb6] = useState([]);
  const [Mb7, setMb7] = useState([]);
  const [Mb8, setMb8] = useState([]);
  const [Mb9, setMb9] = useState([]);
  const [Mb10, setMb10] = useState([]);
  const [Mb11, setMb11] = useState([]);
  const [Mb12, setMb12] = useState([]);
  const [Mb13, setMb13] = useState([]);
  const [Mb14, setMb14] = useState([]);
  const [Mb15, setMb15] = useState([]);




  const [B21, setB21] = useState([]);




  useEffect(() => {
    axios.get('http://localhost:8080/Banner')
      .then(response => {
        console.log(response.data.MenBanner1)

        setMb1(response.data.MenBanner1)
        setB2(response.data.Banner2)
        setMb2(response.data.MenBanner2)
        setMb3(response.data.MenBanner3)
        setMb4(response.data.MenBanner4)
        setMb5(response.data.MenBanner5)
        setMb6(response.data.MenBanner6)
        setMb7(response.data.MenBanner7)
        setMb8(response.data.MenBanner8)
        setMb9(response.data.MenBanner9)
        setMb10(response.data.MenBanner10)
        setMb11(response.data.MenBanner11)
        setMb12(response.data.MenBanner12)
        setMb13(response.data.MenBanner13)
        setMb14(response.data.MenBanner14)
        setMb15(response.data.MenBanner15)





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
        {Mb1.map(el => (
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
          {Mb2.map(el => (
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
          {Mb3.map(el => (
            <Slide >
              <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
            </Slide>)
          )}
        </ImageSlider>
      </div>

      <div style={{ marginTop: '380px' }}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-freedel-allorders.jpg" alt="" />
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-d-MHP-topbrandstobuy-header.jpg" alt="" />
      </div>


      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Mb4.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-ajioexclusives-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Mb5.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-nevermissagooddeal-header.jpg" alt="" />
      </div>


      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Mb6.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Mb7.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-hiddengemstoexplore-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Mb8.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-menswearmyriad-header%20(1).png" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Mb9.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-nomorewinterblues-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Mb10.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>
      
      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-elevateyourstyle-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Mb11.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-d-MHP-fitsthatnevergooutofstyle-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Mb12.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-stampofapprovalfromtheststars-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Mb13.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>

      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-feelstylishinside&out-header.jpg" alt="" />
      </div>

      <div className='imgdiv4' style={{ display: 'flex' }}>
        {Mb14.map(el => (
          <img style={{ height: '450px' }} key={el.id} alt="" src={el.photo} />
        ))}
      </div>
     

      <div>
        <img src=" https://assets.ajio.com/cms/AJIO/WEB/06012023-D-MHP-onlinestorestoexplore-header.png" alt="" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {Mb15.map(el => (
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

export default MenHomePage
