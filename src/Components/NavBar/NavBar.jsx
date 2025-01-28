import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'


function NavBar({setShow,size}) {

    
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={()=>setShow(true)}>Shop <span>Now</span></span>
                <div className="cart" onClick={()=>setShow(false)}>
                    <span>
                        <i class="ri-shopping-cart-2-line"></i>
                    </span>
                    <span className='count'>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar