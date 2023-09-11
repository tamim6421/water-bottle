import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLs, getStoredCard, removeFromLS } from '../../Utilities/localStorage';
import Cart from '../Cart/Cart';
const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect( ()=>{
        fetch('bottles.json')
        .then( res => res.json())
        .then( data => setBottles(data))
    } ,[])

    // load cart form local store 
    useEffect( () =>{
        // console.log(bottles.length)
      if(bottles.length > 0){
        const storeCard = getStoredCard()

    //   console.log(storeCard, bottles)

      const saveCart = []
        for(const id of storeCard){
            // console.log(id)
            const bottle = bottles.find( bottle => bottle.id === id)
            if(bottle){
                saveCart.push(bottle)
            }
        }
        // console.log(saveCart)
        setCart(saveCart)

      }
    } ,[bottles])

    const handleAddToCard = (bottle) =>{
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLs(bottle.id)
    }

    // remove cart 
const handleRemoveFromCart = id =>{
    const reaminingCart = cart.filter( bottle => bottle.id !== id)
    setCart(reaminingCart)
    removeFromLS(id)
}

    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <Cart cart= {cart} handleRemoveFromCart={handleRemoveFromCart} ></Cart>


            <div className='bottle_container'>
            
            {
                bottles.map((bottle) => <Bottle
                 key={bottle.id} 
                 handleAddToCard ={handleAddToCard}
                 bottle={bottle}></Bottle>)
            }
        </div>
        </div>
       
    );
};

export default Bottles;