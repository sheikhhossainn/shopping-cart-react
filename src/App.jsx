import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import itemLists from './data/items'
import Items from './components/Items'
import CartItems from './components/CartItems'
import toast, { Toaster } from 'react-hot-toast'
import Login from './components/Login'
import Navbar from './components/Navbar'
import UserProfileSettings from './components/UserProfileSettings'
import './App.css'

function App() {

  const navigate = useNavigate()

  const [cart, setCart] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const removeCartItems = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id != item.id))
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    localStorage.removeItem("user")
    toast.success("Logged out!")
    navigate('/')
  }

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser))
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <>
      {isLoggedIn && <Navbar currentUser={currentUser} handleLogout={handleLogout} />}

      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/shop" /> : <Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
        <Route path="/shop" element={isLoggedIn ? <Items items={itemLists} addToCart={addToCart} /> : <Navigate to="/" />} />
        <Route path="/cart" element={isLoggedIn ? <CartItems addCartItem={cart} removeCartItems={removeCartItems} /> : <Navigate to="/" />} />
        <Route path='/settings'element={isLoggedIn ? <UserProfileSettings currentUser={currentUser} /> : <Navigate to="/" />}/>
      </Routes>

      <Toaster position="top-right" />
    </>
  )
}

export default App