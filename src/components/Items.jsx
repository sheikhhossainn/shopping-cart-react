import { useState } from "react"
import toast from 'react-hot-toast'
import ShoppingBag from '../assets/shopping-bag.png'
import ShoppingCart from '../assets/shopping-cart.png'

function Items({ items, addToCart, setShowCart }){
    const[clickedId, setClickedId] = useState(null) //Because each item button should have a different state to change it's color

    return(
        <div className="min-h-screen bg-neutral-900 px-8 py-10 font-sans">
            <h2 className="text-4xl font-black text-blue-400 mb-2 flex items-center">
                <span className="mr-2">
                    <img src={ShoppingBag} className="invert object-contain h-9"  />
                </span>
                Fresh Picks
            </h2>
            <p className="text-gray-300 mb-8 text-lg">Hand picked items just for you</p>
            <button 
                className="mt-4 w-32 bg-blue-500 text-white py-2 rounded-lg font-semibold shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition-all duration-150 flex items-center justify-center gap-2"
                onClick={() => setShowCart(true)}
            >
                <img src={ShoppingCart} className="object-contain h-6 invert"/>
                Go to Cart
            </button>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {items.map((item) =>(
                    <div key={item.id} className="bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-400/20">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover"/>
                        
                        <div className="p-4">
                            <h2 className="text-white text-lg font-bold mb-1">{item.name}</h2>
                            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                            <p className="text-blue-400 font-black text-xl mt-3">${item.price}</p>
                            <button 
                                className={`mt-4 w-full text-white py-2 rounded-lg font-semibold shadow hover:bg-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-150 ${clickedId === item.id ? "bg-green-500" : "bg-blue-600"}`}
                                onClick={() => {
                                    addToCart(item) 
                                    setClickedId(item.id)
                                    toast.success(`${item.name} added to cart!`)
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Items