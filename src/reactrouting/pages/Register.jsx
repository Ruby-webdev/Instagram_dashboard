import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast, Zoom } from 'react-toastify';

const Register = () => {

    const [registeredData, setRegisteredData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate()

    const handleInput = (e) => {
        const { name, value } = e.target
        setRegisteredData({ ...registeredData, [name]: value })
    }

    const handleForm = (e) => {
        e.preventDefault()
        if (!registeredData.email || !registeredData.password) {
            toast.error("Fill the fields", {
                position: "top-center", autoClose: 1000,
                hideProgressBar: true, transition: Zoom
            })
            return
        }
        toast.success("registered successfully", {
            position: "top-center", autoClose: 1000,
            hideProgressBar: true, transition: Zoom
        })
        localStorage.setItem("userData", JSON.stringify(registeredData))

        navigate("/login")
    }

    return (
        <div className='w-full h-screen bg-blue-200 flex justify-center items-center'>
            <div className='w-[25%] h-auto p-5 rounded-[10px] shadow-lg bg-white flex flex-col gap-5 '>
                <h1 className='flex items-center justify-center p-3 font-bold text-3xl text-blue-600'>Register</h1>

                <form onSubmit={handleForm} className='h-auto p-4 gap-5 flex flex-col'>
                    <div className='border border-gray-300 flex pl-3 items-center rounded-lg shadow-lg '>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='enter your email_id' className='outline-none p-3' onChange={handleInput} name='email' value={registeredData.email} />
                    </div>

                    <div className='border border-gray-300 flex pl-3 items-center rounded-lg shadow-lg '>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='enter your password' className='outline-none p-3' onChange={handleInput} name='password' value={registeredData.password} />
                    </div>

                    <div className='flex items-center justify-center flex-col gap-3'>
                        <button className='border px-10 py-3 bg-blue-600 rounded-lg text-white font-semibold cursor-pointer'>Register</button>
                        <h3>Are you an existing user ? <Link to="/login" className='text-blue-600'>Sign In</Link> here</h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register