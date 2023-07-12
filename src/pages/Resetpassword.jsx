import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function resetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const navigate = useNavigate()

    const [data, setData] = useState({
        
        password: '',
        password_confirmation: '',


    })

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowPassword1 = () => {
      setShowPassword1(!showPassword1);
    };



    const userPasswordReset = async (e) => {
        e.preventDefault();
        const { password, password_confirmation } = data
        try {
            const { data } = await axios.post('/reset-password/:id/:token', {
                 password, password_confirmation
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success("Password Reset successfull")
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <form onSubmit={userPasswordReset} className="max-w-lg mx-auto my-15 bg-white p-20 rounded-xl shadow shadow-slate-300">
                <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
                
                
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
                        placeholder="Enter New Password"
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

                <div className="mb-4 relative">
                    <label
                        className=" inline-block text-gray-700 font-bold mb-2"
                        htmlFor=""
                    >
                          Confirm Password
                    </label>
                    <input
                        className="w-full border border-gray-400 p-2 rounded-md"
                        type={showPassword1 ? "text" : "password"}
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="Confirm password"
                        value={data.password_confirmation}
                        onChange={(e) => setData({ ...data, password_confirmation: e.target.value })}
                    />
                    <button
                        type="button"
                        className="absolute top-0 right-0 mr-2 mt-2"
                        onClick={handleShowPassword1}
                    >
                        {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <button
                    className="bg-blue-500 text-white px-4 w-full py-2 rounded-md hover:bg-blue-600"
                    type="submit"
                >
                    Reset Password
                </button>
                
            </form>
        </div>
    );
};