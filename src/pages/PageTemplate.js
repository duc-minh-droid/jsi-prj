import React from 'react'

function PageTemplate({children}) {
  return (
    <div className='pl-40 py-20 bg-gradient-to-r from-[#f4c4f3] to-[#fc67fa] min-h-screen'>
        {children}
    </div>
  )
}

export default PageTemplate