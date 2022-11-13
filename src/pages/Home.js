import React, { useEffect } from 'react'
import { auth } from '../firebase'
import { useUser } from '../store/stores'
import Login from '../components/Login'
import { Link } from 'react-router-dom'
import PageTemplate from './PageTemplate'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

function Home() {
  const setUser = useUser(state => state.setUser)
  const nav = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [setUser])

  return (
    <div className='body'>
      <div className="context flex flex-col gap-10 text-center items-center">
        <h1 className='text-4xl bold uppercase'>Happy women's day!!!</h1>

        <div className='flex justify-center'>
        <iframe src="https://giphy.com/embed/l4FGy7om4PFgURp4c" width="400" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
        <iframe src="https://giphy.com/embed/YmcTr73AnF6bNIsZim" width="400" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
        <iframe src="https://giphy.com/embed/tr8F7UztwK5dTh2WRU" width="400" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
        </div>

        <div className='flex gap-5 items-center'>
          <p className='italic text-2xl text-violet-500 font-serif'>Write for your woman a letter</p>
          {/* <div onClick={() => nav('/create')} className='bg-cyan-500 text-white rounded-full p-2 border-4 border-transparent hover:border-cyan-500 hover:bg-white hover:text-cyan-500 transition-colors'>
            Start now
          </div> */}
        </div>
      </div>


      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >

    </div>
  )
}

export default Home