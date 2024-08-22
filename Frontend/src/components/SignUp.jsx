import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Login from './Login'

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    document.getElementById('my_modal_3').close(); // Close modal on form submission
  };

  return (
    <div className='flex h-screen items-center justify-center '>
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Modal close button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

            <h3 className="font-bold text-lg">Sign Up</h3>
            
            {/* Name Field */}
            <div className='mt-4 space-y-2'>
              <span>Name</span><br />
              <input 
                type="text" 
                placeholder='Enter your Name' 
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register('name', { required: true })} 
              />
              <br />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            
            {/* Email Field */}
            <div className='mt-4 space-y-2'>
              <span>Email</span><br />
              <input 
                type="email" 
                placeholder='Enter your Email' 
                className='w-80 px-3 py-1 border rounded-md outline-none' 
                {...register('email', { required: true })}
              />
              <br />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            
            {/* Password Field */}
            <div className='mt-4 space-y-2'>
              <span>Password</span><br />
              <input 
                type="password" 
                placeholder='Enter your Password' 
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register('password', { required: true })} 
              />
              <br />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>
            
            {/* Submit Button */}
            <div className='flex justify-around mt-4'>
              <button 
                type="submit"
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                Sign Up
              </button>
            </div>

            {/* Link to Login */}
            <p className='mt-4'>
              Have an account? {" "}
              <button
                className='underline text-blue-500 cursor-pointer'
                onClick={() => document.getElementById("my_modal_3").showModal()}>
                Login
              </button>
              <Login />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
