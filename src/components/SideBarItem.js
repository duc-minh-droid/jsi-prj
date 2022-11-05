import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBarItem({children, to}) {
  return (
    <div className=''>
        <NavLink to={to}>
            {children}
        </NavLink>
    </div>
  )
}

export default SideBarItem