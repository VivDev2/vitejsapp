import React from 'react'
import Sidebar from '../components/SideBar'

function Message() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="hidden sm:flex sm:flex-col">
        <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
        <Sidebar/>
               
    
        </div>
      </aside>
    </div>
  )
}

export default Message