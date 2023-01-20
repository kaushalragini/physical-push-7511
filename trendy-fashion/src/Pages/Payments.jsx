import React from 'react'



export default function Pay() {

  const inpu={
    border:'1px solid black',
    padding:'20px',
    width:'700px',
    textAlign:'left'

  }
  return (
    <div style={{display:'flex', padding:'100px', justifyContent:'space-between'}}>
<div style={{ height:'400px', width:'800px'}}>
  <div style={{display:'flex'}}>
  <div style={{border:'dotted', display:'flex',padding:'20px', fontSize:'12px'}}>

<p>Earn up to 5% AJIO Points (up to 200) and pay up to 3% using AJIO Points (up to 200) on orders for 2999 or above. T&C</p>
  </div>
  <div style={{border:'dotted', display:'flex',padding:'20px', fontSize:'12px'}}>
    <p>Get 10% Instant Discount of up to Rs. 1000 on a minimum transaction value of Rs 3500 using FEDRAL BANK Credit & Debit Cards. T&C</p>
  </div>
  </div>
  <div style={{display:'flex', justifyContent:'space-between', marginTop:'50px'}}>
  <h2>Select Redeem Option</h2>
  <div  style={{display:'flex', justifyContent:'space-between'}}>
  <h5>Verify OTP to use redemption options</h5>
  <button style={{backgroundColor:'#D5A249', marginTop:'-12px' ,fontSize:'13px',padding:'13px',color:'white'}}>Verify with OTP</button>
  </div>
  </div>

  <div style={{textAlign:'left', padding:'20px',marginTop:'20px', border:'1px solid black'}}>
    <h3>AJIO Wallet</h3>
    <input type="checkbox" />
    <label>You are eligible to use ₹60 of ₹60</label>
    <br />
    <br />

    <h3>Loyalty Points</h3>
    <input type="checkbox" />
    <label >You have no Loyalty Points at the moment</label>
    <br />
    <hr />
    </div>
<div style={{display:'flex', justifyContent:'space-between', textAlign:'left', padding:'10px'}}>

<div>
  <h4>Have a Gift Card?</h4>
  <h3>Add it to AJIO Wallet to pay for your orders</h3></div>
  <h4>Add Gift Card</h4>
</div>
<br />
<br />
<h2 style={{marginLeft:'-650px'}}>Select Payment Mode</h2>
<br />
<div style={{display:'flex'}}>
<div style={{textAlign:'left', border:'1px solid black',height:'300px', fontSize:'12px', padding:'20px'}}>

<br />
  <h3>Credit/ Debit Card</h3>
  <hr />
  <br />
  <h4>NetBanking</h4>
  <br />
  <h4>Wallet</h4>
  <br />
  <h4>UPI</h4>
  <br />
  <h4>Cash on Delivery</h4>
</div>
<div style={inpu}>
  <h2>Add New Card</h2><br />

  <h3>Card Number</h3>
  <input style={{border:'1px solid black', width:'400px'}} type="number"/>
  <br />
  <br />

  <h3>Name on Card</h3>
  <input style={{border:'1px solid black', width:'400px'}} type="text"/>
  <br />
  <br />

  <h3>Expiration Date</h3>
  <input style={{border:'1px solid black', width:'400px'}} type="date"/>
<br />
<br />

<input type="checkbox" />
<label>Save this card securely</label>
<br />
<br />
<button style={{backgroundColor:'#D5A249' ,fontSize:'13px',padding:'13px',color:'white'}}>PAY SECURELY</button>
</div>
</div>
    
</div>

<div style={{border:'1px solid white',padding:'10px 10px 0px 10px', width:'auto',height:'200px', backgroundColor:'#FAFAFA', textAlign:'left'}}>
            <h3>Order Summary</h3>  
            <p>Bag total <span style={{marginLeft:'170px'}}>₹4,499.00</span> </p>
            <p>Bag discount <span style={{marginLeft:'140px'}}>₹2,519.00</span> </p>
            <p>Convenience FeeWhat's this?</p>
            <p>Delivery Fee  <span style={{marginLeft:'140px'}}>Free</span></p>
            <h3>Order Total  <span style={{marginLeft:'150px'}}>₹2,519.00</span></h3>
            <h3>Amount Payable  <span style={{marginLeft:'110px'}}>₹2,519.00</span></h3>
         </div>  
    </div>
    
  )
}
