import React from 'react'

export default function Checkout() {
  return <>
    <div style={{display:'flex', padding:'100px'}}>
        <div style={{display:'flex'}}>
            <img style={{width:'35px', height:'35px'}} src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt="" />
            <div style={{textAlign:'left',paddingLeft:'20px'}}>
            <h3>Delivery Address</h3>
            <p>We will deliver your order to this address</p>

            <div style={{marginTop:'50px', marginLeft:'-40px'}}>
                <h3>Swapnil</h3>
                <p>Default <br />
                r26, n9,<br />raigad nagar,<br />aurangabad, maharashtra <br />india - 431003 <br />Phone : 9049127078</p>
            </div>
            </div>
            </div>
        <div style={{border:'dotted', padding:'20px', height:'100px',borderRadius:'10px', margin:'auto'}}>
            <h3 style={{color:'green'}}>Cash on delivery available</h3>
            <h3>Est Delivery 25 Jan</h3>
        </div>
        <div style={{border:'1px solid white',padding:'10px 10px 0px 10px', width:'350px',height:'auto', backgroundColor:'#FAFAFA', textAlign:'left'}}>
            <h3>Order Details</h3>  
            <p>Bag total <span style={{marginLeft:'170px'}}>₹4,499.00</span> </p>
            <p>Bag discount <span style={{marginLeft:'140px'}}>₹2,519.00</span> </p>
            <p>Convenience FeeWhat's this?</p>
            <p>Delivery Fee  <span style={{marginLeft:'140px'}}>Free</span></p>
            <h3>Order Total  <span style={{marginLeft:'150px'}}>₹2,519.00</span></h3>
            <button style={{backgroundColor:'#D5A249',fontSize:'13px',padding:'25px',marginTop:'20px', width:'100%',color:'white'}}>PROCEED TO PAYMENT</button>
         </div>
    </div>
         <hr />

    <div style={{paddingLeft:'100px', display:'flex'}}>
    <div>
        <img style={{width:'40px', height:'40px'}} src="https://cdn-icons-png.flaticon.com/128/2900/2900216.png" alt="" />
    </div>
    <div style={{textAlign:'left', paddingLeft:'20px'}}>
    <h2>Expected Delivery</h2>
    <p>Estimated delivery dates for your order</p> 
    </div>
    </div>

<div style={{display:'flex',paddingTop:'20px', padiingLeft:'100px'}}>
    <div style={{paddingLeft:'100px'}}>
        <img style={{borderRadius:'10px'}} src="https://assets.ajio.com/medias/sys_master/root/20221215/naa7/639b386cf997ddfdbdd6c26c/-78Wx98H-469193103-black-MODEL.jpg" alt="" />
    </div>
<div style={{textAlign:'left',paddingLeft:'10px'}}>
    <h2>25 Jan</h2>
    <p>Pacer Marco Lace-Up Sneakers</p>
</div>
</div>
    

<hr />

    </>
}
