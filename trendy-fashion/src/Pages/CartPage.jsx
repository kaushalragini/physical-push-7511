import axios from "axios"
import style from "../style/Cart.module.css"
import { useState,useEffect } from 'react'
import { useParams } from "react-router-dom"
import CartCard from "./CartCard"
const CartPage = () => {
  let [data,setData]=useState([])
  let {id}=useParams()
  console.log(id)
  useEffect(()=>{
    axios.get(`http://localhost:8080/menFootwear`)
.then((res)=>{
setData(res.data)
})
},[])
  return (
    <div className={style.cart}>
     <div>
      <img src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-without%20CTA----.jpg" alt="" />

     </div>
     <div>
      <div>
{data.map((el)=>(
  <div key ={el.id}>
   <CartCard {...el}/>
  </div>
))}
      </div>
      <div></div>
     </div>
     <div className={style.cart1}>
      <div>
      <img src="https://i.imgur.com/IrT8hXc.jpg" alt="" />
      <img src="https://i.imgur.com/vXuwQbM.jpg" alt="" />
      <img src="https://i.imgur.com/u0fEtTN.jpg" alt="" />
      <img src="https://i.imgur.com/g83q8TG.jpg" alt="" />
      </div>
     </div>
     <div className={style.icons}>
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
