import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const togglesignin = ()=>{
       setIsSignIn(!isSignIn) 
    }
  return (
    <div>
      <Header />

      <form className='flex flex-col items-center w-full max-w-md mx-auto my-40 bg-gray-800 gap-4 font-bold p-10 rounded-lg'>
        <h1 className='text-left text-lg text-white'>{isSignIn?"Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input
          className='w-full px-4 py-3 text-base border-2 border-gray-400 rounded-md'
          type='text'
          placeholder='Enter Full Name'
        />}
        <input
          className='w-full px-4 py-3 text-base border-2 border-gray-400 rounded-md'
          type='text'
          placeholder='Email address'
        />
        <input
          className='w-full px-4 py-3 text-base border-2 border-gray-400 rounded-md'
          type='password'
          placeholder='Enter password'
        />
        <button className='w-full border-2 rounded-md border-gray-400 bg-red-600 text-lg px-4 py-3 text-white'>
          Sign In
        </button>
        <p className='text-white cursor-pointer' onClick={togglesignin}>{isSignIn? " already register please :sign-in now":"New to Netflix: Sign-up now"}</p>
      </form>
    </div>
  )
}

export default Login