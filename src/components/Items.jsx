import { useState } from "react"
import toast from 'react-hot-toast'

function Items({ items, addToCart, setShowCart }){
    const[clickedId, setClickedId] = useState(null) //Because each item button should have a different state to change it's color

    return(
        <div className="min-h-screen bg-neutral-900 px-8 py-10 font-sans">
            <h2 className="text-4xl font-black text-blue-400 mb-2 flex items-center">
                <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-400">
                        <rect x="3" y="6" width="18" height="13" rx="2" fill="#60a5fa"/>
                        <rect x="7" y="3" width="10" height="6" rx="1" fill="#fbbf24"/>
                    </svg>
                </span>
                Fresh Picks
            </h2>
            <p className="text-gray-300 mb-8 text-lg">Hand picked items just for you</p>
            <button 
                className="mt-4 w-32 bg-blue-500 text-white py-2 rounded-lg font-semibold shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition-all duration-150 flex items-center justify-center gap-2"
                onClick={() => setShowCart(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75h19.5m-16.5 0v10.5a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25V6.75m-13.5 0V4.5A2.25 2.25 0 017.5 2.25h9A2.25 2.25 0 0118.75 4.5v2.25" />
                </svg>
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