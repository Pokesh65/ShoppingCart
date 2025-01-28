import React, { useState } from 'react';
import './ShopBord.css';
import list from '../../Data.jsx';
import Card from '../Card/Card.jsx';

function ShopBord({handleClick}) {

  return (
    <section className='ShopBord-main'>
      {list.map((item) => <Card key={item.id} item={item}  handleClick={handleClick}/>)}
    </section>
  )
}

export default ShopBord