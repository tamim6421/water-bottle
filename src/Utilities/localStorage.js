
// const getStoredCard = () =>{
//    const storeCardStore =  localStorage.getItem('cart')
//    if(storeCardStore){
//     return JSON.parse(storeCardStore)
//    }
//    return [];
// }

// const saveCartTolS = cart =>{
//     const cartStringify = JSON.stringify(cart)
//     localStorage.setItem('cart', cartStringify)
// }

// const addTolocalS = id =>{
//     const cart = getStoredCard()
//     cart.push(id)
//     saveCartTolS(cart)
// }


const getStoredCard = () =>{
    const storeCardstring = localStorage.getItem('cart')
    if(storeCardstring){
        return JSON.parse(storeCardstring)
    }
    return [];
}

const saveCartTolS = (cart)=>{
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
}

const addToLs = id =>{
    const cart = getStoredCard()
    cart.push(id)
    saveCartTolS(cart)
}

const removeFromLS = id =>{
    const cart = getStoredCard()
    // removing every item 
    const remaining = cart.filter( idx => idx !== id)
    saveCartTolS(remaining)
}
export {addToLs, getStoredCard, removeFromLS }