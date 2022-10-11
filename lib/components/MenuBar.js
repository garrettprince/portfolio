import React from 'react'

function MenuBar() {
  return (
    <main className='flex space-x-4 rotate-270 text-gray-300'>
        <button className='hover:font-bold'>CONTACT</button>
        <button>ABOUT</button>
        <button>PROJECTS</button>
    </main>
  )
}

export default MenuBar