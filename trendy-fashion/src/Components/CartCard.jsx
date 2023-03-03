// import React from 'react'
// import Style from "../Style/Cart.module.css"
// import { Button } from "@chakra-ui/react"

// const CartCard = ({ id, imageUrl, brandName, images, prev_price, onDelete }) => {
//     const handleDelete = () => {
//         onDelete(id);
//     }

//     return (
//         <div className={Style.CartCard}>
//             <div>
//                 <img style={{ width: "100px" }} src={imageUrl} alt="xx" />
//                 <p>{brandName}-{images[0].altText}</p>
//                 <button>+</button>
//                 <button>-</button>
//                 <h4>{prev_price.formattedValue}</h4>
//                 <Button onClick={handleDelete}>Delete</Button>
//             </div>
//         </div>
//     )
// }

// export default CartCard


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
