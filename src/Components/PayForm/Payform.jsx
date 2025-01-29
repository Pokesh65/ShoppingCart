import React, { useEffect, useState } from 'react'
import './Payform.css'
import emailjs from 'emailjs-com'
import confetti from 'canvas-confetti'

function Payform({ setpay, price, setcart, cart, setShow }) {
    const [chtext, setchtext] = useState({ name: "", email: "", amount: "" })


    const changetext = (e) => {
        setchtext({ ...chtext, [e.target.name]: e.target.value })
        console.log(chtext)
    }
   




    function SendMail(e) {
        e.preventDefault(e)
        console.log(e)
        if (price === parseInt(chtext.amount)) {
            confetti({
                particleCount: 300,
                spread: 250,
                origin: { y: 0.6 }
              });
            setpay(price === parseInt(chtext.amount) ? true : false)
            setcart([])
            setShow(true)
            console.log("form Submmitted")
            return emailjs.sendForm("service_3g695l3", "template_c4t21jd",e.target,"Yw06G_sDlUuxtWY1C")
            .then(() => {
                alert("Your Order Has Been Pleased Successfully \n Your order will be arrived within 3 to 5 business day")

            })
            .catch(() => {
                alert("Something went wrong; Try again later")
            })

        }else{
            alert(`Please Pay ${price} Rupees`)
        }
        


    }

    useEffect(() => {
    }, [setchtext])

    return (

        <div class="form-container">
            <form class="form" onSubmit={SendMail}>
                <div class="form-group">
                    <span for="" name="amounttitle" value={`Amount To Pay ${price}`} className='amount-title'>Amount To Pay Rs:{price}</span>
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" onChange={(e) => changetext(e)} required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" onChange={(e) => changetext(e)} required />
                </div>
                <div class="form-group">
                    <label for="Amount">Amount</label>
                    <input type="text" id="amount" name="amount" onChange={(e) => changetext(e)} required />
                </div>
                <div class="form-group">
                    <label for="textarea">Address</label>
                    <textarea name="address" id="textarea" rows="10" cols="50" required=""></textarea>
                </div>
                <button class="form-submit-btn" type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Payform