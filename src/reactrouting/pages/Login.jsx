import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, Zoom } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const storedUser = JSON.parse(localStorage.getItem("userData"))
  const handleForm = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields", {
        position: "top-center", autoClose: 1000,
        hideProgressBar: true, transition: Zoom
      })
      return
    }
    if (!storedUser) {
      toast.error("No user found", {
        position: "top-center", autoClose: 1000,
        hideProgressBar: true, transition: Zoom
      })
      return
    }
    if (formData.email !== storedUser.email || formData.password !== storedUser.password) {
      toast.error("Invalid Credentials", {
        position: "top-center", autoClose: 1000,
        hideProgressBar: true, transition: Zoom
      })
      return
    }

    toast.success("Logged in successfully", {
      position: "top-center", autoClose: 1000,
      hideProgressBar: true, transition: Zoom
    })
    
    localStorage.setItem("jwt_token", JSON.stringify("code"))

    setFormData({
      email: "",
      password: ""
    })

    navigate("/dashboard")

  }

  return (
    <div className=' h-screen bg-gray-300 w-full flex justify-center items-center '>
      <div className='h-auto w-[25%] rounded-[10px] p-5 shadow-lg bg-white flex flex-col gap-8'>
        <h1 className='flex justify-center items-center p-3 text-3xl font-bold text-blue-600'>Login</h1>

        <form onSubmit={handleForm} className=' p-4 h-auto flex flex-col gap-4'>

          <div className='border shadow-lg flex  rounded-lg border-gray-300 flex items-center justify-center pl-2'>
            <label htmlFor="">Email </label>
            <input type="email" placeholder='enter your email' className='outline-none p-3' onChange={handleInput} name='email' value={formData.email} />
          </div>

          <div className='border shadow-lg flex  rounded-lg border-gray-300 flex items-center justify-center pl-2'>
            <label htmlFor="">Password </label>
            <input type="password" placeholder='enter your password' className='outline-none p-3 ' onChange={handleInput} name='password' value={formData.password} />
          </div>

          <div className=' w-full flex justify-center items-center p-3 flex-col gap-3'>
            <button className=' px-10 py-3 bg-blue-500 text-white font-semibold cursor-pointer rounded-lg'>Login</button>
            <h3>Dont have an account ? <Link to="/register" className='text-blue-600' >Sign up</Link> here</h3>
          </div>

        </form>

      </div>
    </div>

  )
}
export default Login