import axios from "axios";
import Style from "../Style/Cart.module.css";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CartCard from "../Components/CartCard";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/shoppingCart`)
      .then((res) => {
        setData(res.data)
      })
  }, [])

  useEffect(() => {
    if (data) {
      setTotalItem(data.length);
      let amount = 0;
      let discount = 0;
      data.forEach((item) => {
        amount += item.current_price.value;
        discount += item?.discount ? Number.parseFloat(item.discount) : 0;
      });
      discount /= data.length;
      setTotalAmount(amount);
      setTotalDiscount(discount);
    }
  }, [data])

  const deleteProduct = (productId) => {
    const updatedData = data.filter(item => item.id !== productId);
    setData(updatedData);
  }

  return (
    <div className={Style.cart}>
      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-without%20CTA----.jpg" alt="" />
      </div>
      <div>
        <div>
          {data.map((el) => (
            <div key={el.id}>
              <CartCard {...el} onDelete={deleteProduct} />
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <div className={Style.cart1}>
        <div>
          <img src="https://i.imgur.com/IrT8hXc.jpg" alt="" />
          <img src="https://i.imgur.com/vXuwQbM.jpg" alt="" />
          <img src="https://i.imgur.com/u0fEtTN.jpg" alt="" />
          <img src="https://i.imgur.com/g83q8TG.jpg" alt="" />
        </div>
      </div>
      <div className={Style.order}>
        <h1>Order Details</h1>
        <p>Bag Total : {totalItem}</p>
        <p><b>{`Bag Discount : ${parseFloat(totalDiscount).toFixed(2)} % OFF`}</b></p>
        <h3>Order Total : {parseFloat(totalAmount).toFixed(2)}</h3>
     </div>
       <Button onClick={() => navigate("/checkout")}>PROCEED TO SHIPPING</Button>
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

export default CartPage
