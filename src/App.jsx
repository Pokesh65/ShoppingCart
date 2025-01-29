import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ShopBord from './Components/ShopDashbord/ShopBord'
import { use } from 'react'
import Card from './Components/Card/Card'
import CartList from './Components/CartList/CartList'


function App() {

  const[Show,setShow]=useState(true)
  const [cart, setcart] = useState([])
  const[price,setprice]=useState(0)

  const handleClick = (item) => {
    if(cart.indexOf(item)!==-1) return;
    setcart([...cart,item])
    console.log(cart)
 
  }

  const handlePrice=()=>{
    let countprice=0
    cart.map((item)=>(countprice+=item.amount*item.price))
    console.log(countprice)
    setprice(countprice)
  }

  const handlechange=(item,d,id)=>{
    const ind=cart.indexOf(item)
    let arr=cart;
    arr[ind].amount+=d

    if(arr[ind].amount<1){
     arr.map((item)=>item.amount=1)
     arr=cart.filter((item)=>item.id!==id);
     
    }
    setcart([...arr])
  }

  useEffect(()=>{
    handlePrice()
  },[cart])
  
  return (
   <div>
    <NavBar setShow={setShow} Show={Show} size={cart.length}/>
    {Show?<ShopBord handleClick={handleClick} />:<CartList cart={cart} setcart={setcart} handlechange={handlechange} price={price} handlePrice={handlePrice} setShow={setShow} />}
   </div>
  )
}

export default App
