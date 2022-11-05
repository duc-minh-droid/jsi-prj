import React from 'react'
import { auth } from '../firebase'
import { useUser } from '../store/stores'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import {AiOutlineLogout} from 'react-icons/ai'
import {AiOutlineLogin} from 'react-icons/ai'

function Login() {
    const user = useUser(state => state.user)

    const handleLogin = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    const handleLogout = () => {
        signOut(auth)
    }

    return (
        <div>
            {user ? <button className='border-red-500 border-2 text-red-500 rounded-full p-1 focus:border-transparent focus:bg-red-500 focus:text-white flex justify-center items-center'
                onClick={handleLogout}>
                <AiOutlineLogout size={35} />
            </button>
                :
                <div>
                    <button className='border-green-500 border-2 text-green-500 rounded-full p-1 focus:border-transparent focus:bg-green-500 focus:text-white flex justify-center items-center'
                        onClick={handleLogin}>
                        <AiOutlineLogin size={35} />
                    </button>
                </div>
            }
        </div>
    )
}

export default Login