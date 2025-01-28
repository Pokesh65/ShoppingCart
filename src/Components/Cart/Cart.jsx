import React from 'react'
import './Cart.css'

function Cart({ item, cart, setcart, handlechange,price,handlePrice}) {
    // const { id, title, author, price, img, amount } = item;


    return (
        <div className='cart-main'>
            <div className="cart-image-box">
                <img src={item.img} alt="items" />
            </div>
            <div className="cart-details">
                <p>{item.title}</p>
                
                <p>
                    <div className='cart-button'>
                        <button onClick={()=>handlechange(item,-1,item.id)}>-</button>
                        <p>{item.amount}</p>
                        <button onClick={()=>handlechange(item,1,item.id)}>+</button>
                    </div>
                </p>
                <p>{item.price}</p>
            </div>
        </div>
    )
}

export default Cart