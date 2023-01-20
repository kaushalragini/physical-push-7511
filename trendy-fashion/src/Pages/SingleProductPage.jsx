import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import Style from "../Style/SinglePage.module.css";
import Slider from "react-slick";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { callData } from '../utils';
const SingleProductPage = (id) => {
  const paramData = useParams();
  const param = paramData.param;
  const dispatch = useDispatch();
  const product_id = paramData.param4;
  const productData = useSelector((store) => store.AppReducer);
  const [singleData, setSingleData] = useState({});
  let displayData = [];
  switch (param) {
    default:
      displayData = [];
      break;
    case "footwear":
      displayData = productData.menFootwear;
      break;
    case "accessories":
      displayData = productData.menAccessories;
      break;
    case "clothing":
      displayData = productData.menClothing;
      break;
  }
  console.log(displayData);
  // let [data, setData] = useState([])
  let navigate = useNavigate()
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    cssEase: "linear"
  };
  useEffect(() => {
    if (displayData.length === 0) {
      callData(param, dispatch);
    }
  }, [displayData.length, dispatch]);
  useEffect(() => {
    if (product_id) {
      const aa = displayData.find((item) => {
        return +item.id === +product_id;
      })
      console.log(aa);
      singleData && setSingleData(aa);
    }
  }, [id]);

  return (
    <div>
      <div>
        {
          JSON.stringify(singleData) !== "{}" &&
          <div key={singleData.id} className={Style.Product}>
            <div >
              <img src={singleData.imageUrl} alt="xx" />
              {console.log("img", singleData.imageUrl)}
            </div>
            <div >
              <h1>{singleData.brandName}</h1>
              <h3>{singleData.images[0].altText}</h3>
              <p>{singleData.prev_price.formattedValue}</p>
              <h2>MRP: (72% off)</h2>
              <h4>Price inclusive of all Taxes</h4>
              <div>
                <img src="https://assets.ajio.com/medias/sys_master/root/20220806/sZaH/62ed8215f997dd03e229a32d/-464773260-grey-SWATCH.jpg" alt="" />
                <img src="https://assets.ajio.com/medias/sys_master/root/20220806/QJgP/62ed8286aeb26921afcc7842/-464773260-red-SWATCH.jpg" alt="" />
                <img src="https://assets.ajio.com/medias/sys_master/root/20220811/J0En/62f40b14f997dd03e23b7de6/-464773260-black-SWATCH.jpg" alt="" />
                <img src="https://assets.ajio.com/medias/sys_master/root/20220812/xZC9/62f571faaeb26921afe1ddcb/-464773260-green-SWATCH.jpg" alt="" />
              </div>
              <p style={{ marginLeft: "-110px", marginTop: "10px", fontWeight: "400", fontSize: '15px' }}>Select Size (UK)</p>
              <div>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
              </div>
              <div className={Style.button1}>
                <button onClick={() => navigate(`/product/${id}`)} >
                  ADD TO BAG</button>
                <button >
                  SAVE TO WHISLIST</button>
              </div>
              <h1 style={{ color: "#406786", fontSize: "14px", fontWeight: "700", marginLeft: "-200px" }}>Product Details</h1>
              <div className={Style.list}>
                <ul>
                  <li >Wipe with a clean, dry cloth when needed</li>
                  <li >Memory foam insole</li>
                  <li >Lace Fastening</li>
                  <li  >Mesh upper</li>
                  <li  >Package contains: 1 pair of shoes</li>
                  <li  >Lightweight</li>
                  <li  >EVA sole</li>
                  <li  >Product Code: 464773260003</li>
                </ul>
              </div>
            </div>
          </div>
        }
      </div>
      <div className={Style.button}>
        <button>All Sport Shoes</button>
        <button>Style:Running</button>
        <button>Color :Grey</button>
        <button>Brand:Walkstyle</button>
      </div>
      <div className={Style.slider}>
        <h1>Similar Types</h1>
        <Slider {...settings}>
          <div>
            <img src="https://assets.ajio.com/medias/sys_master/root/20221014/hsXw/63494215aeb269659c45401b/jqr-grey-running-textured-lace-up-sports-shoes.jpg" alt="" />
            <h1>BUCIK</h1>
            <h3>Mid-Top Lace-Up Shoes</h3>
            <p>Rs-685</p>
          </div>
          <div>
            <img src="https://assets.ajio.com/medias/sys_master/root/20221227/vu6Z/63ab2155aeb269659c108fbe/jqr-grey-running-round-toe-slip-on-running-shoes.jpg" alt="" />
            <h1>WALKSTYLE</h1>
            <h3>Fast-Running-Shoes</h3>
            <p>Rs-264</p>
          </div>
          <div>
            <img src="https://assets.ajio.com/medias/sys_master/root/20221004/vH6U/633b4caaf997ddfdbd06167c/yuuki-white-running-mid-top-running-shoes.jpg" alt="" />
            <h1>BUCIK</h1>
            <h3>Mid-Top Lace-Up Shoes</h3>
            <p>Rs-1545</p>
          </div>
          <div>
            <img src="https://assets.ajio.com/medias/sys_master/root/20220324/VONM/623c78b1aeb26921aff21fb5/taurene-grey-walking-mid-top-lace-up-shoes.jpg" alt="" />
            <h1>BUCIK</h1>
            <h3>Mid-Top Lace-Up Shoes</h3>
            <p>Rs-567</p>
          </div>
          <div>
            <img src="https://assets.ajio.com/medias/sys_master/root/20220805/fgEl/62ec4038f997dd03e2248453/walkstyle-black-running-sports-shoes-with-laces-fasterning.jpg" alt="" />
            <h1>BUCIK</h1>
            <h3>Mid-Top Lace-Up Shoes</h3>
            <p>Rs-2890</p>
          </div>
          <div>
            <img src="https://assets.ajio.com/medias/sys_master/root/20220805/c4MO/62ec3ceaaeb26921afc78cf3/walkstyle-white-running-sports-shoes-with-laces-fasterning.jpg" alt="" />
            <h1>BUCIK</h1>
            <h3>Mid-Top Lace-Up Shoes</h3>
            <p>Rs-1085</p>
          </div>
          <div>
            <img src="https://assets.ajio.com/medias/sys_master/root/20221014/ZJAn/634941f5aeb269659c453b20/jqr-navy-running-textured-lace-up-sports-shoes.jpg" alt="" />
            <h1>BUCIK</h1>
            <h3>Mid-Top Lace-Up Shoes</h3>
            <p>Rs-1185</p>
          </div>
          <div>
            <img src="https://assets.ajio.com/medias/sys_master/root/20220806/8Zou/62ed864ef997dd03e229d373/walkstyle-black-running-running-sports-shoes-with-mesh-upper.jpg" alt="" />
            <h1>ADIDAS</h1>
            <h3>Mid-Top Lace-Up Shoes</h3>
            <p> Rs-455</p>
          </div>
        </Slider>
      </div>
      <div className={Style.icons}>
        <div >
          <img src="https://i.imgur.com/OOGqWGt.jpg" alt="" />
          <h1>EASY EXCHANGE</h1>
        </div>
        <div>
          <img src="https://i.imgur.com/HaljMRO.jpeg" alt="" />
          <h1>100% HANDPICKED</h1>
        </div>
        <div>
          <img src="https://i.imgur.com/qCbHuZt.jpg" alt="" />
          <h1>ASSUERD QUALITY</h1>
        </div>
      </div>
    </div>
  )
}
export default SingleProductPage
