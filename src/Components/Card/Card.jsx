import React, { useState } from 'react'
import './Card.css'

function Card({item,handleClick}) {
    
    const {id,title,author,price,img,amount}=item;

  return (
    <div className="cards" key={id}>
        <div className="image_box">
            <img src={img} alt='items' ></img>
        </div>
        <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>Price-₹{price}</p>
                <button title='add cart to buy' onClick={()=>handleClick(item)}>Add cart</button>
          </div>
    </div>
  )
}

export default Card