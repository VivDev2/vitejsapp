import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',


    })

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };



    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data
        try {
            const { data } = await axios.post('/register', {
                name, email, password
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success("Account Created")
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="p-10">
      <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form>
          <div>
            <label className="block font-semibold" htmlFor="name">Name</label>
            
            <input
                        className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                        type="text"
                        name="name"
                        placeholder=''
                        id="name"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
          </div>

          <div className="mt-4">
            <label className="block font-semibold" htmlFor="email">Email</label>
            
            <input
                        className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                        type="email"
                        name="email"
                        id="email"
                        placeholder=" Enter email address"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
          </div>

          <div className="mt-4">
            <label className="block font-semibold" htmlFor="password">Password</label>
            
            <input
                        className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                    <button
                        type="button"
                        className="absolute top-30 left-10 mr-10 mt-2"
                        onClick={handleShowPassword}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button type="submit" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Register</button>
            
            <p className="text-center">
                    Already have account?{" "}
                    <Link
                        to="/login"
                        className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                    >
                        <span>Login now </span>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </span>
                    </Link>
                </p>
          </div>
        </form>

        <aside className="">
          <div className="bg-blue-300 bg-transparent p-8 rounded">
            <h2 className="font-bold text-2xl">Instructions</h2>
            <ul className="list-disc mt-4 list-inside">
              <li>All users must provide a valid email address and password to create an account.</li>
              <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information</li>
              <li>Users must not create multiple accounts for the same person.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
    );
};



