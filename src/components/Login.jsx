import { useState } from 'react'
import userProfiles from '../data/userProfiles'
import toast from 'react-hot-toast'


function Login({ setIsLoggedIn, setCurrentUser }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handeLogin = () =>{
        const user = userProfiles.find(u => u.email === email && u.password === password)
        if(user){
            setIsLoggedIn(true)
            setCurrentUser(user)
            toast.success(`Welcome back ${user.name}!`)
        } else {
            toast.error("Invalid email or password!")
        }
    }

    return(
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-xl shadow-black/40">
                
                <h2 className="text-3xl font-extrabold text-white mb-1">Welcome back 👋</h2>
                <p className="text-gray-400 text-sm mb-8">Sign in to your account</p>

                <div className="flex flex-col gap-5">
                    <div>
                        <label className="text-gray-400 text-sm mb-1 block">Email</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="you@example.com"
                            className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-indigo-500 transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-gray-400 text-sm mb-1 block">Password</label>
                        <input 
                            id="password" 
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-indigo-500 transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button 
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-500 active:scale-95 transition-all duration-150 hover:cursor-pointer mt-2"
                        onClick={handeLogin}
                    >
                        Login
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Login