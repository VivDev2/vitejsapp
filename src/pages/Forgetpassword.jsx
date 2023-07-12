import { useState } from 'react'
import axios from 'axios'

import { toast } from 'react-hot-toast';


export default function ForgetPassword() {
    
    

    const [data, setData] = useState({
        email: '',       

    })

    const sendUserPasswordResetEmail = async (e) => {
        e.preventDefault();
        const {email} = data
        try {
            const { data } = await axios.post('/send-reset-password-email', {
                email,
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success("Link sent on your email") 
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <form onSubmit={sendUserPasswordResetEmail} className="max-w-lg mx-auto my-15 bg-white p-20 rounded-xl shadow shadow-slate-300">
                <h2 className="text-2xl font-bold mb-4">Forget Password</h2>
                <p className="text-slate-500">Enter, email and  get a link  to reset password,<br/>vaild for 10min </p>
                
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" >
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
  
                <button
                    className="bg-blue-500 text-white px-4 w-full py-2 rounded-md hover:bg-blue-600"
                    type="submit"
                >
                    Forgot Password
                </button>
                
            </form>
        </div>
    );
};