import { useState } from 'react'
import itemLists from './data/items'
import Items from './components/Items'
import CartItems from './components/CartItems'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {

  const[cart, setCart] = useState([]) // cart starts as an empty array because it will hold multiple items
  const[showCart, setShowCart] = useState(false)

  const addToCart = (item) =>{
      setCart([...cart, item])
  }

  const removeCartItems = (item) =>{
    setCart(cart.filter((cartItem) => cartItem.id != item.id))
  }

  return (
    <>
      {/* <Items items={itemLists} addToCart={addToCart}/> */}
      {/* <CartItems addCartItem={cart} removeCartItems={removeCartItems} setShowCart={setShowCart}/> */}

      {showCart 
        ? <CartItems addCartItem={cart} removeCartItems={removeCartItems} setShowCart={setShowCart} />
        : <Items items={itemLists} addToCart={addToCart} setShowCart={setShowCart}/>
      }

      <Toaster position="top-right" />

    </>
  )
}

export default App
