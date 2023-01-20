import React from 'react'
import Style from "../Style/Cart.module.css"
import { Button } from "@chakra-ui/react"
const CartCard = ({ id, imageUrl, brandName, images, prev_price }) => {
    return (
        <div className={Style.CartCard}>
            <div>
                <img style={{ width: "100px" }} src={imageUrl} alt="xx" />
                <p>{brandName}-{images[0].altText}</p>
                <button>+</button>
                <button>-</button>
                <h4>{prev_price.formattedValue}</h4>
            </div>
            <div className={Style.order}>
                <h1>Order Details</h1>
                <p>Bag Total</p>
                <p>Bag Discount</p>
                <h3>Order Total</h3>
                <Button>PROCEED TO SHIPPING</Button>
            </div>
        </div>
    )
}

export default CartCard