import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Checkout() {
    let [data, setData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [currentAmount, setCurrentAmount] = useState(0);
    const [totalItem, setTotalItem] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8080/shoppingCart`)
            .then((res) => {
                setData(res.data)
            })
        if (data) {
            setTotalItem(data.length);
            let amount = 0;
            let discount = 0;
            let current = 0;
            data.forEach((item) => {
                current += item.current_price.value;
                amount += item.prev_price.value;
                discount += item?.discount ? Number.parseFloat(item.discount) : 0;
            });
            setCurrentAmount(current);
            discount /= data.length;
            setTotalAmount(amount);
            setTotalDiscount(amount - current);
        }
    }, [data.length]);
    return <>
        <div style={{ display: 'flex', padding: '100px' }}>
            <div style={{ display: 'flex' }}>
                <img style={{ width: '35px', height: '35px' }} src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt="" />
                <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
                    <h3>Delivery Address</h3>
                    <p>We will deliver your order to this address</p>

                    <div style={{ marginTop: '50px', marginLeft: '-40px',lineHeight:'40px', gap:'20px' }}>
                        <h3>User</h3>
                        
                       <input style={{border:'1px solid black',padding:'6px'}} type="text" placeholder='Full Name' required/><br />
                       <input style={{border:'1px solid black',padding:'6px'}} type="text" placeholder='Full Address' required/><br />
                       <input style={{border:'1px solid black',padding:'6px'}} type="text" placeholder='Enter Pin' required />
                    
                    </div>
                </div>
            </div>
            <div style={{ border: 'dotted', padding: '20px', height: '100px', borderRadius: '10px', margin: 'auto' }}>
                <h3 style={{ color: 'green' }}>Cash on delivery available</h3>
                <h3>Est Delivery 25 Jan</h3>
            </div>
            <div style={{ border: '1px solid white', padding: '10px 10px 0px 10px', width: '350px', height: 'auto', backgroundColor: '#FAFAFA', textAlign: 'left' }}>
                <h3>Order Details</h3>
                <p>Bag total <span style={{ marginLeft: '170px' }}>₹{parseFloat(totalAmount).toFixed(2)}</span> </p>
                <p>Bag discount <span style={{ marginLeft: '140px' }}>₹{parseFloat(totalDiscount).toFixed(2)}</span> </p>
                <p>Convenience FeeWhat's this?</p>
                <p>Delivery Fee  <span style={{ marginLeft: '140px' }}>Free</span></p>
                <h3>Order Total  <span style={{ marginLeft: '150px' }}>₹{parseFloat(currentAmount).toFixed(2)}</span></h3>
                <button style={{ backgroundColor: '#D5A249', fontSize: '13px', padding: '25px', marginTop: '20px', width: '100%', color: 'white' }} onClick={() => navigate("/payments")}>PROCEED TO PAYMENT</button>
            </div>
        </div>
        <hr />

        <div style={{ paddingLeft: '100px', display: 'flex' }}>
            <div>
                <img style={{ width: '40px', height: '40px' }} src="https://cdn-icons-png.flaticon.com/128/2900/2900216.png" alt="" />
            </div>
            <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
                <h2>Expected Delivery</h2>
                <p>Estimated delivery dates for your order</p>
            </div>
        </div>

        <div style={{ display: 'flex', paddingTop: '20px', padiingLeft: '100px' }}>
            <div style={{ paddingLeft: '100px' }}>
                <img style={{ borderRadius: '10px' }} src="https://assets.ajio.com/medias/sys_master/root/20221215/naa7/639b386cf997ddfdbdd6c26c/-78Wx98H-469193103-black-MODEL.jpg" alt="" />
            </div>
            <div style={{ textAlign: 'left', paddingLeft: '10px' }}>
                <h2>25 Jan</h2>
                <p>Pacer Marco Lace-Up Sneakers</p>
            </div>
        </div>


        <hr />

    </>
}
