import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    password: '',


  })

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data
    try {
      const { data } = await axios.post('/login', {
        email, password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success("Login Successful")
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <form onSubmit={loginUser} className="max-w-lg mx-auto my-15 bg-white p-20 rounded-xl shadow shadow-slate-300">
        <h2 className="text-2xl font-bold mb-4">Login</h2>


        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="email"
            name="email"
            id="email"
            placeholder=" Enter email address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="mb-4 relative">
          <label
            className=" inline-block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button
            type="button"
            className="absolute top-0 right-0 mr-2 mt-2"
            onClick={handleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <Link
          to="/forgetPassword"
          className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
        >
          <span>Forget Password</span>

        </Link>




        <button
          className="bg-blue-500 text-white px-4 w-full py-2 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
        <p className="text-center">
          Don't have account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
          >
            <span>Register now </span>
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
      </form>
    </div>
  );
};