import React from 'react';
import { Button } from "@chakra-ui/react";
import Style from "../Style/Cart.module.css";

const CartCard = ({id, imageUrl, brandName, current_price, discount, onDelete}) => {
  return (
    <div className={Style.cartcard}>
      <div style={{display:'flex',padding:'40px'}} className={Style.cartcarditem}>
        <div style={{width:'200px'}}>
          <img src={imageUrl}alt="product" />
        </div>
        <div style={{paddingTop:'100px', paddingLeft:'200px'}}>
          <h2>{brandName}</h2>
          <p><b>Price: {current_price.currency} {current_price.value}</b></p>
          {discount && (
            <p><b>Discount: {discount}</b></p>
          )}
          <Button onClick={() => onDelete(id)}>Remove</Button>
        </div>
      </div>
    </div>
  )
}

export default CartCard;
