import React, { useContext } from 'react';
import  { useState, useEffect } from "react";
import { UserContext } from '../../context/userContext';
import { HiOutlineBell } from 'react-icons/hi';
import { RiSettingsLine, } from 'react-icons/ri';

import { AiOutlineSearch } from 'react-icons/ai';
import { Route, Routes, } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import Message from './Message';
import Fileupload from './Fileupload';


export default function Dashboard() {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const [projectName, setProjectName] = useState('');
  const [displayedProjectName, setDisplayedProjectName] = useState('');

  useEffect(() => {
    const storedProjectName = localStorage.getItem('projectName');
    if (storedProjectName) {
      setDisplayedProjectName(storedProjectName);
    }
  }, []);
  
  const handleInputChange = (event) => {
    setProjectName(event.target.value);
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayedProjectName(projectName);
    localStorage.setItem('projectName', projectName);
    setProjectName('');
  };

  


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="hidden sm:flex sm:flex-col">
        <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
        <Sidebar/>
            <Routes>   
              
              <Route path='/message' element={<Message/>}/>
              <Route path='/fileupload' element={<Fileupload/>}/>

              
                
            </Routes>
    
            
        </div>
      </aside>


      {/* Main Content */}
      <div className="flex-grow text-gray-800">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
          <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex-grow flex justify-between items-center">
            <div className="flex items-center">
              <AiOutlineSearch className="h-6 w-6 text-gray-500" />
              <input
                className="pl-2 pr-10 py-2 w-64 bg-gray-100 focus:outline-none focus:ring-purple-600 rounded-md"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center ml-4">
              <HiOutlineBell className="h-6 w-6 text-gray-500" />
              <button onClick={toggleMenu} className="flex items-center text-sm text-purple-600 hover:text-purple-500 focus:text-purple-500 focus:outline-none ml-2">
                <span> {!!user && (<h2>Hi {user.name}!</h2>)}</span>
                <img
                  className="h-8 w-8 ml-2 rounded-full"
                  alt="User aatar"
                  src='user.png' 
                />
              </button>
              <div className= {`${isOpen ? "block" : "hidden"} `}>
                <div className="absolute right-10 mt-5 w-48 bg-white border border-gray-300 rounded-lg py-2 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="p-6 sm:p-10 bg-white">
          {/* Content goes here */}
          <div><div className="flex flex-col items-center">
      <button
        type="submit"
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
      >
        Create Project
      </button>
      <input
        type="text"
        value={projectName}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 mt-2"
        placeholder="Project Name"
      />
      
    </div></div>
        </main>
        <footer className="h-20 px-6 sm:px-10 bg-gray-200">
          <div>{displayedProjectName && (
        <p className="mt-2 px-4 py-2 bg-black text-white ">Project: {displayedProjectName}</p>
      )}</div>
        </footer>
      </div>
    </div>
  );
}


