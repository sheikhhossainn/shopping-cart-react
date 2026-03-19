import { useState } from 'react'
import itemLists from './data/items'
import Items from './components/Items'
import CartItems from './components/CartItems'
import toast, { Toaster } from 'react-hot-toast'
import Login from './components/Login'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  const[cart, setCart] = useState([]) // cart starts as an empty array because it will hold multiple items
  const[showCart, setShowCart] = useState(false)
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const[currentUser, setCurrentUser] = useState(null)

  const addToCart = (item) =>{
      setCart([...cart, item])
  }

  const removeCartItems = (item) =>{
    setCart(cart.filter((cartItem) => cartItem.id != item.id))
  }

  const handleLogout = () =>{
    setIsLoggedIn(false)
    setCurrentUser(null)
    toast.success("Logged out!")
  }

  return (
    <>
      {/* <Items items={itemLists} addToCart={addToCart}/> */}
      {/* <CartItems addCartItem={cart} removeCartItems={removeCartItems} setShowCart={setShowCart}/> */}

      {/*
      {showCart 
        ? <CartItems addCartItem={cart} removeCartItems={removeCartItems} setShowCart={setShowCart} />
        : <Items items={itemLists} addToCart={addToCart} setShowCart={setShowCart}/>
      }
      
      */}

      {/*{isLoggedIn
          ? showCart
              ? <CartItems addCartItem={cart} removeCartItems={removeCartItems} setShowCart={setShowCart} />
              : <Items items={itemLists} addToCart={addToCart} setShowCart={setShowCart}/>
          : <Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser}/>
      }*/}
      
      {isLoggedIn
          ? <>
              <Navbar currentUser={currentUser} handleLogout={handleLogout}/>
              {showCart
                ? <CartItems addCartItem={cart} removeCartItems={removeCartItems} setShowCart={setShowCart} />
                : <Items items={itemLists} addToCart={addToCart} setShowCart={setShowCart}/>
              }
            </>
          : <Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser}/>
      }

      <Toaster position="top-right" />

    </>
  )
}

export default App
