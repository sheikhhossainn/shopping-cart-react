import { useState } from "react"
import toast from 'react-hot-toast'

function Items({ items, addToCart, setShowCart }){
    const[clickedId, setClickedId] = useState(null) //Because each item button should have a different state to change it's color

    return(
        <div className="min-h-screen bg-gray-950 px-8 py-10">
            <h2 className="text-4xl font-extrabold text-white mb-2">🛒 Fresh Picks</h2>
            <p className="text-gray-400 mb-8">Hand picked items just for you</p>
            <button 
                className="mt-4 w-30 bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:cursor-pointer hover:bg-indigo-500 active:scale-95 transition-all duration-150"
                onClick={() => setShowCart(true)}
            >
                🛒 Go to Cart
            </button>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item) =>(
                    <div key={item.id} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover"/>
                        
                        <div className="p-4">
                            <h2 className="text-white text-lg font-bold">{item.name}</h2>
                            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                            <p className="text-indigo-400 font-extrabold text-xl mt-3">${item.price}</p>
                            <button 
                                className={`mt-4 w-full text-white py-2 rounded-xl font-semibold hover:cursor-pointer active:scale-95 transition-all duration-150 ${clickedId === item.id ? "bg-green-500" : "bg-indigo-600"}`}
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