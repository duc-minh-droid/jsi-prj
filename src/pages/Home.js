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
        <h1 className='text-4xl bold uppercase'>Happy mother's day!!!</h1>

        <div className='flex justify-center'>
          <iframe src="https://giphy.com/embed/hn8DoY7xrvYTO0MsDE" width="300" height="400" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/happy-mothers-day-mom-hn8DoY7xrvYTO0MsDE"></a></p>
          <iframe src="https://giphy.com/embed/l0K492pBdfQgdTokM" width="400" height="400" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/producthunt-cat-mothers-day-product-hunt-l0K492pBdfQgdTokM"></a></p>
          <iframe src="https://giphy.com/embed/irIw2lJE1eEii0lz8l" width="400" height="400" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bublywater-irIw2lJE1eEii0lz8l"></a></p>
        </div>

        <div className='flex gap-5 items-center'>
          <p className='italic text-2xl text-violet-500 font-serif'>Write your mother a letter</p>
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