import React, { useState } from 'react';
import './CartList.css';
import Cart from '../Cart/Cart';
import Payform from '../PayForm/Payform';

function CartList({ cart, setcart, handlechange, price,setShow }) {
  const [pay, setpay] = useState(true);

  return (
    <div className="CartList-main">
      {pay ? (
        <>
          {cart.map((item) => (
            <Cart
              key={item.id}
              item={item}
              cart={cart}
              setcart={setcart}
              handlechange={handlechange}
            />
          ))}
          <div className="CartList-total">
            <button className="cartlist-Btn" onClick={() => setpay(false)}>
              <p className="btn-content">
                <svg className="svgIcon" viewBox="0 0 576 512">
                  <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                </svg>
                <p>To Pay</p>
              </p>
              <span>Rs: {price}</span>
            </button>
          </div>
        </>
      ) : (
        <Payform setpay={setpay} price={price} setcart={setcart} cart={cart} setShow={setShow}/>
      )}
    </div>
  );
}

export default CartList;
