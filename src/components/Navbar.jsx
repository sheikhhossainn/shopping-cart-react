import Logo from "../assets/fruits-logo.png"
import Logout from "../assets/logout-icon.png"
import { useState } from "react"

function Navbar({ currentUser, handleLogout }) {

    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <nav className="bg-gray-900 border-b border-gray-800 px-8 py-4 flex justify-between items-center">
            <div className="flex flex-col">
                <img src={Logo} className="h-12 object-contain invert" />
                <p className="text-gray-400 text-xs">Eat fresh fruits</p>
            </div>

            <div className="relative flex items-center gap-2 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                <span className="text-gray-400 text-sm">{currentUser.name}</span>
                <img
                    src={currentUser.image}
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
                />
                <span className={`text-gray-400 text-xs transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}>
                    ▼
                </span>

                {showDropdown &&
                    <div className="absolute right-0 top-14 bg-gray-800 border border-gray-700 rounded-xl shadow-xl shadow-black/40 p-3 w-48 z-50">
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-700 mb-2">
                            <img src={currentUser.image} className="w-8 h-8 rounded-full object-cover" />
                            <div>
                                <p className="text-white text-sm font-semibold">{currentUser.name}</p>
                                <p className="text-gray-400 text-xs">{currentUser.email}</p>
                            </div>
                        </div>

                        <button
                            className="flex items-center gap-2 text-red-400 px-3 py-2 hover:bg-gray-700 rounded-lg w-full text-sm"
                            onClick={handleLogout}
                        >
                            <img src={Logout} className="invert h-3 object-contain"/>
                        </button>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar