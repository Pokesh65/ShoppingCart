import React from 'react'
import './CartList.css'
import Cart from '../Cart/Cart'

function CartList({cart,setcart,handlechange,price,handlePrice}) {



  return (
    <div className='CartList-main'>
      {cart.map((item)=><Cart item={item} cart={cart} setcart={setcart} handlechange={handlechange}/>)}
      <div className='CartList-total'>
        <p><i class="ri-bill-line"></i>  To Pay</p><p>Rs-{price}</p>
      </div>
    </div>
  )
}

export default CartList