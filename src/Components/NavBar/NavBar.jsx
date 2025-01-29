import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'


function NavBar({setShow,size,Show}) {

    
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={()=>setShow(true)}>Shop <span>Now</span></span>
                <div className="cart" onClick={()=>setShow(Show?false:true)}>
                    <span>
                        <i class="ri-shopping-cart-2-line"></i>
                    </span>
                    <span className='count' style={{opacity:size>0?1:0}}>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar